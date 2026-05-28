---
title: "Verify Membership Card"
sidebar_label: "Verify Membership Card"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/quickpay

  headers:
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json
  body:
    type: json
    example: |
      {
        "memberCardId": "28158443195878043074",
        "storeId": "4949529109748431621"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/quickpay" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "memberCardId": "28158443195878043074",
      "storeId": "4949529109748431621"
    }'
  response: |
    {
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/quickpay"
  prod="/v3/payment/quickpay"
/>

## What is this?

Verify an Alipay Gourmet Card before applying its discount in a payment. Returns whether the card is valid for use at the given store.

## When to Use

Use this endpoint before [Quick Pay with Membership Card](./quick-pay.md):
- To confirm the card is valid and active at the store
- To prevent failed payments due to invalid memberships

:::info
Currently available membership card: Alipay Gourmet Card (马来西亚美食优惠卡).
:::

## How to Use

### Step 1: Capture the Card ID

Scan or input the customer's Alipay Gourmet Card ID.

### Step 2: Send the Verification Request

POST `memberCardId` and `storeId` to the endpoint.

### Step 3: Proceed if Valid

If the response is `"SUCCESS"`, proceed to [Quick Pay with Membership Card](./quick-pay.md).

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "memberCardId", type: "String", required: true, description: "Alipay's Member Card ID" },
    { name: "storeId", type: "String", required: true, description: "Store ID" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "code", type: "String", description: "\"SUCCESS\" if the verification succeeded, otherwise an error code" },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed" },
      { name: "message", type: "String", description: "Error message if the request failed" },
      { name: "debug", type: "String", description: "Debug message (sandbox only)" },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
