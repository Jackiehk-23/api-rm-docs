---
id: reconciliation
title: "Reconciliation"
sidebar_label: "Reconciliation"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/reconciliation

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
        "transactionType": "PAYMENT",
        "date": "2021-07-28",
        "method": ["BOOST"],
        "region": ["MALAYSIA"],
        "cursor": ""
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

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/reconciliation"
  prod="/v3/payment/reconciliation"
/>

## What is this?

Retrieve a list of settled transactions for a specific date, filtered by payment method and region. Use this for end-of-day reconciliation, financial reporting, or matching transactions against your own records.

## When to Use

Use this endpoint when you:
- Need to reconcile daily transactions with your bank statements
- Want to generate settlement reports for accounting
- Need to verify which transactions were settled on a given date

---

## How to Use

### Step 1: Set the Transaction Date

Choose the date you want to reconcile. Use the format `YYYY-MM-DD`.

### Step 2: Optionally Filter by Method and Region

Specify which payment methods (e.g., `BOOST`, `TNG`, `ALIPAY`) and regions to include. If omitted, all methods and regions are returned.

### Step 3: Make the POST Request

Send the date and optional filters. Use the `cursor` field for pagination on subsequent requests.

### Step 4: Review the Response

Each item in `items` represents a settled transaction. Use `meta.cursor` for pagination if results are truncated.

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "transactionType", type: "String", description: "Type of transactions to retrieve (e.g., \"PAYMENT\")" },
    { name: "date", type: "String", required: true, description: "Transaction date in YYYY-MM-DD format", example: "\"2021-07-28\"" },
    { name: "method", type: "Array", description: "Filter by payment methods (e.g., [\"BOOST\"])", example: "[\"BOOST\"]" },
    { name: "region", type: "Array", description: "Filter by regions (e.g., [\"MALAYSIA\"])", example: "[\"MALAYSIA\"]" },
    { name: "cursor", type: "String", description: "Pagination cursor from previous response" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "items", type: "Array", description: "List of reconciled transaction records",
      children: [
        { name: "transactionAt", type: "String", description: "Transaction date time" },
        { name: "merchantId", type: "String", description: "Merchant ID" },
        { name: "merchantName", type: "String", description: "Merchant name" },
        { name: "storeId", type: "String", description: "Store ID" },
        { name: "storeName", type: "String", description: "Store name" },
        { name: "region", type: "String", description: "Transaction region" },
        { name: "method", type: "String", description: "Payment method" },
        { name: "transactionType", type: "String", description: "Transaction type (PAYMENT or REFUND)" },
        { name: "type", type: "String", description: "Transaction type" },
        { name: "transactionId", type: "String", description: "Transaction ID" },
        { name: "orderId", type: "String", description: "Order ID" },
        { name: "currencyType", type: "String", description: "Currency type" },
        { name: "grossAmount", type: "String", description: "Gross transaction amount" },
        { name: "mdr", type: "String", description: "MDR (merchant discount rate) amount" },
        { name: "serviceFee", type: "String", description: "Service fee amount" },
        { name: "settlementAmount", type: "String", description: "Net settlement amount" }
      ]
    },
    { name: "meta.cursor", type: "String", description: "Pagination cursor for next page" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
