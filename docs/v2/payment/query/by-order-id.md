---
title: "Query By Order ID"
sidebar_label: "Query By Order ID"

api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/transaction/{orderId}
    prod: https://open.revenuemonster.my/v3/payment/transaction/{orderId}
  requiresSignature: false
  headers:
    Authorization: Bearer {{access_token}}
    X-Timestamp: "{{timestamp}}"

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/payment/transaction/ODR-20230513-1001" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}"
  response: |
    {
      "item": { "transactionId": "230522082259300426500551", "status": "SUCCESS" },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/payment/transaction/{orderId}"
  prod="/v3/payment/transaction/{orderId}"
/>

## What is this?

Retrieve a transaction by the Order ID you provided when initiating the payment.

:::tip
Store the **Order ID** from every payment request — you will need it to look up transactions later.
:::

:::caution Rate Limit
**3 requests per 5 seconds** per access token. Exceeding this returns a `429 Too Many Requests` response. Add a short delay between retries.
:::

## Request Parameters

<ParamTable
  title="Path Parameters"
  rows={[
    { name: "id", type: "String", required: true, description: "Order ID to look up", example: "\"1684743768790895\"" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Transaction response object. See Transaction Object for full field list.", example: "(See Transaction Object)" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>

See [Transaction Object](./transaction-object.md) for the full field breakdown of the `item` response.
