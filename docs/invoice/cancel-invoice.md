---
id: cancel-invoice
title: Cancel Invoice
sidebar_label: Cancel Invoice

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/api/v3/invoice/{id}/cancel
  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/api/v3/invoice/{id}/cancel" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}"
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
        "invoiceStatus": "EXPIRED",
        "invoiceUrl": "https://sb-pg.revenuemonster.my/v1/invoice?invoiceId=1779261889474362606",
        "redirectUrl": "https://example.com/success",
        "emailSubject": "Your Invoice #001",
        "description": "Order #001",
        "expiryAt": "2026-05-21T08:02:00Z",
        "createdDateTime": "2026-05-20T07:24:49Z",
        "updatedDateTime": "2026-05-20T07:25:23Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/api/v3/invoice/{id}/cancel"
  prod="/api/v3/invoice/{id}/cancel"
/>

## What is this?

Cancels a pending invoice. Only invoices with `PENDING` status can be cancelled.

## When to Use

Use this endpoint when:
- Voiding an invoice that is no longer needed before it is paid

<Admonition type="note">
After cancellation, the invoice status becomes `EXPIRED`.
</Admonition>

## How to Use

1. Provide the invoice `id` in the URL path
2. The invoice status is updated to `EXPIRED`

---

## Path Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "id", type: "String", required: true, description: "Invoice ID", example: "1779261889474362606" },
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Updated invoice object (status will be EXPIRED). See [Get Invoices](./get-invoices) for the full field list." },
    { name: "code", type: "String", description: "Result code (\"SUCCESS\" on success)." },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
