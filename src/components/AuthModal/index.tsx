import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  getSessionId,
  syncAuthStatus,
  setTokenExpiry,
  clearTokenExpiry,
  setSessionId,
  clearSessionId,
  getStoreId,
  setStoreId,
  getMerchantId,
  setMerchantId,
} from "../../utils/auth";
import { setPrivateKey, clearPrivateKey } from "../../utils/privateKey";
import styles from "./styles.module.css";

const WORKER_BASE = "https://rm-api-proxy.aiman-danish.workers.dev";

type Step = "form" | "loading" | "success" | "error";

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [privateKey, setPrivateKeyInput] = useState("");

  const initialStep: Step = (() => {
    if (typeof window === "undefined") return "form";
    const sid = localStorage.getItem("rm_session_id");
    return sid ? "success" : "form";
  })();

  const [step, setStep] = useState<Step>(initialStep);
  const [errorMsg, setErrorMsg] = useState("");

  // Selected store id (fills {{storeId}} in playground requests)
  const [storeId, setStoreIdInput] = useState("");

  // Stores fetched from GET /v3/stores after connecting
  const [stores, setStores] = useState<Array<{ id: string; name: string }>>([]);
  const [storesLoading, setStoresLoading] = useState(false);
  const [storesError, setStoresError] = useState("");

  // Active merchant id + (partner only) the list of sub-merchants
  const [merchantId, setMerchantIdState] = useState("");
  const [merchants, setMerchants] = useState<Array<{ id: string; name: string }>>([]);

  // Wizard height tracks the active slide so there's no empty space below the shorter one
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const [wizardH, setWizardH] = useState<number | undefined>(undefined);
  useLayoutEffect(() => {
    if (!open) return;
    const active = step === "success" ? slide2Ref.current : slide1Ref.current;
    if (active) setWizardH(active.offsetHeight);
  }, [open, step, stores, merchants, storesLoading, storesError, errorMsg]);

  useEffect(() => {
    setStoreIdInput(getStoreId());
    setMerchantIdState(getMerchantId());
  }, [open]);

  const applyMerchant = (id: string) => {
    setMerchantId(id);
    setMerchantIdState(id);
    window.dispatchEvent(new Event("rm-test-values-changed"));
  };

  const selectStore = (id: string) => {
    setStoreIdInput(id);
    setStoreId(id);
    window.dispatchEvent(new Event("rm-test-values-changed"));
  };

  // Run a signed GET through the proxy (sign server-side, then proxy the call).
  const workerGet = async (url: string): Promise<any> => {
    const wh = (): Record<string, string> => {
      const h: Record<string, string> = { "Content-Type": "application/json" };
      const sid = getSessionId();
      if (sid) h["X-Session-Id"] = sid;
      return h;
    };
    const signRes = await fetch(`${WORKER_BASE}/auth/sign`, {
      method: "POST",
      credentials: "include",
      headers: wh(),
      body: JSON.stringify({ method: "GET", url }),
    });
    const sign = await signRes.json();
    const res = await fetch(WORKER_BASE, {
      method: "POST",
      credentials: "include",
      headers: wh(),
      body: JSON.stringify({
        url,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Signature": sign.signature,
          "X-Nonce-Str": sign.nonceStr,
          "X-Timestamp": sign.timestamp,
        },
      }),
    });
    return res.json();
  };

  // Auto-derive the connected merchant's own id (GET /v3/merchant) so users
  // never type it. Used as the default {{merchantId}} / {merchantId} value.
  const fetchMerchant = async () => {
    try {
      const data = await workerGet("https://sb-open.revenuemonster.my/v3/merchant");
      const id = data?.item?.id;
      if (id && !getMerchantId()) applyMerchant(id);
    } catch {
      /* silent — merchantId is optional */
    }
  };

  // Partners manage multiple sub-merchants — list them so they can target a
  // specific one. Non-partners get an error/empty list and never see the picker.
  const fetchMerchants = async () => {
    try {
      const data = await workerGet("https://sb-open.revenuemonster.my/v3/partner/merchants");
      const items = Array.isArray(data?.items) ? data.items : [];
      setMerchants(items.map((m: any) => ({ id: m.id, name: m.companyName || m.name || m.id })));
    } catch {
      setMerchants([]);
    }
  };

  // Fetch the merchant's stores through the signing proxy (same flow as the playground).
  const fetchStores = async () => {
    setStoresLoading(true);
    setStoresError("");
    try {
      const data = await workerGet("https://sb-open.revenuemonster.my/v3/stores");
      const items = Array.isArray(data?.items) ? data.items : [];
      if (!items.length && data?.error) {
        setStoresError(typeof data.error === "string" ? data.error : "Could not load stores.");
      }
      const list = items.map((s: any) => ({ id: s.id, name: s.name }));
      setStores(list);

      // Auto-select so the playground works without an extra click:
      // keep the saved store if it's still in the list, otherwise pick the first.
      if (list.length) {
        const saved = getStoreId();
        const pick = saved && list.some((s) => s.id === saved) ? saved : list[0].id;
        selectStore(pick);
      }
    } catch (err: any) {
      setStoresError(err?.message || "Could not load stores.");
    } finally {
      setStoresLoading(false);
    }
  };

  // Load stores whenever the modal is open and we're connected.
  useEffect(() => {
    if (open && step === "success" && stores.length === 0 && !storesLoading) {
      fetchStores();
      fetchMerchant();
      fetchMerchants();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, step]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("rm-open-auth", handler);
    return () => window.removeEventListener("rm-open-auth", handler);
  }, []);

  useEffect(() => {
    const run = async () => {
      const sessionId = getSessionId();

      if (sessionId) {
        setStep("success");
      }

      await syncAuthStatus(
        () => {
          setStep("success");
        },
        () => {
          const latestSession = getSessionId();
          if (latestSession) {
            setStep("success");
          } else {
            setStep("form");
          }
        }
      );
    };

    run();

    window.addEventListener("rm-auth-changed", run);
    window.addEventListener("focus", run);

    return () => {
      window.removeEventListener("rm-auth-changed", run);
      window.removeEventListener("focus", run);
    };
  }, []);

  const handleConnect = async () => {
    if (!clientId.trim() || !clientSecret.trim()) {
      setErrorMsg("Client ID and Client Secret are required.");
      return;
    }

    setStep("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${WORKER_BASE}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: clientId.trim(),
          clientSecret: clientSecret.trim(),
          privateKey: privateKey.trim() || undefined,
          env: "sandbox",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const rawError = data?.error || data?.message;
        const errorText =
          typeof rawError === "string"
            ? rawError
            : typeof rawError === "object" && rawError !== null
            ? rawError.message || JSON.stringify(rawError)
            : "Authentication failed. Check your credentials.";
        setErrorMsg(errorText);
        setStep("error");
        return;
      }

      setTokenExpiry(data.expiresIn);

      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      if (privateKey.trim()) {
        setPrivateKey(privateKey.trim());
      }

      setStep("success");
      window.dispatchEvent(new CustomEvent("rm-auth-changed"));
      setStores([]);
      fetchStores();
      fetchMerchant();
      fetchMerchants();
    } catch (err: any) {
      setErrorMsg(err?.message || "Network error. Try again.");
      setStep("error");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${WORKER_BASE}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // best effort
    }
    clearTokenExpiry();
    clearSessionId();
    clearPrivateKey();
    setStep("form");
    setClientId("");
    setClientSecret("");
    setPrivateKeyInput("");
    setStores([]);
    setStoresError("");
    window.dispatchEvent(new CustomEvent("rm-auth-changed"));
  };

  const handleClose = () => {
    setOpen(false);
    setErrorMsg("");
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.header}>
          <div>
            <p className={styles.title}>Connect your account</p>
            <p className={styles.subtitle}>Credentials stay in your browser only</p>
          </div>
          <button className={styles.closeBtn} onClick={handleClose}>✕</button>
        </div>

        <div className={styles.wizard} style={{ height: wizardH }}>
          <div
            className={styles.track}
            style={{ transform: step === "success" ? "translateX(-100%)" : "translateX(0)" }}
          >
            {/* ── Slide 1: enter credentials ── */}
            <div className={styles.slide} ref={slide1Ref} aria-hidden={step === "success"}>
              <p className={styles.formIntro}>
                Get your <strong>Client ID</strong>, <strong>Client Secret</strong> and RSA keys from the{" "}
                <a
                  href="https://sb-oauth.revenuemonster.my/login?redirectUri=https://sb-merchant.revenuemonster.my/developer/applications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.portalLink}
                >
                  Merchant Portal ↗
                </a>
                , then paste them below.
              </p>

              {step === "error" && (
                <div className={styles.errorBanner}>{errorMsg}</div>
              )}

              <div className={styles.fields}>
                <div className={styles.field}>
                  <label className={styles.label}>Client ID</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    placeholder="Enter your client ID"
                    autoComplete="off"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Client secret</label>
                  <input
                    className={styles.input}
                    type="password"
                    value={clientSecret}
                    onChange={(e) => setClientSecret(e.target.value)}
                    placeholder="Enter your client secret"
                    autoComplete="off"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>
                    Private key
                    <span className={styles.labelBadge}>stays in memory only</span>
                  </label>
                  <textarea
                    className={styles.textarea}
                    value={privateKey}
                    onChange={(e) => setPrivateKeyInput(e.target.value)}
                    placeholder={"-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"}
                    rows={4}
                  />
                </div>
              </div>

              <button
                className={`rm-gradient-btn ${styles.connectBtn}`}
                onClick={handleConnect}
                disabled={step === "loading"}
              >
                {step === "loading" ? "Connecting…" : "Connect"}
              </button>

              <p className={styles.sessionNote}>
                Session only — everything is cleared when you close this tab
              </p>
            </div>

            {/* ── Slide 2: connected + stores ── */}
            <div className={styles.slide} ref={slide2Ref} aria-hidden={step !== "success"}>
              <div className={styles.connectedRow}>
                <span className={styles.connectedDot} />
                <span className={styles.connectedText}>Connected — session active</span>
              </div>

              <div className={styles.testValues}>
                <p className={styles.testValuesTitle}>Pick a store</p>
                <div className={styles.storePicker}>
                  <div className={styles.storePickerHead}>
                    <span>
                      {storesError
                        ? "Couldn't load stores"
                        : storeId
                        ? "Selected — used in your requests"
                        : "Select one to use in your requests"}
                    </span>
                    {!storesLoading && (
                      <button
                        type="button"
                        className={styles.storeRefresh}
                        onClick={() => { setStores([]); fetchStores(); }}
                      >
                        Refresh
                      </button>
                    )}
                  </div>
                  {storesLoading ? (
                    <div className={styles.storeLoading}>
                      <span className={styles.spinner} />
                      <span>Loading stores…</span>
                    </div>
                  ) : storesError ? (
                    <div className={styles.storeError}>
                      You're connected, but requests can't be signed — you connected
                      without a <strong>private key</strong>.
                      <button
                        type="button"
                        className={styles.reconnectBtn}
                        onClick={handleLogout}
                      >
                        Reconnect with private key →
                      </button>
                    </div>
                  ) : stores.length === 0 ? (
                    <div className={styles.storeEmpty}>No stores found.</div>
                  ) : (
                    <ul className={styles.storeList}>
                      {stores.map((s) => (
                        <li key={s.id}>
                          <button
                            type="button"
                            className={`${styles.storeItem} ${s.id === storeId ? styles.storeItemActive : ""}`}
                            onClick={() => selectStore(s.id)}
                          >
                            <span className={styles.storeName}>{s.name || "Untitled store"}</span>
                            <span className={styles.storeIdText}>{s.id}</span>
                            {s.id === storeId && <span className={styles.storeCheck}>✓</span>}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {merchants.length > 0 && (
                  <div className={styles.storePicker} style={{ marginTop: 14 }}>
                    <div className={styles.storePickerHead}>
                      <span>Sub-merchant · partner endpoints</span>
                    </div>
                    <ul className={styles.storeList}>
                      {merchants.map((m) => (
                        <li key={m.id}>
                          <button
                            type="button"
                            className={`${styles.storeItem} ${m.id === merchantId ? styles.storeItemActive : ""}`}
                            onClick={() => applyMerchant(m.id)}
                          >
                            <span className={styles.storeName}>{m.name}</span>
                            <span className={styles.storeIdText}>{m.id}</span>
                            {m.id === merchantId && <span className={styles.storeCheck}>✓</span>}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              <button className={styles.logoutBtn} onClick={handleLogout}>
                Sign out &amp; clear session
              </button>
              <button className={styles.doneBtn} onClick={handleClose}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}