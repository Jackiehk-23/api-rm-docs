---
title: "Get All Transactions"
sidebar_label: "Get All Transactions"

api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/transactions
    prod: https://open.revenuemonster.my/v3/payment/transactions
  requiresSignature: false
  headers:
    Authorization: Bearer {{access_token}}
    X-Timestamp: "{{timestamp}}"

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/payment/transactions?limit=10" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}"
  response: |
    {
      "items": [ { "transactionId": "...", "status": "SUCCESS" } ],
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/payment/transactions"
  prod="/v3/payment/transactions"
/>

## What is this?

Fetch a paginated list of all transactions for your store.

## When to Use

Use this endpoint when:
- Displaying transaction history in your dashboard
- Building a reporting or analytics view
- Auditing recent payment activity

## How to Use

### Step 1: Authenticate

Obtain a valid `accessToken`. No signature required for this endpoint.

### Step 2: Send the GET Request

Include `limit` as a query parameter to paginate.

### Step 3: Iterate `items`

The response `items` array contains transaction objects.

---

## Request Parameters

<ParamTable
  title="Query Parameters"
  rows={[
    { name: "limit", type: "Integer", description: "Maximum number of transactions to return", example: "10" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "items", type: "Array", description: "List of transaction response objects",
      children: [
        { name: "transactionId", type: "String", description: "Revenue Monster's unique transaction ID" },
        { name: "referenceId", type: "String", description: "Reference ID from the payment provider" },
        { name: "order", type: "Object", description: "Order details",
          children: [
            { name: "id", type: "String", description: "Order ID" },
            { name: "title", type: "String", description: "Order title" },
            { name: "currencyType", type: "String", description: "Currency type" },
            { name: "amount", type: "Integer", description: "Order amount in cents" },
            { name: "detail", type: "String", description: "Order detail" },
            { name: "additionalData", type: "String", description: "Additional data" }
          ]
        },
        { name: "store", type: "Object", description: "Store details" },
        { name: "currencyType", type: "String", description: "Currency type (MYR)" },
        { name: "balanceAmount", type: "Integer", description: "Remaining balance amount for initiating refund" },
        { name: "finalAmount", type: "Integer", description: "Amount after all deductions" },
        { name: "platform", type: "String", description: "Transaction platform" },
        { name: "type", type: "String", description: "Transaction type" },
        { name: "method", type: "String", description: "Payment method" },
        { name: "region", type: "String", description: "Payment region" },
        { name: "status", type: "String", description: "Transaction status (SUCCESS, FAILED, IN_PROCESS, etc.)" },
        { name: "transactionAt", type: "String", description: "Transaction date time (only when SUCCESS)" },
        { name: "createdAt", type: "String", description: "Created date time" },
        { name: "updatedAt", type: "String", description: "Last updated date time" }
      ] },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed." },
      { name: "message", type: "String", description: "Error message if the request failed." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
  ]}
/>

See [Transaction Object](./transaction-object.md) for the full field breakdown of each item in `items`.

<!-- SPDX-License-Identifier: Apache-2.0 -->
