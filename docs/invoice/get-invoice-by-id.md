---
id: get-invoice-by-id
title: Get Invoice by ID
sidebar_label: Get Invoice by ID

api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/api/v3/invoice/{id}
  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/api/v3/invoice/{id}" \
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
  method="GET"
  sandbox="/api/v3/invoice/{id}"
  prod="/api/v3/invoice/{id}"
/>

## What is this?

Retrieves a single invoice by its `id`.

## When to Use

Use this endpoint when:
- Checking the current status of a specific invoice
- Displaying invoice details to a merchant or payer

## How to Use

1. Provide the invoice `id` in the URL path
2. Read the `item` object for the invoice details

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
    { name: "item", type: "Object", description: "Invoice object. See [Get Invoices](./get-invoices) for the full field list." },
    { name: "code", type: "String", description: "Result code (\"SUCCESS\" on success)." },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
