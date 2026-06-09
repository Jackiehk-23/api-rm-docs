const WORKER_BASE = "https://rm-api-proxy.aiman-danish.workers.dev";

function isBrowser() {
  return typeof window !== "undefined";
}

const EXPIRY_KEY = "rm_token_expiry";
const SESSION_KEY = "rm_session_id";

export function setTokenExpiry(expiresInSeconds: number) {
  if (!isBrowser()) return;
  const expiresAt = Date.now() + expiresInSeconds * 1000;
  localStorage.setItem(EXPIRY_KEY, expiresAt.toString());
}

export function getTokenExpiry(): number | null {
  if (!isBrowser()) return null;
  const raw = localStorage.getItem(EXPIRY_KEY);
  return raw ? parseInt(raw, 10) : null;
}

export function tokenSecondsRemaining(): number | null {
  const expiry = getTokenExpiry();
  if (expiry === null) return null;
  return Math.floor((expiry - Date.now()) / 1000);
}

export function isTokenExpired(): boolean {
  const secs = tokenSecondsRemaining();
  if (secs === null) return false;
  return secs <= 0;
}

export function tokenExpiryLabel(): string | null {
  const secs = tokenSecondsRemaining();
  if (secs === null) return null;
  if (secs <= 0) return "expired";
  if (secs < 3600) return `${Math.floor(secs / 60)} min`;
  if (secs < 86400) return `${Math.floor(secs / 3600)} hr`;
  return `${Math.floor(secs / 86400)} days`;
}

export function deriveTokenStatus(): "missing" | "expired" | "active" {
  const expiry = getTokenExpiry();
  if (expiry === null) return "missing";
  if (isTokenExpired()) return "expired";
  return "active";
}

export function clearTokenExpiry() {
  if (!isBrowser()) return;
  localStorage.removeItem(EXPIRY_KEY);
}

export function setSessionId(sessionId: string) {
  if (!isBrowser()) return;
  localStorage.setItem(SESSION_KEY, sessionId);
}

export function getSessionId(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem(SESSION_KEY);
}

export function clearSessionId() {
  if (!isBrowser()) return;
  localStorage.removeItem(SESSION_KEY);
}

export async function syncAuthStatus(
  onActive: (expiresIn: number) => void,
  onInactive: () => void
) {
  if (!isBrowser()) return;
  try {
    const sessionId = getSessionId();
    const headers: Record<string, string> = {};
    if (sessionId) headers["X-Session-Id"] = sessionId;

    const res = await fetch(`${WORKER_BASE}/auth/status`, {
      method: "GET",
      credentials: "include",
      headers,
    });

    const data = await res.json();

    if (data.authenticated && typeof data.expiresIn === "number") {
      setTokenExpiry(data.expiresIn);
      onActive(data.expiresIn);
    } else {
      clearTokenExpiry();
      onInactive();
    }
  } catch {
    /* network error — leave current auth state unchanged */
  }
}
/* ===================== Test values (storeId / merchantId) =====================
   User-supplied IDs used to fill {{storeId}} / {{merchantId}} placeholders in
   playground request bodies. Stored in sessionStorage so they follow the same
   "cleared when you close the tab" promise as the rest of the session. */

const STORE_ID_KEY = "rm_store_id";
const MERCHANT_ID_KEY = "rm_merchant_id";

function readTestValue(key: string): string {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(key) ?? "";
}

function writeTestValue(key: string, value: string) {
  if (typeof window === "undefined") return;
  if (value) sessionStorage.setItem(key, value);
  else sessionStorage.removeItem(key);
}

export function getStoreId(): string {
  return readTestValue(STORE_ID_KEY);
}
export function setStoreId(value: string) {
  writeTestValue(STORE_ID_KEY, value.trim());
}
export function getMerchantId(): string {
  return readTestValue(MERCHANT_ID_KEY);
}
export function setMerchantId(value: string) {
  writeTestValue(MERCHANT_ID_KEY, value.trim());
}

/** Replace {{storeId}} / {{merchantId}} tokens with the saved test values.
    Leaves other {{...}} placeholders (token/signature/nonce) untouched —
    those are injected server-side by the signing proxy. */
export function resolveTestPlaceholders(text: string): string {
  return text
    .replace(/\{\{\s*storeId\s*\}\}/g, getStoreId())
    .replace(/\{\{\s*merchantId\s*\}\}/g, getMerchantId());
}
