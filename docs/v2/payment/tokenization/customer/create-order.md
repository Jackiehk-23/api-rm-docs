---
title: "Customer — Create Order (Payment)"
sidebar_label: "Create Order"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/charge

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json
  body:
    type: json
    example: |
      {
        "currency": "MYR",
        "amount": 100,
        "title": "Some order title",
        "description": "Some order description"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/charge" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --header "Content-Type: application/json" \
    --data '{
      "currency": "MYR",
      "amount": 100,
      "title": "Some order title",
      "description": "Some order description"
    }'
  response: |
    {
      "item": { ... },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";
import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/recurring-payment/{customer_id}/charge"
  prod="/v3/recurring-payment/{customer_id}/charge"
/>

## What is this?

Charges a customer's bound card immediately. Use this for tokenized payment customers where you manage your own charging schedule.

## When to Use

Use this endpoint when:
- You need to charge an existing tokenized customer right now
- Running ad-hoc billing for a saved-card customer

<Admonition type="danger">
  This charges the customer's card — it is not a manual order creation. The amount is applied directly to the stored token.
</Admonition>

## How to Use

### Step 1: Identify the Customer

Use the `customer_id` returned by [Create Tokenized Customer](../tokenized/create-customer.md) or [Create Recurring Customer](../recurring/create-customer.md).

### Step 2: Send the Charge

POST `currency`, `amount`, and optional `title` / `description` to `/v3/recurring-payment/{customer_id}/charge`.

### Step 3: Inspect the Transaction

The response `item` contains the full transaction record. Code `"SUCCESS"` means the card was charged.

---

## Request Parameters

<ParamTable
  title="Path Parameters"
  rows={[
    { name: "customer_id", type: "String", required: true, description: "Customer ID returned from Create Recurring Customer or Create Tokenized Customer" }
  ]}
/>

<ParamTable
  title="Body Parameters"
  rows={[
    { name: "currency", type: "String", required: true, description: "Payment currency", example: "\"MYR\"" },
    { name: "amount", type: "Integer", required: true, description: "Payment amount in smallest currency unit" },
    { name: "title", type: "String", description: "Payment information title" },
    { name: "description", type: "String", description: "Payment information description" }
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
    { name: "code", type: "String", description: "\"SUCCESS\" if the payment succeeded, otherwise an error code." },
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
