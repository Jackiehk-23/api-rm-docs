---
title: "Direct Checkout — Mode: FPX"
sidebar_label: "Mode: FPX"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/online/checkout

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
  body:
    type: json
    example: |
      {
        "checkoutId": "1687166508263303064",
        "method": "FPX_MY",
        "type": "URL",
        "fpx": { "bankCode": "TEST0021" }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online/checkout" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "checkoutId": "1687166508263303064",
      "method": "FPX_MY",
      "type": "URL",
      "fpx": { "bankCode": "TEST0021" }
    }'
  response: |
    {
      "item": { "type": "URL", "url": "https://..." },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/online/checkout"
  prod="/v3/payment/online/checkout"
/>

## What is this?

Returns an FPX (online banking) redirect URL. Customer chooses their bank from the FPX bank list and is redirected to complete payment.

## When to Use

Use this mode when:
- Accepting Malaysian online banking payments
- The customer prefers paying via their bank's online portal

## How to Use

### Step 1: Get the FPX Bank List

GET `/v3/payment/fpx-bank` to retrieve the list of supported banks, and let the customer pick their bank.

### Step 2: Create a Checkout

Call [Hosted Payment Checkout](../hosted-checkout) to obtain `checkoutId`.

### Step 3: Request the FPX Redirect URL

POST with `type: "URL"`, `method: "FPX_MY"`, and `fpx.bankCode`.

### Step 4: Redirect the Customer

Send the customer to the returned `url` to complete payment at their bank.

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"URL\"." },
    { name: "method", type: "String", required: true, description: "Payment method. Set to \"FPX_MY\"." },
    { name: "fpx", type: "Object", required: true, description: "FPX banking details",
      children: [
      { name: "bankCode", type: "String", required: true, description: "FPX bank code from the table above." },
      ]
    },
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Response item",
      children: [
      { name: "type", type: "String", description: "Checkout session type." },
      { name: "url", type: "String", description: "FPX payment URL to redirect the customer to." },
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code." },
      { name: "message", type: "String", description: "Error message." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
