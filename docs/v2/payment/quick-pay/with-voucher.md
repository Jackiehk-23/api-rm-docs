---
title: "Quick Pay + Voucher"
sidebar_label: "Voucher"

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
          "amount": 1000
        },
        "voucher": {
          "code": "haYkAch3VN"
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
        "amount": 1000
      },
      "voucher": {
        "code": "haYkAch3VN"
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

:::tip
Vouchers can be generated as QR codes for scanning. Scan the voucher QR code first, then scan the wallet QR code.
:::

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
    { name: "order.additionalData", type: "String", description: "Order Additional Data" },
    { name: "voucher.code", type: "String", description: "Revenue Monster Voucher Code" }
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
    { name: "code", type: "String", description: "\"SUCCESS\" if the payment succeeded, otherwise an error code" },
    { name: "error.code", type: "String", description: "Error code if the request failed" },
    { name: "error.message", type: "String", description: "Error message if the request failed" },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)" }
  ]}
/>
