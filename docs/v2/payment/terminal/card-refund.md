---
title: "Terminal — Card Refund"
sidebar_label: "Card Refund"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay

  headers:
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json
  body:
    type: json
    example: |
      {
        "terminalId": "1582107209454501456",
        "type": "REFUND",
        "data": {
          "transactionId": "210215083727100327507906",
          "receiptType": 3,
          "reason": "Testing Refund",
          "email": "oska.ng@revenuemonster.my",
          "pin": "321123"
        }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --header "Content-Type: application/json" \
    --data '{
      "terminalId": "1582107209454501456",
      "type": "REFUND",
      "data": {
        "transactionId": "210215083727100327507906",
        "receiptType": 3,
        "reason": "Testing Refund",
        "email": "oska.ng@revenuemonster.my",
        "pin": "321123"
      }
    }'
  response: |
    {
      "code": "SUCCESS"
    }

---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/terminal/quickpay"
  prod="/v3/payment/terminal/quickpay"
/>

## What is this?

Sends a card refund event to the RM Terminal. The terminal processes the refund for the specified transaction.

## When to Use

Use this endpoint when:
- Refunding a card transaction at the same RM Terminal
- Customer requests an in-store card refund

<Admonition type="note">
For e-wallet refunds, use [Cancel Transaction — Refund](../cancel-transaction/refund-transaction.mdx) via the server API instead.
</Admonition>

## How to Use

### Step 1: Get the Transaction ID

Capture the `transactionId` from the original card payment.

### Step 2: Send the Refund Event

POST with `type: "REFUND"` and the transaction ID, refund PIN, and email.

### Step 3: Confirm Delivery

A `"SUCCESS"` code means the refund event was dispatched to the terminal.

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "terminalId", type: "String", required: true, description: "RM Terminal ID" },
    { name: "type", type: "String", required: true, description: "Event type. Set to \"REFUND\"." },
    { name: "data", type: "Object", required: true, description: "Request data",
      children: [
      { name: "transactionId", type: "String", required: true, description: "Transaction ID to refund" },
      { name: "receiptType", type: "Integer", description: "Receipt setting: 1 = Print both copies, 2 = Print customer copy only, 3 = Do not print" },
      { name: "reason", type: "String", description: "Reason for the refund" },
      { name: "email", type: "String", required: true, description: "Email address matching the refund PIN" },
      { name: "pin", type: "String", required: true, description: "Refund PIN" },
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
    { name: "code", type: "String", description: "\"SUCCESS\" if the event was sent to terminal, otherwise an error code." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed." },
      { name: "message", type: "String", description: "Error message if the request failed." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
