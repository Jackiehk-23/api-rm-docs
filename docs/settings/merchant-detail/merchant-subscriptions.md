---
id: merchant-subscriptions
title: Get Merchant Subscriptions
sidebar_label: Get Merchant Subscriptions
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/merchant/subscriptions

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
      "item": [
        {
          "id": 1001,
          "gracePeriod": 90,
          "expiryAt": "2018-04-28T06:36:08Z",
          "terminateAt": "2018-07-27T23:59:59Z",
          "status": "ACTIVE"
        },
        {
          "id": 1000,
          "gracePeriod": 90,
          "expiryAt": "2018-04-25T02:51:10Z",
          "terminateAt": "2018-07-24T23:59:59Z",
          "status": "ACTIVE"
        },
        {
          "id": 1003,
          "gracePeriod": 90,
          "expiryAt": "2018-04-29T05:04:30Z",
          "terminateAt": "2018-07-28T23:59:59Z",
          "status": "ACTIVE"
        }
      ],
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/merchant/subscriptions"
  prod="/v3/merchant/subscriptions"
/>





## What is this?

Retrieve the merchant's active product subscriptions — Payment, Loyalty & Voucher, Market Place, or Social Media.

## When to Use

Use this endpoint when:
- You need to know which RM products the merchant has subscribed to
- Checking subscription expiry or termination dates
- Gating UI features based on the merchant's plan

## How to Use

### Step 1: Authenticate

Obtain a valid `accessToken` for the merchant.

### Step 2: Send the GET Request

No request body or query parameters required.

### Step 3: Iterate `item`

The response `item` array contains one entry per active subscription.

---

## Request Parameters

No request body. Authenticated headers only.

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "item", type: "Array", description: "List of active subscriptions.",
      children: [
        { name: "id", type: "Integer", description: "Subscription ID. `1000` = Loyalty & Voucher, `1001` = Payment, `1002` = Market Place, `1003` = Social Media.", example: "1001" },
        { name: "gracePeriod", type: "Integer", description: "Grace period in days before termination.", example: "90" },
        { name: "expiryAt", type: "DateTime", description: "Subscription expiry timestamp.", example: "\"2018-04-28T06:36:08Z\"" },
        { name: "terminateAt", type: "DateTime", description: "Termination timestamp after grace period ends.", example: "\"2018-07-27T23:59:59Z\"" },
        { name: "status", type: "String", description: "Status — `\"ACTIVE\"`, `\"REVIEWING\"`, `\"SUSPEND\"`, `\"PENDING\"`.", example: "\"ACTIVE\"" }
      ]
    },
    { name: "code", type: "String", description: "`\"SUCCESS\"` if the call succeeded. Otherwise returns an error code. See [Error Codes](../../error-codes).", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
