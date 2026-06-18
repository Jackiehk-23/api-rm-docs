---
id: client-credentials
title: Client Credentials
sidebar_label: Client Credentials
api:
  method: POST
  url:
    sandbox: https://sb-oauth.revenuemonster.my/v1/token

  requiresSignature: false
  requiresAccessToken: false
  headers:
    Content-Type: application/json
    Authorization: Basic <BASE64_CLIENT_ID_AND_SECRET>
  body: |
    {
      "grantType": "client_credentials"
    }
examples:
  request: |
    curl --location --request POST "https://sb-oauth.revenuemonster.my/v1/token" \
      --header "Content-Type: application/json" \
      --header "Authorization: Basic NjY5MTY1ODE1MDQ5NjMyNzA1MTptNzFwc3dibVFWQzBpTXNHc000TEZMSUl4czZsWEV6eA==" \
      --data '{
        "grantType": "client_credentials"
      }'
  response: |
    {
      "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9...",
      "tokenType": "Bearer",
      "expiresIn": 2591999,
      "refreshToken": "hDzmdhTrnGmnMcvUKPjMGSXZNgPpHFNejPWdKBNNtMtZEcTzAqwyTeEfGvOQXcApKdAsUxxmjqytzFPmJIJxsOcuyyISsQPoeZfvgCKpURPWQlfeVrfvLNBPMHjpJQII",
      "refreshTokenExpiresIn": 1576799999
    }
---


## What is this?

Get an access token using the `client_credentials` grant type. This flow requires a **Client ID** and **Client Secret**, which you can obtain from the RM Merchant Portal.

## When to Use

Use the `client_credentials` grant type when your **server-side code** needs to authenticate directly with the RM API — for example, a backend service acting as a trusted merchant. If you need to act on behalf of a specific merchant as a third-party developer, use the [Authorization Code](./authorization-code) flow instead.

## How to Use

### Step 1: Get Your Client ID and Client Secret

Go to [RM Merchant Portal](https://merchant.revenuemonster.my/) > **Developer** > **Application**.

<ParamTable
  title="Credentials"
  rows={[
    { name: "clientId", type: "String", required: true, description: "Your application's Client ID, found in the Merchant Portal.", example: "3208919753194101125" },
    { name: "clientSecret", type: "String", required: true, description: "Your application's Client Secret, found in the Merchant Portal. Click Show to reveal it.", example: "mglve4W3UhPSGOV7gnwoYKyvbRCe83zZ" }
  ]}
/>

---

### Step 2: Base64-encode Your Credentials

Concatenate your `clientId` and `clientSecret` with a colon, then Base64-encode the result.

**Format:** `clientId:clientSecret`

**Before encoding:**

<CodeBlock language="plaintext" filename="Plain Credentials" hideLineNumbers>
{`3675930941412424316:wmn7FUauXHdkoYa9182kCMkjGnNJVgin`}
</CodeBlock>

**After Base64 encoding:**

<CodeBlock language="plaintext" filename="Base64 Encoded" hideLineNumbers>
{`MzY3NTkzMDk0MTQxMjQyNDMxNjp3bW43RlVhdVhIZGtvWWE5MTgya0NNa2pHbk5KVmdpbg==`}
</CodeBlock>

You can use any Base64 encoding tool or the following one-liner:

<CodeBlock language="bash" filename="Terminal" hideLineNumbers>
{`echo -n "clientId:clientSecret" | base64`}
</CodeBlock>

---

### Step 3: Set the Request Headers

Include the Base64-encoded credentials in the `Authorization` header:

<CodeBlock language="plaintext" filename="Request Headers" hideLineNumbers>
{`Content-Type: application/json
Authorization: Basic MzY3NTkzMDk0MTQxMjQyNDMxNjp3bW43RlVhdVhIZGtvWWE5MTgya0NNa2pHbk5KVmdpbg==`}
</CodeBlock>

See [HTTP Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) for more details on this scheme.

---

## Request Parameters

<ParamTable
  title="Request Body"
  rows={[
    { name: "grantType", type: "String", required: true, description: "Must be set to \"client_credentials\" for this flow.", example: "\"client_credentials\"" }
  ]}
/>

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "accessToken", type: "String", description: "Bearer token to include in all subsequent API requests.", example: "eyJhbGci..." },
    { name: "tokenType", type: "String", description: "Token scheme. Always \"Bearer\".", example: "\"Bearer\"" },
    { name: "expiresIn", type: "Integer", description: "Access token lifetime in seconds. 2,591,999 seconds ≈ 30 days.", example: "2591999" },
    { name: "refreshToken", type: "String", description: "Use this to get a new access token once the current one expires, without re-sending your credentials. See Refresh Token.", example: "hDzmdhTrn..." },
    { name: "refreshTokenExpiresIn", type: "Integer", description: "Refresh token lifetime in seconds. Store this value to know when you need to re-authenticate from scratch.", example: "1576799999" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->