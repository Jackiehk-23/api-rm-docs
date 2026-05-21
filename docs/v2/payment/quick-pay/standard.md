---
title: "Standard Quick Pay"
sidebar_label: "Standard Quick Pay"

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
        "authCode": "134850717797247290",
        "storeId": "6170506694335521334",
        "ipAddress": "8.8.8.8",
        "order": {
          "id": "ODR-20230513-1001",
          "title": "Payment via OpenAPI",
          "currencyType": "MYR",
          "amount": 1000,
          "detail": "",
          "additionalData": ""
        }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/quickpay" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "authCode": "134850717797247290",
      "storeId": "6170506694335521334",
      "ipAddress": "8.8.8.8",
      "order": {
        "id": "ODR-20230513-1001",
        "title": "Payment via OpenAPI",
        "currencyType": "MYR",
        "amount": 1000,
        "detail": "",
        "additionalData": ""
      }
    }'
  response: |
    {
      "item": { "transactionId": "...", "status": "SUCCESS" },
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

Quick Pay lets merchants accept payments by scanning a QR code presented by the customer. The customer scans the merchant's QR code using their preferred payment app, and the payment is processed instantly.

## When to Use

Use Quick Pay when you want to:
- Accept in-store payments via QR code
- Process offline transactions at a physical store or terminal
- Support multiple e-wallets and payment methods in a single integration

:::tip
Quick Pay is an **offline payment method**. Its subscription rate is based on the offline subscription plan. Contact [support@revenuemonster.my](mailto:support@revenuemonster.my) to activate this feature.
:::

## How to Use

1. Customer presents a QR code from their payment app
2. Scan the QR code to get the `authCode`
3. Send the `authCode` along with order details to this endpoint
4. Check the `code` in the response — if `"SUCCESS"`, the payment is complete

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "authCode", type: "String", required: true, description: "Auth code of QR code/barcode being scanned" },
    { name: "ipAddress", type: "String", required: true, description: "IP address of terminal/application for payment" },
    { name: "storeId", type: "String", required: true, description: "Revenue Monster Store ID" },
    { name: "order.id", type: "String", required: true, description: "Order ID" },
    { name: "order.title", type: "String", required: true, description: "Order Title" },
    { name: "order.currencyType", type: "String", required: true, description: "Order Currency Type (currently supported MYR only)" },
    { name: "order.amount", type: "Integer", required: true, description: "Order Amount" },
    { name: "order.detail", type: "String", description: "Order Detail" },
    { name: "order.additionalData", type: "String", description: "Order Additional Data" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Transaction response object" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the payment succeeded, otherwise an error code" },
    { name: "error.code", type: "String", description: "Error code if the request failed" },
    { name: "error.message", type: "String", description: "Error message if the request failed" },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)" }
  ]}
/>
