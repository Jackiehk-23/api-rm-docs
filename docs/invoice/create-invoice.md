---
id: create-invoice
title: Create Invoice
sidebar_label: Create Invoice

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/api/v3/invoice
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
        "storeId": "{{storeId}}",
        "referenceId": "my-order-001",
        "payerEmail": "payer@example.com",
        "payerName": "John Doe",
        "emailSubject": "Your Invoice #001",
        "shouldSendEmail": true,
        "expiryDateTime": "2026-05-21T08:02:00.000Z",
        "amount": 100,
        "currency": "MYR",
        "description": "Order #001",
        "redirectUrl": "https://example.com/success"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/api/v3/invoice" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "storeId": "{{storeId}}",
      "referenceId": "my-order-001",
      "payerEmail": "payer@example.com",
      "payerName": "John Doe",
      "emailSubject": "Your Invoice #001",
      "shouldSendEmail": true,
      "expiryDateTime": "2026-05-21T08:02:00.000Z",
      "amount": 100,
      "currency": "MYR",
      "description": "Order #001",
      "redirectUrl": "https://example.com/success"
    }'
  response: |
    {
      "item": {
        "id": "1779261889474362606",
        "referenceId": "my-order-001",
        "merchantId": "1608714483545147273",
        "merchantName": "Apple Store Malaysia",
        "storeId": "1608714483132458121",
        "payerEmail": "payer@example.com",
        "currency": "MYR",
        "amount": 100,
        "paidAmount": 0,
        "invoiceStatus": "PENDING",
        "invoiceUrl": "https://sb-pg.revenuemonster.my/v1/invoice?invoiceId=1779261889474362606",
        "redirectUrl": "https://example.com/success",
        "emailSubject": "Your Invoice #001",
        "description": "Order #001",
        "expiryAt": "2026-05-21T08:02:00Z",
        "createdDateTime": "2026-05-20T07:24:49Z",
        "updatedDateTime": "2026-05-20T07:24:49Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/api/v3/invoice"
  prod="/api/v3/invoice"
/>

## What is this?

Creates a new invoice. The response includes a shareable `invoiceUrl` that can be sent to the payer to complete payment.

## When to Use

Use this endpoint when:
- Billing a customer for a one-off payment
- Sending a payment request by email or link instead of an in-app checkout

<Admonition type="note">
Set `shouldSendEmail` to `true` to have Revenue Monster email the invoice to the payer automatically.
</Admonition>

## How to Use

1. Send the invoice details → receive the created invoice with its `invoiceUrl`
2. Share the `invoiceUrl` with the payer (or let RM email it)
3. The invoice stays `PENDING` until paid or expired

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "storeId", type: "String", required: true, description: "Store ID", example: "1608714483132458121" },
    { name: "referenceId", type: "String", required: true, description: "Merchant-defined unique reference ID", example: "my-order-001" },
    { name: "merchantEmail", type: "String", description: "Email for payment notification to the merchant", example: "merchant@example.com" },
    { name: "payerEmail", type: "String", required: true, description: "Email for payment notification to the payer", example: "payer@example.com" },
    { name: "payerName", type: "String", required: true, description: "Payer name", example: "John Doe" },
    { name: "emailSubject", type: "String", required: true, description: "Subject line for the invoice email", example: "Your Invoice #001" },
    { name: "shouldSendEmail", type: "Boolean", description: "Whether to send the invoice email to the payer", example: "true" },
    { name: "expiryDateTime", type: "String", required: true, description: "Invoice expiry date time (ISO 8601)", example: "2026-05-21T08:02:00.000Z" },
    { name: "amount", type: "Number", required: true, description: "Invoice amount in cents (e.g. 100 = RM 1.00)", example: "100" },
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
    { name: "item", type: "Object", description: "Created invoice object. See [Get Invoices](./get-invoices) for the full field list." },
    { name: "code", type: "String", description: "Result code (\"SUCCESS\" on success)." },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
