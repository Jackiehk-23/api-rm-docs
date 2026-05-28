---
title: "Direct Checkout — Mode: URL"
sidebar_label: "Mode: URL"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/online

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
  body:
    type: json
    example: |
      {
        "checkoutId": "1582438693268947023",
        "type": "URL",
        "method": "ALIPAYPLUS_MY"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "checkoutId": "1582438693268947023",
      "type": "URL",
      "method": "ALIPAYPLUS_MY"
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
  sandbox="/v3/payment/online"
  prod="/v3/payment/online"
/>

## What is this?

Returns a redirect URL for the selected payment method. Redirect the customer to this URL to complete payment.

## When to Use

Use this mode when:
- Integrating Alipay+, Boost, or other URL-redirect payment methods
- Driving payment from your own checkout UI

:::note
Poll [Query Payment Checkout](../query-checkout.md) every 3-5 seconds to track payment status.
:::

## How to Use

### Step 1: Create a Checkout

Call [Hosted Payment Checkout](../hosted-checkout) to obtain `checkoutId`.

### Step 2: Request the Redirect URL

POST with `type: "URL"` and the desired `method`.

### Step 3: Redirect the Customer

Send the customer to the returned `url`. Poll [Query Payment Checkout](../query-checkout.md) for status updates.

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"URL\"." },
    { name: "method", type: "String", required: true, description: "Payment method (e.g., ALIPAYPLUS_MY)." }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Response item",
      children: [
      { name: "type", type: "String", description: "Checkout session type." },
      { name: "url", type: "String", description: "Checkout session URL." },
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
