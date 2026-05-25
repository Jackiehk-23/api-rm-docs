---
title: "Query Payment Checkout"
sidebar_label: "Query Payment Checkout"

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/payment/online?checkoutId=1548316308361173347" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}"
  response: |
    {
      "item": { "id": "...", "status": "SUCCESS" },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/payment/online?checkoutId={checkoutId}"
  prod="/v3/payment/online?checkoutId={checkoutId}"
/>

:::caution
Payment checkout is not the same as payment transaction info. Checkout only returns status, amount, and redirectUrl. For full transaction details, use [Query By Transaction ID](../query/by-transaction-id.md) with the `transactionId` from the checkout response.
:::

:::note
Direct Payment Checkout requires polling this endpoint to keep payment status updated. Suggested polling interval is 3–5 seconds.
:::

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "Param", required: true, description: "Payment checkout ID (query parameter)" },
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code." },
      { name: "message", type: "String", description: "Error message." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
    { name: "item", type: "Object", description: "Response item",
      children: [
      { name: "id", type: "String", description: "Payment checkout ID." },
      { name: "type", type: "String", description: "Payment checkout type." },
      { name: "transactionId", type: "String", description: "Payment transaction ID. Use this to query the transaction via Query Transaction." },
      { name: "order", type: "Object", description: "Order details",
        children: [
        { name: "id", type: "String", description: "Order ID." },
        { name: "title", type: "String", description: "Order title." },
        { name: "currencyType", type: "String", description: "Order currency type." },
        { name: "amount", type: "Integer", description: "Order amount." },
        { name: "detail", type: "String", description: "Order detail." },
        { name: "additionalData", type: "String", description: "Order additional data." },
        ]
      },
      { name: "platform", type: "String", description: "Payment checkout platform." },
      { name: "method", type: "String", description: "Payment checkout available methods." },
      { name: "redirectUrl", type: "String", description: "Payment redirect URL." },
      { name: "notifyUrl", type: "String", description: "Payment notify URL." },
      { name: "startAt", type: "String", description: "Payment checkout start date time." },
      { name: "status", type: "String", description: "Payment checkout status." },
      { name: "createdAt", type: "String", description: "Payment checkout created date time." },
      { name: "updatedAt", type: "String", description: "Payment checkout last updated date time." },
      ]
    },
  ]}
/>
