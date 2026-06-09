import { useState, useMemo, useEffect } from "react";
import {
    deriveTokenStatus,
    setTokenExpiry,
    clearTokenExpiry,
    syncAuthStatus,
    getSessionId,
    resolveTestPlaceholders,
    getStoreId,
    getMerchantId,
} from "../../utils/auth";
import {
    getPrivateKey,
    setPrivateKey as storePrivateKey,
    hasPrivateKey,
    clearPrivateKey,
} from "../../utils/privateKey";

export type TokenStatus = "missing" | "expired" | "active";
export type PlaygroundProps = {
    method: string;
    title?: string;
    url?: string;
    body?: string | { type: "json"; example?: string };
    requiresSignature?: boolean;
    requiresAccessToken?: boolean;
    useServerSigning?: boolean;
    exampleRequest?: string;
};

export type SharedState = {
    baseUrl: string;
    resolvedUrl: string;
    params: Record<string, string>;
    setParams: (p: Record<string, string>) => void;
    paramKeys: string[];
    resolveParam: (key: string) => string;
    tokenStatus: TokenStatus;
    // keyLoaded: boolean;
    handleClearToken: () => void;
    // handleLoadKey: (key: string) => void;
    // handleClearKey: () => void;
    headers: Record<string, string>;
    setHeaders: (h: Record<string, string>) => void;
    jsonBody: string;
    setJsonBody: (b: string) => void;
    isOAuth: boolean;
    requiresSignature: boolean;
    requiresAccessToken: boolean;
    notReady: boolean;
    method: string;
    send: () => Promise<{ response: any; status: number; missedSignature: boolean; missedToken: boolean }>;
};

// const sortObject = (obj: any): any => {
//     if (Array.isArray(obj)) return obj.map(sortObject);
//     if (obj !== null && typeof obj === "object") {
//         return Object.keys(obj).sort().reduce((acc: any, key) => {
//             acc[key] = sortObject(obj[key]);
//             return acc;
//         }, {});
//     }
//     return obj;
// };

// Build worker request headers — always include X-Session-Id if available
// so the worker can find the session even when the cookie is blocked (localhost)
function workerHeaders(): Record<string, string> {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const sessionId = getSessionId();
    if (sessionId) headers["X-Session-Id"] = sessionId;
    return headers;
}

export function useApiSharedState(props: PlaygroundProps): SharedState {
    const requiresSignature = props.requiresSignature ?? true;
    const requiresAccessToken = props.requiresAccessToken ?? true;

    const useServerSigning = true;

    const isOAuth = !requiresSignature && !requiresAccessToken;

    const baseUrl = typeof props.url === "string" ? props.url : "";

    const paramKeys = useMemo(
        () => Array.from(baseUrl.matchAll(/{([^}]+)}/g)).map((m: any) => m[1]),
        [baseUrl]
    );
    const [params, setParams] = useState<Record<string, string>>({});

    // Default a URL path param to the saved test value (storeId / merchantId),
    // case-insensitive so {storeId}, {merchantId} and {merchantID} all resolve.
    // An explicit inline edit (params[key]) always wins.
    const savedParamValue = (key: string): string => {
        if (/^store_?id$/i.test(key)) return getStoreId();
        if (/^merchant_?id$/i.test(key)) return getMerchantId();
        return "";
    };
    const resolveParam = (key: string): string =>
        params[key] ?? (savedParamValue(key) || key);

    const resolvedUrl = useMemo(
        () => paramKeys.reduce(
            (url: string, key: string) => url.replace(`{${key}}`, resolveParam(key)),
            baseUrl
        ),
        [baseUrl, paramKeys, params]
    );

    // Re-render when the saved test values (storeId / merchantId) change in the modal,
    // so the URL path params displayed in the playground update live.
    const [, forceTick] = useState(0);
    useEffect(() => {
        const bump = () => forceTick((n) => n + 1);
        window.addEventListener("rm-test-values-changed", bump);
        return () => window.removeEventListener("rm-test-values-changed", bump);
    }, []);

    const [tokenStatus, setTokenStatus] = useState<TokenStatus>(
        () => deriveTokenStatus()
    );
// const [keyLoaded, setKeyLoaded] = useState(() => hasPrivateKey());
useEffect(() => {
    const run = async () => {
        const sessionId = getSessionId();

        // Hard fallback — if a session exists locally, assume logged in
        if (sessionId) {
            setTokenStatus("active");
        }

        // Validate against the server
        await syncAuthStatus(
            () => {
                setTokenStatus("active");
            },
            () => {
                // Trust local session if present
                if (sessionId) {
                    setTokenStatus("active");
                } else {
                    setTokenStatus("missing");
                }
            }
        );
    };

    run();

    window.addEventListener("focus", run);
    window.addEventListener("rm-auth-changed", run);

    return () => {
        window.removeEventListener("focus", run);
        window.removeEventListener("rm-auth-changed", run);
    };
}, []);

const handleClearToken = async () => {
  try {
    await fetch("https://rm-api-proxy.aiman-danish.workers.dev/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: workerHeaders(),
    });
  } catch {}

  clearTokenExpiry();
  localStorage.removeItem("rm_session_id"); // 🔥 IMPORTANT
  setTokenStatus("missing");

  window.dispatchEvent(new Event("rm-auth-changed"));
};

    const initialHeaders = isOAuth
        ? { Authorization: "Basic base64(clientId:clientSecret)" }
        : {};
    const [headers, setHeaders] = useState<Record<string, string>>(initialHeaders);
    const [jsonBody, setJsonBody] = useState(
        typeof props.body === "string"
            ? props.body
            : props.body?.type === "json"
                ? (props.body as any).example ?? "{}"
                : "{}"
    );

    // const generateNonce = () => crypto.randomUUID().replace(/-/g, "");
    // const generateTimestamp = () => Math.floor(Date.now() / 1000).toString();

    // const derLen = (n: number): number[] => {
    //     if (n < 0x80) return [n];
    //     if (n < 0x100) return [0x81, n];
    //     return [0x82, (n >> 8) & 0xff, n & 0xff];
    // };

    // const importPrivateKey = async (pem: string): Promise<CryptoKey> => {
    //     const isPkcs1 = pem.includes("BEGIN RSA PRIVATE KEY");
    //     const cleaned = pem
    //         .replace(/-----BEGIN[^-]*-----/, "")
    //         .replace(/-----END[^-]*-----/, "")
    //         .replace(/\s/g, "");
    //     const pkcs1 = Uint8Array.from(window.atob(cleaned), (c) => c.charCodeAt(0));
    //     let der: Uint8Array;
    //     if (isPkcs1) {
    //         const algoId = new Uint8Array([
    //             0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86,
    //             0xf7, 0x0d, 0x01, 0x01, 0x01, 0x05, 0x00,
    //         ]);
    //         const octetString = new Uint8Array([0x04, ...derLen(pkcs1.length), ...pkcs1]);
    //         const version = new Uint8Array([0x02, 0x01, 0x00]);
    //         const inner = new Uint8Array([...version, ...algoId, ...octetString]);
    //         der = new Uint8Array([0x30, ...derLen(inner.length), ...inner]);
    //     } else {
    //         der = pkcs1;
    //     }
    //     return await crypto.subtle.importKey(
    //         "pkcs8",
    //         der.buffer as ArrayBuffer,
    //         { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    //         false,
    //         ["sign"]
    //     );
    // };

    // const signRSA = async (
    //     privateKeyPem: string,
    //     method: string,
    //     fullUrl: string,
    //     body: any
    // ) => {
    //     const nonce = generateNonce();
    //     const timestamp = generateTimestamp();
    //     let base64Data = "";
    //     if (body && Object.keys(body).length > 0) {
    //         base64Data = btoa(JSON.stringify(sortObject(body)));
    //     }
    //     let plainText = "";
    //     if (base64Data) plainText += `data=${base64Data}&`;
    //     plainText +=
    //         `method=${method.toLowerCase()}` +
    //         `&nonceStr=${nonce}` +
    //         `&requestUrl=${fullUrl}` +
    //         `&signType=sha256` +
    //         `&timestamp=${timestamp}`;
    //     const key = await importPrivateKey(privateKeyPem);
    //     const signatureBuffer = await crypto.subtle.sign(
    //         "RSASSA-PKCS1-v1_5",
    //         key,
    //         new TextEncoder().encode(plainText)
    //     );
    //     const signature = btoa(
    //         String.fromCharCode(...new Uint8Array(signatureBuffer))
    //     );
    //     return { signature, nonce, timestamp };
    // };

    const send = async () => {
        let missedSignature = false;
        let missedToken = false;

        let requestBody: any;
        if (!["GET", "DELETE"].includes(props.method)) {
            // Fill {{storeId}} / {{merchantId}} from the saved test values before signing/sending
            requestBody = JSON.parse(resolveTestPlaceholders(jsonBody || "{}"));
        }

        // Resolve URL path params fresh at send time so the latest saved
        // storeId / merchantId values are always used (memoized resolvedUrl can be stale).
        const liveUrl = paramKeys.reduce(
            (u: string, k: string) => u.replace(`{${k}}`, resolveParam(k)),
            baseUrl
        );

        const finalHeaders: Record<string, string> = { ...headers };
        if (requestBody !== undefined) {
            finalHeaders["Content-Type"] = "application/json";
        }

        if (!isOAuth) {
            if (requiresAccessToken && tokenStatus !== "active") {
                missedToken = true;
            }
            if (requiresSignature) {
                const signRes = await fetch(
                    "https://rm-api-proxy.aiman-danish.workers.dev/auth/sign",
                    {
                        method: "POST",
                        credentials: "include",
                        headers: workerHeaders(),
                        body: JSON.stringify({
                            method: props.method,
                            url: liveUrl,
                            body: requestBody,
                        }),
                    }
                );

                const signData = await signRes.json();

                finalHeaders["X-Timestamp"] = signData.timestamp;
                finalHeaders["X-Nonce-Str"] = signData.nonceStr;
                finalHeaders["X-Signature"] = signData.signature;
            }
        }

        const res = await fetch(
            "https://rm-api-proxy.aiman-danish.workers.dev",
            {
                method: "POST",
                credentials: "include",
                headers: workerHeaders(),
                body: JSON.stringify({
                    url: liveUrl,
                    method: props.method,
                    headers: finalHeaders,
                    body: requestBody,
                }),
            }
        );

        const text = await res.text();
        let parsed: any;
        try {
            parsed = JSON.parse(text);
        } catch {
            parsed = text;
        }

        if (
            isOAuth &&
            res.ok &&
            parsed?.success &&
            typeof parsed.expiresIn === "number"
        ) {
            setTokenExpiry(parsed.expiresIn);
            setTokenStatus("active");
        }

        return { response: parsed, status: res.status, missedSignature, missedToken };
    };

  // ─── READY STATE ───────────────────────────────────────

    const notReady =
        (requiresAccessToken && tokenStatus !== "active");

        return {
        baseUrl,
        resolvedUrl,
        params,
        setParams,
        paramKeys,
        resolveParam,
        tokenStatus,
        handleClearToken,
        headers,
        setHeaders,
        jsonBody,
        setJsonBody,
        isOAuth,
        requiresSignature,
        requiresAccessToken,
        notReady,
        method: props.method,
        send,
    };
}