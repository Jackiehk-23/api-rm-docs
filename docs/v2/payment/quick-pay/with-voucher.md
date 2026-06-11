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
        "storeId": "{{storeId}}",
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
      "storeId": "{{storeId}}",
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

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/quickpay"
  prod="/v3/payment/quickpay"
/>

## What is this?

Quick Pay with a Revenue Monster voucher applied. The voucher's discount is deducted from the order total before processing the e-wallet payment.

## When to Use

Use this endpoint when:
- The customer has an RM voucher to redeem against the purchase
- Combining wallet payment with merchant promotions

<Admonition type="tip">
Vouchers can be generated as QR codes for scanning. Scan the voucher QR code first, then scan the wallet QR code.
</Admonition>

## How to Use

### Step 1: Get the Voucher Code

Capture the voucher `code` from a QR scan or customer-supplied code.

### Step 2: Scan the Wallet QR

Capture the customer's wallet `authCode`.

### Step 3: Send the Payment

POST the authCode, order, and `voucher.code` to `/v3/payment/quickpay`.

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "authCode", type: "String", required: true, description: "Auth code of QR code/barcode being scanned" },
    { name: "ipAddress", type: "String", required: true, description: "IP address of terminal/application for payment" },
    { name: "storeId", type: "String", required: true, description: "Revenue Monster Store ID" },
    { name: "order", type: "Object", required: true, description: "Order details",
      children: [
      { name: "id", type: "String", required: true, description: "Order ID" },
      { name: "title", type: "String", required: true, description: "Order Title" },
      { name: "currencyType", type: "String", required: true, description: "Order Currency Type (currently supported MYR only)" },
      { name: "amount", type: "Integer", required: true, description: "Order Amount" },
      { name: "detail", type: "String", description: "Order Detail" },
      { name: "additionalData", type: "String", description: "Order Additional Data" },
      ]
    },
    { name: "voucher", type: "Object", description: "Voucher details",
      children: [
      { name: "code", type: "String", description: "Revenue Monster Voucher Code" },
      ]
    },
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
