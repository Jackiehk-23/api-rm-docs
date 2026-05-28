---
title: "Quick Pay + Spending Loyalty"
sidebar_label: "Spending Loyalty"

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
        "loyalty": {
          "type": "PHONENUMBER",
          "countryCode": "60",
          "phoneNumber": "103403660"
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
      "loyalty": {
        "type": "PHONENUMBER",
        "countryCode": "60",
        "phoneNumber": "103403660"
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

Quick Pay that links the transaction to a loyalty member, so the customer earns spending loyalty points alongside their payment.

## When to Use

Use this endpoint when:
- The merchant runs a spending-loyalty program
- The customer is enrolled as a loyalty member (identified by phone number or member ID)

<Admonition type="important">
You will receive extra parameters in the transaction response. Print the generated QR code on the receipt so customers can scan it to retrieve their spending loyalty points.

See [Transaction Object > Spending Loyalty](../query/transaction-object.md#spending-loyalty).
</Admonition>

## How to Use

### Step 1: Identify the Loyalty Member

Capture the customer's loyalty `phoneNumber` (or `memberId`) and `countryCode`.

### Step 2: Scan the Wallet QR

Capture the customer's wallet `authCode`.

### Step 3: Send the Payment

POST the authCode, order, and `loyalty` object to `/v3/payment/quickpay`. Print the returned spending-loyalty QR on the receipt.

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
    { name: "loyalty", type: "Object", description: "Loyalty details",
      children: [
      { name: "type", type: "String", description: "Loyalty type" },
      { name: "memberId", type: "String", description: "Loyalty member's ID" },
      { name: "countryCode", type: "String", description: "Loyalty member's country code" },
      { name: "phoneNumber", type: "String", description: "Loyalty member's phone number" },
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
