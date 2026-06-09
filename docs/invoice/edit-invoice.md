---
id: edit-invoice
title: Edit Invoice
sidebar_label: Edit Invoice

api:
  method: PATCH
  url:
    sandbox: https://sb-open.revenuemonster.my/api/v3/invoice/1779260530271049335
  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body:
    type: json
    example: |
      {
        "referenceId": "my-order-001",
        "storeId": "{{storeId}}",
        "payerEmail": "payer@example.com",
        "payerName": "John Doe",
        "emailSubject": "Your Invoice #001",
        "shouldSendEmail": false,
        "expiryDateTime": "2026-05-21T08:02:00.000Z",
        "amount": 120,
        "currency": "MYR",
        "description": "Order #001 (Updated)",
        "redirectUrl": "https://example.com/success"
      }

examples:
  request: |
    curl --location --request PATCH "https://sb-open.revenuemonster.my/api/v3/invoice/1779260530271049335" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "referenceId": "my-order-001",
      "storeId": "{{storeId}}",
      "payerEmail": "payer@example.com",
      "payerName": "John Doe",
      "emailSubject": "Your Invoice #001",
      "shouldSendEmail": false,
      "expiryDateTime": "2026-05-21T08:02:00.000Z",
      "amount": 120,
      "currency": "MYR",
      "description": "Order #001 (Updated)",
      "redirectUrl": "https://example.com/success"
    }'
  response: |
    {
      "item": {
        "id": "1779260530271049335",
        "referenceId": "my-order-001",
        "storeId": "1608714483132458121",
        "payerEmail": "payer@example.com",
        "payerName": "John Doe",
        "currency": "MYR",
        "amount": 120,
        "invoiceStatus": "PENDING",
        "invoiceUrl": "https://sb-pg.revenuemonster.my/v1/invoice?invoiceId=1779260530271049335",
        "redirectUrl": "https://example.com/success",
        "emailSubject": "Your Invoice #001",
        "description": "Order #001 (Updated)",
        "expiryAt": "2026-05-21T08:02:00Z",
        "createdDateTime": "2026-05-20T07:02:10Z",
        "updatedDateTime": "2026-05-20T07:48:12Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="PATCH"
  sandbox="/api/v3/invoice/{id}"
  prod="/api/v3/invoice/{id}"
/>

## What is this?

Updates an existing invoice. Only invoices with `PENDING` status can be edited.

## When to Use

Use this endpoint when:
- Correcting invoice details (amount, description, expiry) before payment

<Admonition type="note">
At the moment, editing an invoice requires passing in all fields. Partial updates will be supported in the future.
</Admonition>

<Admonition type="caution">
Every field marked **required** must be included in each edit request, even when you are changing only one field. Missing fields return a `422 Unprocessable Entity` with a `VALIDATION_ERROR`.
</Admonition>

## How to Use

1. Provide the invoice `id` in the URL path
2. Send the full set of invoice fields (changed and unchanged)
3. Read the updated `item` in the response

---

## Path Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "id", type: "String", required: true, description: "Invoice ID", example: "1779260530271049335" },
  ]}
/>

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "referenceId", type: "String", required: true, description: "Merchant-defined reference ID", example: "my-order-001" },
    { name: "storeId", type: "String", required: true, description: "Store ID", example: "1608714483132458121" },
    { name: "payerEmail", type: "String", required: true, description: "Email address of the payer", example: "payer@example.com" },
    { name: "payerName", type: "String", description: "Name of the payer", example: "John Doe" },
    { name: "emailSubject", type: "String", required: true, description: "Subject line for the invoice email", example: "Your Invoice #001" },
    { name: "shouldSendEmail", type: "Boolean", description: "Send email notification to the payer", example: "false" },
    { name: "expiryDateTime", type: "String", required: true, description: "Invoice expiry date time (ISO 8601)", example: "2026-05-21T08:02:00.000Z" },
    { name: "amount", type: "Number", required: true, description: "Invoice amount in cents (e.g. 100 = RM 1.00)", example: "120" },
    { name: "currency", type: "String", required: true, description: "Currency code", example: "MYR" },
    { name: "description", type: "String", required: true, description: "Invoice description", example: "Order #001" },
    { name: "redirectUrl", type: "String", description: "URL to redirect the payer after payment", example: "https://example.com/success" },
    { name: "remarks", type: "String", description: "Additional remarks" },
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Updated invoice object. See [Get Invoices](./get-invoices) for the full field list." },
    { name: "code", type: "String", description: "Result code (\"SUCCESS\" on success)." },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
