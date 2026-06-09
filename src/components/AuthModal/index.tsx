import React, { useState, useEffect } from "react";
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

  // Test values used to fill {{storeId}} / {{merchantId}} in playground bodies
  const [storeId, setStoreIdInput] = useState("");
  const [merchantId, setMerchantIdInput] = useState("");

  useEffect(() => {
    setStoreIdInput(getStoreId());
    setMerchantIdInput(getMerchantId());
  }, [open]);

  const handleStoreIdChange = (v: string) => {
    setStoreIdInput(v);
    setStoreId(v);
    window.dispatchEvent(new Event("rm-test-values-changed"));
  };
  const handleMerchantIdChange = (v: string) => {
    setMerchantIdInput(v);
    setMerchantId(v);
    window.dispatchEvent(new Event("rm-test-values-changed"));
  };

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

        <div className={styles.testValues}>
          <p className={styles.testValuesTitle}>Playground test values</p>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label className={styles.label}>
                Store ID
                <span className={styles.labelBadge}>fills {`{{storeId}}`}</span>
              </label>
              <input
                className={styles.input}
                type="text"
                value={storeId}
                onChange={(e) => handleStoreIdChange(e.target.value)}
                placeholder="Enter a storeId to use in requests"
                autoComplete="off"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>
                Merchant ID
                <span className={styles.labelBadge}>fills {`{{merchantId}}`}</span>
              </label>
              <input
                className={styles.input}
                type="text"
                value={merchantId}
                onChange={(e) => handleMerchantIdChange(e.target.value)}
                placeholder="Enter a merchantId to use in requests"
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        {step === "success" ? (
          <div className={styles.successBlock}>
            <div className={styles.successIcon}>✓</div>
            <p className={styles.successTitle}>Connected</p>
            <p className={styles.successDesc}>
              Access token stored. All API playgrounds on this page will use it automatically.
            </p>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Sign out &amp; clear session
            </button>
            <button className={styles.doneBtn} onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <a
              href="https://sb-oauth.revenuemonster.my/login?redirectUri=https://sb-merchant.revenuemonster.my/developer/applications"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dashboardBtn}
            >
              Create App on Dashboard
            </a>

            <p className={styles.dividerLabel}>or paste your credentials below</p>

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
              className={styles.connectBtn}
              onClick={handleConnect}
              disabled={step === "loading"}
            >
              {step === "loading" ? "Connecting…" : "Connect"}
            </button>

            <p className={styles.sessionNote}>
              Session only — everything is cleared when you close this tab
            </p>
          </>
        )}
      </div>
    </div>
  );
}