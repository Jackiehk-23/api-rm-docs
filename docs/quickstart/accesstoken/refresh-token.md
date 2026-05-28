---
id: refresh-token
title: Refresh Token
sidebar_label: Refresh Token
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
      "grantType": "refresh_token",
      "refreshToken": "YOUR_REFRESH_TOKEN"
    }
examples:
  request: |
    curl --location --request POST "https://sb-oauth.revenuemonster.my/v1/token" \
      --header "Content-Type: application/json" \
      --header "Authorization: Basic MTM5NjMxNzEzNjIyMzY4MzExMjpEWGxaTWpQem96dXh2Z2JRRmtYWmFDcnFoRmliS3B4ZQ==" \
      --data '{
        "grantType": "refresh_token",
        "refreshToken": "OgoHjoZyLZPnHemifOrHIwStdeyzKuFoDaJBtBRULxEIJgANlhsLgFuBFiVTtqiQgmYDOTBkakwXZWfcLqXQTUTiqCpQTAEVHuqshWdiuvtGMIYztLiVfEmLEoXNlALi"
      }'
  response: |
    {
      "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ...",
      "tokenType": "Bearer",
      "expiresIn": 2591999,
      "refreshToken": "XtBwKribhoPsoEbhHnLNJSjkSuskqsRIpTnvVxmOTyQhenqlgGQisbtbpcjcapmhPEaHrJZVbPGvkvaTwWozamuCBUfvWdWQzHJSnjpuurEACugOZssEpUffUSDoSxLz",
      "refreshTokenExpiresIn": 1576799999
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v1/token"
  prod="/v1/token"
/>

## Refresh an Access Token

<Admonition type="note">
Use this endpoint to exchange a refresh token for a new access token. You should do this when:

- The access token has expired (~30 days)
- The access token has been compromised and needs to be rotated

Avoid re-authenticating with your `clientId` and `clientSecret` on every request — refresh tokens exist to keep those credentials out of frequent network traffic.
</Admonition>

A refresh token is returned alongside the access token when you first authenticate via [Client Credentials](./client-credentials) or [Authorization Code](./authorization-code). Store both tokens securely.

---

### Step 1: Get Your Client ID and Client Secret

Go to [RM Merchant Portal](https://merchant.revenuemonster.my/) > **Developer** > **Application**.

<ParamTable
  title="Credentials"
  rows={[
    { name: "clientId", type: "String", required: true, description: "Your application's Client ID from the Merchant Portal.", example: "3208919753194101125" },
    { name: "clientSecret", type: "String", required: true, description: "Your application's Client Secret from the Merchant Portal.", example: "mglve4W3UhPSGOV7gnwoYKyvbRCe83zZ" }
  ]}
/>

---

### Step 2: Base64-encode Your Credentials

Concatenate your `clientId` and `clientSecret` with a colon, then Base64-encode the result.

**Before encoding:**

<CodeBlock language="plaintext" filename="Plain Credentials" hideLineNumbers>
{`3675930941412424316:wmn7FUauXHdkoYa9182kCMkjGnNJVgin`}
</CodeBlock>

**After Base64 encoding:**

<CodeBlock language="plaintext" filename="Base64 Encoded" hideLineNumbers>
{`MzY3NTkzMDk0MTQxMjQyNDMxNjp3bW43RlVhdVhIZGtvWWE5MTgya0NNa2pHbk5KVmdpbg==`}
</CodeBlock>

---

### Step 3: Make the Request

Include the Base64-encoded credentials in the `Authorization` header, and pass the refresh token in the request body.

**Headers:**

<CodeBlock language="plaintext" filename="Request Headers" hideLineNumbers>
{`Content-Type: application/json
Authorization: Basic MzY3NTkzMDk0MTQxMjQyNDMxNjp3bW43RlVhdVhIZGtvWWE5MTgya0NNa2pHbk5KVmdpbg==`}
</CodeBlock>

**Body:**

<ParamTable
  title="Request Body"
  rows={[
    { name: "grantType", type: "String", required: true, description: "Must be set to \"refresh_token\".", example: "\"refresh_token\"" },
    { name: "refreshToken", type: "String", required: true, description: "The refresh token returned when you last authenticated.", example: "\"OgoHjoZy...\"" }
  ]}
/>

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "accessToken", type: "String", description: "New Bearer token to use in subsequent API requests.", example: "eyJhbGci..." },
    { name: "tokenType", type: "String", description: "Token scheme. Always \"Bearer\".", example: "\"Bearer\"" },
    { name: "expiresIn", type: "Integer", description: "New access token lifetime in seconds. 2,591,999 seconds ≈ 30 days.", example: "2591999" },
    { name: "refreshToken", type: "String", description: "A new refresh token. Replace your stored refresh token with this value.", example: "XtBwKrib..." },
    { name: "refreshTokenExpiresIn", type: "Integer", description: "New refresh token lifetime in seconds. Store this value to know when you need to re-authenticate from scratch.", example: "1576799999" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->