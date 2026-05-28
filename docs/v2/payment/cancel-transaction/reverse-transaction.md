---
title: "Reverse Transaction"
sidebar_label: "Reverse Transaction"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/reverse

  headers:
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
  body:
    type: json
    example: |
      {
        "orderId": "180730103903010431152179"
      }

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    There is no example response provided.

---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";
import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/reverse"
  prod="/v3/payment/reverse"
/>

## What is this?

Reverse a transaction — used to void a payment before settlement. If a transaction times out, perform a reverse before creating a new transaction to prevent a double charge.

<Admonition type="danger">
  <strong>Reverse</strong> cancels a transaction — used mainly to prevent double charges when a timeout occurs. Use within ~15 minutes of a transaction.
</Admonition>

---

## How to Use

### Step 1: Get the Order ID

Locate the `orderId` from the original transaction response.

### Step 2: Make the Request

Send the reverse request with the `orderId`. Check the `code` field in the response — if `"SUCCESS"`, the operation completed.

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "orderId", type: "String", required: true, description: "Order ID of the transaction to reverse", example: "\"180730103903010431152179\"" }
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
    { name: "code", type: "String", description: "\"SUCCESS\" if the reverse succeeded, otherwise an error code." },
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