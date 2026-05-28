---
id: delete-store
title: Delete Store
sidebar_label: Delete Store
api:
  method: DELETE
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/store/{store_id}

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
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="DELETE"
  sandbox="/v3/store/{store_id}"
  prod="/v3/store/{store_id}"
/>





## What is this?

Permanently delete a store under a merchant account.

:::warning
Deletion is irreversible. Once a store is deleted, it cannot be restored.
:::

## When to Use

Use this endpoint when:
- A store has permanently closed
- Removing a duplicate or test store
- Decommissioning an outlet

## How to Use

### Step 1: Get the Store ID

Retrieve `storeId` from [Get All Stores](./store-details).

### Step 2: Send the DELETE Request

Pass `storeId` as a path parameter — `/v3/store/{storeId}`. No body required.

### Step 3: Verify the Response

A `"SUCCESS"` code confirms deletion.

---

## Request Parameters

Pass `storeId` as a path parameter. No body.

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "code", type: "String", description: "`\"SUCCESS\"` if the deletion succeeded. Otherwise returns an error code. See [Error Codes](../../error-codes).", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
