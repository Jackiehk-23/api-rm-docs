import React, { useState, useRef, useLayoutEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { lookupError, extractErrorCodes } from "../../utils/errorCodes";
import TokenBanner from "./TokenBanner";
// import PrivateKeyBanner from "./PrivateKeyBanner";
import { SharedState } from "./UseApiSharedState";
import HttpMethodBadge from "../HttpMethodBadge";
import styles from "./styles.module.css";

const highlightJson = (json: string) =>
  json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")\s*:/g,
      `<span class="${styles.jsonKey}">$1</span>:`
    )
    .replace(
      /:\s*("(\\u[a-zA-Z0-9]{4}|\\[^\\"])*")/g,
      `: <span class="${styles.jsonStringValue}">$1</span>`
    )
    .replace(
      /:\s*(\d+|true|false|null)/g,
      `: <span class="${styles.jsonNumValue}">$1</span>`
    );

type Props = {
  shared: SharedState;
  children?: React.ReactNode;
  onCollapsePanel?: () => void;
};

export default function ApiPlayground({ shared, children, onCollapsePanel }: Props) {
  const {
    baseUrl,
    params, setParams,
    tokenStatus,
    handleClearToken,
    headers, setHeaders, jsonBody, setJsonBody,
    requiresSignature, requiresAccessToken, notReady,
    method, send,
  } = shared;

  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [missedSignature, setMissedSignature] = useState(false);
  const [copiedHeaders, setCopiedHeaders] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [openHeaders, setOpenHeaders] = useState(true);
  const [openBody, setOpenBody] = useState(true);
  const headersPreRef = useRef<HTMLPreElement>(null);
  const bodyPreRef = useRef<HTMLPreElement>(null);
  const isEditingHeadersRef = useRef(false);
  const isEditingBodyRef = useRef(false);

  // useLayoutEffect runs synchronously after DOM mutation but before paint — no flash of empty pre
  useLayoutEffect(() => {
    const el = headersPreRef.current;
    if (!el || isEditingHeadersRef.current) return;
    const next = highlightJson(JSON.stringify(headers, null, 2));
    if (el.innerHTML !== next) el.innerHTML = next;
  }, [headers]);

  useLayoutEffect(() => {
    const el = bodyPreRef.current;
    if (!el || isEditingBodyRef.current) return;
    const next = highlightJson(jsonBody);
    if (el.innerHTML !== next) el.innerHTML = next;
  }, [jsonBody]);

  const handleCopyHeaders = () => {
    navigator.clipboard.writeText(JSON.stringify(headers, null, 2)).then(() => {
      setCopiedHeaders(true);
      setTimeout(() => setCopiedHeaders(false), 2000);
    });
  };

  const handleCopyBody = () => {
    navigator.clipboard.writeText(jsonBody).then(() => {
      setCopiedBody(true);
      setTimeout(() => setCopiedBody(false), 2000);
    });
  };

  const handleSend = async () => {
    try {
      setLoading(true);
      setResponse(null);
      setStatus(null);
      setMissedSignature(false);
      const result = await send();
      setResponse(result.response);
      setStatus(result.status);
      setMissedSignature(result.missedSignature);
    } catch (err: any) {
      alert("Request failed: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
    }
  };

  const envPageUrl = useBaseUrl("docs/introduction/overview") + "#environments";

  if (!baseUrl) return null;

  const KNOWN_SERVERS: { prefix: string; label: string }[] = [
    { prefix: "https://sb-oauth.revenuemonster.my", label: "OAuth Server" },
    { prefix: "https://oauth.revenuemonster.my",    label: "OAuth Server" },
    { prefix: "https://sb-open.revenuemonster.my",  label: "API Server"   },
    { prefix: "https://open.revenuemonster.my",     label: "API Server"   },
  ];

  let serverLabel = "";
  let urlPath = baseUrl;
  for (const s of KNOWN_SERVERS) {
    if (baseUrl.startsWith(s.prefix)) {
      serverLabel = s.label;
      urlPath = baseUrl.slice(s.prefix.length);
      break;
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HttpMethodBadge method={method} />
        <span className={styles.url}>
          {serverLabel ? (
            <>
              <a href={envPageUrl} className={styles.urlServer}>
                {serverLabel}
              </a>
              {urlPath.split(/({[^}]+})/g).map((part, i) => {
                const match = part.match(/{([^}]+)}/);
                if (!match) return <span key={i}>{part}</span>;
                const key = match[1];
                return (
                  <span
                    key={i}
                    contentEditable
                    suppressContentEditableWarning
                    className={styles.urlParam}
                    onBlur={(e) =>
                      setParams({ ...params, [key]: e.currentTarget.innerText.trim() })
                    }
                  >
                    {params[key] ?? key}
                  </span>
                );
              })}
            </>
          ) : (
            baseUrl.split(/({[^}]+})/g).map((part, i) => {
              const match = part.match(/{([^}]+)}/);
              if (!match) return <span key={i}>{part}</span>;
              const key = match[1];
              return (
                <span
                  key={i}
                  contentEditable
                  suppressContentEditableWarning
                  className={styles.urlParam}
                  onBlur={(e) =>
                    setParams({ ...params, [key]: e.currentTarget.innerText.trim() })
                  }
                >
                  {params[key] ?? key}
                </span>
              );
            })
          )}
        </span>
      </div>

      <div className={styles.playgroundBody}>
        {requiresAccessToken && (
          <TokenBanner status={tokenStatus} onClear={handleClearToken} />
        )}

        {/* Headers card */}
        <div className={styles.editorCard}>
          <div className={styles.editorCardHeader} onClick={() => setOpenHeaders(!openHeaders)}>
            <span className={styles.editorCardTitle}>Headers</span>
            <div className={styles.editorCardActions} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={`${styles.editorCopyBtn} ${copiedHeaders ? styles.editorCopied : ""}`}
                onClick={handleCopyHeaders}
                title="Copy headers"
              >
                {copiedHeaders ? "✓" : "Copy"}
              </button>
              <span className={`${styles.editorChevron} ${!openHeaders ? styles.editorChevronCollapsed : ""}`}>▾</span>
            </div>
          </div>
          <pre
            ref={headersPreRef}
            className={`${styles.editor} ${!openHeaders ? styles.editorCollapsed : ""}`}
            contentEditable
            suppressContentEditableWarning
            onFocus={() => { isEditingHeadersRef.current = true; }}
            onBlur={(e) => {
              isEditingHeadersRef.current = false;
              try { setHeaders(JSON.parse(e.currentTarget.innerText)); } catch { }
            }}
          />
        </div>

        {/* Body card */}
        {method !== "GET" && (
          <div className={styles.editorCard}>
            <div className={styles.editorCardHeader} onClick={() => setOpenBody(!openBody)}>
              <span className={styles.editorCardTitle}>Body</span>
              <div className={styles.editorCardActions} onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className={`${styles.editorCopyBtn} ${copiedBody ? styles.editorCopied : ""}`}
                  onClick={handleCopyBody}
                  title="Copy body"
                >
                  {copiedBody ? "✓" : "Copy"}
                </button>
                <span className={`${styles.editorChevron} ${!openBody ? styles.editorChevronCollapsed : ""}`}>▾</span>
              </div>
            </div>
            <pre
              ref={bodyPreRef}
              className={`${styles.editor} ${!openBody ? styles.editorCollapsed : ""}`}
              contentEditable
              suppressContentEditableWarning
              onFocus={() => { isEditingBodyRef.current = true; }}
              onBlur={(e) => {
                isEditingBodyRef.current = false;
                setJsonBody(e.currentTarget.innerText);
              }}
            />
          </div>
        )}

        <button
          className={`${styles.send} ${notReady ? styles.sendBlocked : ""}`}
          onClick={handleSend}
          disabled={loading}
          title={notReady ? "Resolve the warnings above before sending" : undefined}
        >
          {loading ? "Sending…" : "▶ Send Request"}
        </button>

        {missedSignature && (
          <div className={`${styles.banner} ${styles.bannerWarning}`} style={{ marginTop: 12 }}>
            <span className={styles.bannerDot} />
            <span>
              Request sent <strong>without a signature</strong> — the server will likely reject it.
              Paste your private key above and send again.
            </span>
          </div>
        )}

        {status !== null && (
          <div>
            <div className={styles.statusLine}>
              <span className={status >= 200 && status < 300 ? styles.statusOk : styles.statusErr}>
                {status}
              </span>
              {response?._error && (
                <span className={styles.statusHint}>{response._error}</span>
              )}
            </div>
            {!response?._error && (
              <pre className={styles.response}>
                {JSON.stringify(response, null, 2)}
              </pre>
            )}
            {status >= 300 && !response?._error && (() => {
              const codes = extractErrorCodes(response);
              if (codes.length === 0) return null;
              return (
                <div className={styles.errorLookup}>
                  <div className={styles.errorLookupHeader}>
                    <span className={styles.errorLookupIcon}>⚑</span>
                    <span>Error Code Reference</span>
                  </div>
                  {codes.map((code) => {
                    const entry = lookupError(code);
                    return (
                      <div key={code} className={styles.errorLookupEntry}>
                        <div className={styles.errorLookupCode}>{code}</div>
                        {entry ? (
                          <>
                            <div className={styles.errorLookupDesc}>{entry.description}</div>
                            {entry.solution && (
                              <div className={styles.errorLookupSolution}>
                                <span className={styles.errorLookupSolutionLabel}>💡 Fix</span>
                                {entry.solution}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className={styles.errorLookupDesc}>
                            No description found.{" "}
                            <a href="/docs/error-codes" className={styles.errorLookupLink}>
                              View all error codes →
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className={styles.errorLookupFooter}>
                    <a href="/docs/error-codes" className={styles.errorLookupLink}>
                      View full error code reference →
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}