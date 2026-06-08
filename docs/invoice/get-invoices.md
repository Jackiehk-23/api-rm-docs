---
id: get-invoices
title: Get Invoices
sidebar_label: Get Invoices

api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/api/v3/invoices?limit=10&status=PENDING&status=PAID
  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/api/v3/invoices?limit=10&status=PENDING&status=PAID" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}"
  response: |
    {
      "cursor": "EgdpbnZvaWNlGO-k7oe_06bUGA",
      "items": [
        {
          "id": "1779182387465236522",
          "referenceId": "my-order-001",
          "merchantId": "1608714483545147273",
          "merchantName": "Apple Store Malaysia",
          "storeId": "1608714483132458121",
          "payerEmail": "payer@example.com",
          "currency": "MYR",
          "amount": 100,
          "paidAmount": 100,
          "invoiceStatus": "PAID",
          "transactionId": "26051909210227931732",
          "invoiceUrl": "https://sb-pg.revenuemonster.my/v1/invoice?invoiceId=1779182387465236522",
          "emailSubject": "Your Invoice",
          "description": "Order #001",
          "expiryAt": "2035-09-17T10:19:00Z",
          "paidAt": "2026-05-19T09:21:19Z",
          "createdDateTime": "2026-05-19T09:19:47Z",
          "updatedDateTime": "2026-05-19T09:21:19Z"
        }
      ]
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="GET"
  sandbox="/api/v3/invoices"
  prod="/api/v3/invoices"
/>

## What is this?

Retrieves a paginated list of invoices. Supports filtering by store, status, and date range.

## When to Use

Use this endpoint when:
- Listing invoices in a dashboard
- Reconciling paid vs pending invoices
- Searching invoices within a date range

<Admonition type="info">
**Invoice status values:** `PENDING`, `PAID`, `EXPIRED`, `DELETED`.
</Admonition>

## How to Use

1. Send the request with optional filters (`storeId`, `status`, `start`, `end`, `limit`)
2. Read `items` for the invoice list
3. If `cursor` is non-empty, pass it on the next request to fetch the next page

---

## Request Parameters

<ParamTable
  title="Query Parameters"
  rows={[
    { name: "storeId", type: "String", description: "Filter by store ID", example: "1608714483132458121" },
    { name: "status", type: "Array", description: "Filter by invoice status. Repeat the param for multiple statuses.", example: '["PENDING", "PAID"]' },
    { name: "limit", type: "Number", description: "Number of records per page", example: "10" },
    { name: "cursor", type: "String", description: "Pagination cursor from the previous response", example: "EgdpbnZvaWNlGKrg..." },
    { name: "start", type: "String", description: "Filter invoices created from this date time (RFC3339)", example: "2026-05-18T09:21:19Z" },
    { name: "end", type: "String", description: "Filter invoices created up to this date time (RFC3339)", example: "2026-05-19T09:21:19Z" },
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "cursor", type: "String", description: "Cursor for the next page (empty when there are no more results)." },
    { name: "items", type: "Array", description: "List of invoice objects.",
      children: [
      { name: "id", type: "String", description: "Invoice ID." },
      { name: "referenceId", type: "String", description: "Merchant-defined reference ID." },
      { name: "recurringInvoiceId", type: "String", description: "Recurring invoice ID (empty if not recurring)." },
      { name: "invoiceGroupId", type: "String", description: "Invoice group ID (empty if standalone)." },
      { name: "merchantId", type: "String", description: "Merchant ID." },
      { name: "merchantName", type: "String", description: "Merchant name." },
      { name: "merchantLogoUrl", type: "String", description: "Merchant logo URL." },
      { name: "merchantEmail", type: "String", description: "Merchant notification email." },
      { name: "storeId", type: "String", description: "Store ID." },
      { name: "payerEmail", type: "String", description: "Payer email address." },
      { name: "payerName", type: "String", description: "Payer name." },
      { name: "payerPhoneNumber", type: "String", description: "Payer phone number." },
      { name: "payerCountryCode", type: "String", description: "Payer country code." },
      { name: "currency", type: "String", description: "Currency code." },
      { name: "amount", type: "Number", description: "Invoice amount in cents (e.g. 100 = RM 1.00)." },
      { name: "paidAmount", type: "Number", description: "Amount paid in cents." },
      { name: "feesPaidAmount", type: "Number", description: "Fees amount in cents." },
      { name: "netPaidAmount", type: "Number", description: "Net amount received in cents." },
      { name: "invoiceStatus", type: "String", description: "Invoice status (PENDING, PAID, EXPIRED, DELETED)." },
      { name: "transactionId", type: "String", description: "Transaction ID (populated when paid)." },
      { name: "invoiceUrl", type: "String", description: "Shareable invoice payment URL." },
      { name: "redirectUrl", type: "String", description: "URL to redirect the payer after payment." },
      { name: "tncUrl", type: "String", description: "Terms and conditions URL." },
      { name: "remarks", type: "String", description: "Additional remarks." },
      { name: "shouldSendEmail", type: "Boolean", description: "Whether an email notification is sent to the payer." },
      { name: "emailSubject", type: "String", description: "Email subject." },
      { name: "description", type: "String", description: "Invoice description." },
      { name: "expiryAt", type: "String", description: "Invoice expiry date time (RFC3339)." },
      { name: "paidAt", type: "String", description: "Payment date time (RFC3339, empty if unpaid)." },
      { name: "createdDateTime", type: "String", description: "Invoice creation date time (RFC3339)." },
      { name: "updatedDateTime", type: "String", description: "Last updated date time (RFC3339)." },
      { name: "customFields", type: "Object", description: "Custom fields (null if not set; not in use at the moment)." },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
