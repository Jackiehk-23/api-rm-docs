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
    { name: "item", type: "Object", description: "Transaction response object",
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

See [Transaction Object](./transaction-object.md) for the full field breakdown of the `item` response.
