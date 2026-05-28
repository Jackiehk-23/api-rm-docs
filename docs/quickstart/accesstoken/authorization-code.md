---
id: authorization-code
title: Authorization Code
sidebar_label: Authorization Code
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
      "grantType": "authorization_code",
      "code": "<AUTHORIZATION_CODE>",
      "redirectUri": "<REDIRECT_URI>"
    }
examples:
  request: |
    curl --location --request POST "https://sb-oauth.revenuemonster.my/v1/token" \
      --header "Content-Type: application/json" \
      --header "Authorization: Basic <BASE64_CLIENT_ID_AND_SECRET>" \
      --data '{
        "grantType": "authorization_code",
        "code": "<AUTHORIZATION_CODE>",
        "redirectUri": "<REDIRECT_URI>"
      }'
  response: |
    {
      "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9...",
      "tokenType": "Bearer",
      "expiresIn": 2591999,
      "refreshToken": "OgoHjoZyLZPnHemifOrHIwStdeyzKuFo...",
      "refreshTokenExpiresIn": 1576799999
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v1/token"
  prod="/v1/token"
/>

:::note
This page is for **plugin and integration developers** building applications that act on behalf of a merchant.
:::

## Get Access Token (Authorization Code)

Use the `authorization_code` grant type when a **third-party developer** (such as a plugin or integration partner) needs to request access to a merchant's account on their behalf. Unlike client credentials, this flow involves redirecting the merchant to an RM consent screen where they approve the requested permissions.

**Flow overview:**
1. Redirect the merchant to the RM authorization URL with your requested scopes.
2. The merchant logs in and approves access.
3. RM redirects back to your `redirectUri` with a temporary `code`.
4. Exchange the `code` for an access token using this endpoint.

---

### Step 1: Get Your Client ID

Go to [RM Merchant Portal](https://merchant.revenuemonster.my/) > **Developer** > **Application** to find your `clientId`.

Only `clientId` is needed for this step — you do not need `clientSecret` to build the authorization URL.

---

### Step 2: Redirect the Merchant to the Authorization URL

Build the authorization URL using the parameters below and redirect the merchant's browser to it.

<ParamTable
  title="Query Parameters"
  rows={[
    { name: "responseType", type: "String", required: true, description: "Must be set to \"code\".", example: "\"code\"" },
    { name: "clientId", type: "String", required: true, description: "Your application's Client ID from the Merchant Portal.", example: "\"3675930941412424316\"" },
    { name: "redirectUri", type: "String", required: true, description: "The URL to redirect the merchant to after approval. Must exactly match the redirect URI registered in the Merchant Portal.", example: "\"https://example.com/oauth/callback\"" },
    { name: "scope", type: "String", required: true, description: "Permissions to request, as a comma-separated list with no spaces. Supported values: manage_payment, get_merchant_profile, get_user_profile, manage_store.", example: "\"manage_payment,get_merchant_profile\"" },
    { name: "state", type: "String", description: "An optional value you define. RM will include it in the redirect response unchanged — useful for CSRF protection or tracking session state.", example: "\"abc123\"" }
  ]}
/>

**Example authorization URL:**

<CodeBlock language="plaintext" filename="Authorization URL" hideLineNumbers>
{`https://sb-oauth.revenuemonster.my/authorize
  ?responseType=code
  &clientId=3675930941412424316
  &redirectUri=https://example.com/oauth/callback
  &scope=manage_payment
  &state=abc123`}
</CodeBlock>

After the merchant approves, RM redirects them to your `redirectUri` with a `code` query parameter:

<CodeBlock language="plaintext" filename="Redirect Response" hideLineNumbers>
{`https://example.com/oauth/callback?code=<AUTHORIZATION_CODE>&state=abc123`}
</CodeBlock>

<img src={require('/img/developer-application/auth-respond.png').default} />

---

### Step 3: Exchange the Code for an Access Token

Use the `code` from the redirect to request an access token. Include your Base64-encoded `clientId:clientSecret` in the `Authorization` header (same as the [Client Credentials](./client-credentials) flow).

## Request Parameters

<ParamTable
  title="Request Body"
  rows={[
    { name: "grantType", type: "String", required: true, description: "Must be set to \"authorization_code\".", example: "\"authorization_code\"" },
    { name: "code", type: "String", required: true, description: "The authorization code received from the redirect in Step 2.", example: "\"<AUTHORIZATION_CODE>\"" },
    { name: "redirectUri", type: "String", required: true, description: "Must exactly match the redirect URI used in Step 2.", example: "\"https://example.com/oauth/callback\"" }
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
    { name: "refreshToken", type: "String", description: "Use this to get a new access token once the current one expires. See Refresh Token.", example: "OgoHjoZy..." },
    { name: "refreshTokenExpiresIn", type: "Integer", description: "Refresh token lifetime in seconds.", example: "1576799999" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->