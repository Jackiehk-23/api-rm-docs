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
    { name: "items", type: "Array", description: "List of transaction response objects. See Transaction Object for full field list." },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>

See [Transaction Object](./transaction-object.md) for the full field breakdown of each item in `items`.
