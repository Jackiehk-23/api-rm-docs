---
id: verify-signature
title: Verify Signature
sidebar_label: Verify Signature
---

:::note
When RM sends a callback (webhook) to your `notifyUrl`, the response includes an `X-Signature` header. You should verify this signature using the **RM Server Public Key** to confirm the callback genuinely came from Revenue Monster and was not tampered with.

You can find the RM Server Public Key in **Merchant Portal > Developer > Applications > Server Public Key**.
:::

:::important
All JSON keys — including keys inside nested objects — must be sorted **alphabetically** before encoding.
:::

---

## Verifying a Callback Signature

### Step 1: Get the Callback Response Body

When RM calls your `notifyUrl`, the request body will be a JSON object. The following is an example for a Web/Mobile Payment callback:

<ParamTable
  rows={[
    { name: "item", type: "Object", description: "Response payload", example: "(See below)" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the payment succeeded. Otherwise an error code.", example: "\"SUCCESS\"" }
  ]}
/>

**item object:**

<ParamTable
  rows={[
    { name: "checkoutId", type: "String", description: "Identifier for the checkout session", example: "\"1617985392758071583\"" },
    { name: "url", type: "String", description: "Checkout URL", example: "\"https://sb-pg.revenuemonster.my/v2/checkout?checkoutId=1617985392758071583\"" }
  ]}
/>

<CodeBlock language="json" filename="Callback Body">
{`{
  "code": "SUCCESS",
  "item": {
    "checkoutId": "1617985392758071583",
    "url": "https://sb-pg.revenuemonster.my/v2/checkout?checkoutId=1617985392758071583"
  }
}`}
</CodeBlock>

---

### Step 2: Base64-encode the Response JSON

Sort the JSON keys alphabetically (including nested objects), make it compact, then Base64-encode it.

**Sorted JSON (keys in alphabetical order):**

<CodeBlock language="json" filename="Sorted JSON">
{`{
  "code": "SUCCESS",
  "item": {
    "checkoutId": "1617985392758071583",
    "url": "https://sb-pg.revenuemonster.my/v2/checkout?checkoutId=1617985392758071583"
  }
}`}
</CodeBlock>

**Compact form (no whitespace) — this exact string is what gets Base64-encoded:**

<CodeBlock language="json" filename="Sorted Compact JSON" hideLineNumbers>
{`{"code":"SUCCESS","item":{"checkoutId":"1617985392758071583","url":"https://sb-pg.revenuemonster.my/v2/checkout?checkoutId=1617985392758071583"}}`}
</CodeBlock>

**Base64 result:**

<CodeBlock language="plaintext" filename="Base64 Encoded" hideLineNumbers>
{`eyJjb2RlIjoiU1VDQ0VTUyIsIml0ZW0iOnsiY2hlY2tvdXRJZCI6IjE2MTc5ODUzOTI3NTgwNzE1ODMiLCJ1cmwiOiJodHRwczovL3NiLXBnLnJldmVudWVtb25zdGVyLm15L3YyL2NoZWNrb3V0P2NoZWNrb3V0SWQ9MTYxNzk4NTM5Mjc1ODA3MTU4MyJ9fQ==`}
</CodeBlock>

---

### Step 3: Construct the Verification String

Build the same signing string format used for requests. The values of `nonceStr` and `timestamp` come from the **RM callback request headers** (`X-Nonce-Str` and `X-Timestamp`).

<ParamTable
  rows={[
    { name: "data", type: "String", required: true, description: "Base64-encoded response body from Step 2. Omit if the body is empty.", example: "(See Step 2)", anchor: "#step-2-base64-encode-the-response-json" },
    { name: "method", type: "String", required: true, description: "HTTP method of the callback, lowercase", example: "\"post\"" },
    { name: "nonceStr", type: "String", required: true, description: "Value of X-Nonce-Str from the RM callback request header.", example: "\"VYNknZohxwicZMaWbNdBKUrnrxDtaRhN\"" },
    { name: "requestUrl", type: "String", description: "Omit this parameter when verifying a callback — it is not included in the callback signature.", example: "N/A" },
    { name: "signType", type: "String", required: true, description: "Signing algorithm", example: "\"sha256\"" },
    { name: "timestamp", type: "String", required: true, description: "Value of X-Timestamp from the RM callback request header.", example: "\"1527407052\"" }
  ]}
/>

:::note
`requestUrl` is omitted when verifying callback signatures.
:::

**Example verification string:**

<CodeBlock language="plaintext" filename="Verification String" hideLineNumbers>
{`data=eyJjb2Rl...&method=post&nonceStr=VYNknZohxwicZMaWbNdBKUrnrxDtaRhN&signType=sha256&timestamp=1527407052`}
</CodeBlock>

---

### Step 4: Verify Using the RM Server Public Key

Verify the `X-Signature` header from the RM callback against your constructed string using the **RM Server Public Key**.

:::important
Use the **RM Server Public Key** (not your own public key) to verify callbacks. Find it in **Merchant Portal > Developer > Applications > Server Public Key**.

Wrap it in standard PEM format before use:
:::

<CodeBlock language="plaintext" filename="PEM Format" hideLineNumbers>
{`-----BEGIN PUBLIC KEY-----
<server_public_key_content>
-----END PUBLIC KEY-----`}
</CodeBlock>

The verification process:
1. Extract the signature value from the `X-Signature` header (strip the `sha256 ` prefix).
2. Verify the signature against your constructed string from Step 3 using the RM Server Public Key and `sha256`.
3. If verification passes, the callback is authentic. If it fails, discard the request.

<!-- SPDX-License-Identifier: Apache-2.0 -->