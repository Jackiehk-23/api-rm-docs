---
id: user-profile
title: Get User Profile
sidebar_label: Get User Profile
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/user

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: "{}"

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "id": "2728070797661038926",
        "firstName": "M",
        "lastName": "YUSSUF",
        "countryCode": "60",
        "phoneNumber": "176473298",
        "email": "yussuf@revenuemonster.my",
        "avatarUrl": "https://storage.googleapis.com/rm-dev-asset/img/avatar.png",
        "status": "ACTIVE",
        "storeId": ["6883264812332703106"],
        "isActive": true,
        "createdAt": "2018-05-14T09:26:23Z",
        "updatedAt": "2018-05-15T03:29:56Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/user"
  prod="/v3/user"
/>

## What is this?

Fetch the profile of the currently authenticated user. Returns identity details such as name, contact info, status, and associated store IDs.

## When to Use

Use this endpoint when you:
- Display the logged-in user's profile in your UI
- Need the user's contact details for support or notifications
- Want to verify the authenticated user's active status or store assignments

## How to Use

### Step 1: Authenticate

Obtain a valid `accessToken` via the [Client Credentials](../quickstart/accesstoken/client-credentials) or [Authorization Code](../quickstart/accesstoken/authorization-code) flow.

### Step 2: Send the GET Request

No request body or query parameters required. Signed headers (signature, nonce, timestamp) are sufficient.

### Step 3: Read the Response

The `item` object contains the user's profile fields. A `"SUCCESS"` code confirms the call worked.

---

## Request Parameters

No request body. Authenticated headers only.

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "item", type: "Object", description: "Authenticated user profile.",
      children: [
        { name: "id", type: "String", description: "Unique user ID.", example: "\"8190656045166232716\"" },
        { name: "firstName", type: "String", description: "User's first name.", example: "\"MOHAMED\"" },
        { name: "lastName", type: "String", description: "User's last name.", example: "\"YUSSUF\"" },
        { name: "countryCode", type: "String", description: "Country code for contact number.", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "User's phone number.", example: "\"377334080\"" },
        { name: "email", type: "String", description: "User's email address.", example: "\"yussuf@revenuemonster.my\"" },
        { name: "avatarUrl", type: "String", description: "Public URL of the user's avatar image.", example: "\"https://storage.googleapis.com/rm-prod-asset/img/avatar.png\"" },
        { name: "status", type: "String", description: "Account status (`\"ACTIVE\"`, `\"INACTIVE\"`).", example: "\"ACTIVE\"" },
        { name: "storeId", type: "Array", description: "List of store IDs the user belongs to.", example: "[\"6170506694335521334\"]" },
        { name: "isActive", type: "Boolean", description: "Whether the user account is active.", example: "true" },
        { name: "createdAt", type: "DateTime", description: "Account creation timestamp.", example: "\"2018-02-12T08:53:13Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update timestamp.", example: "\"2018-02-12T08:53:13Z\"" }
      ]
    },
    { name: "code", type: "String", description: "`\"SUCCESS\"` if the call succeeded. Otherwise returns an error code. See [Error Codes](../error-codes).", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
