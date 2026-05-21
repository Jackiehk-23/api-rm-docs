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

| Parameter | Type | Required | Description |
|---|---|---|---|
| `checkoutId` | QueryParam | Yes | Payment checkout ID |

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded." },
    { name: "error.code", type: "String", description: "Error code." },
    { name: "error.message", type: "String", description: "Error message." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." },
    { name: "item.id", type: "String", description: "Payment checkout ID." },
    { name: "item.type", type: "String", description: "Payment checkout type." },
    { name: "item.transactionId", type: "String", description: "Payment transaction ID. Use this to query the transaction via Query Transaction." },
    { name: "item.order.id", type: "String", description: "Order ID." },
    { name: "item.order.title", type: "String", description: "Order title." },
    { name: "item.order.currencyType", type: "String", description: "Order currency type." },
    { name: "item.order.amount", type: "Integer", description: "Order amount." },
    { name: "item.order.detail", type: "String", description: "Order detail." },
    { name: "item.order.additionalData", type: "String", description: "Order additional data." },
    { name: "item.platform", type: "String", description: "Payment checkout platform." },
    { name: "item.method", type: "String", description: "Payment checkout available methods." },
    { name: "item.redirectUrl", type: "String", description: "Payment redirect URL." },
    { name: "item.notifyUrl", type: "String", description: "Payment notify URL." },
    { name: "item.startAt", type: "String", description: "Payment checkout start date time." },
    { name: "item.status", type: "String", description: "Payment checkout status." },
    { name: "item.createdAt", type: "String", description: "Payment checkout created date time." },
    { name: "item.updatedAt", type: "String", description: "Payment checkout last updated date time." }
  ]}
/>
