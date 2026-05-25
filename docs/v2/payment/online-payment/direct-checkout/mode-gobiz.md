---
title: "Direct Checkout — Mode: Card Payment"
sidebar_label: "Mode: Card\nPayment"

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
        "checkoutId": "1687168234460362061",
        "method": "MASTERCARD_MY",
        "type": "URL"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "checkoutId": "1687168234460362061",
      "method": "MASTERCARD_MY",
      "type": "URL"
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

Returns a payment redirect URL for GoBiz, Paydee, or Mastercard payment methods.

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"URL\"." },
    { name: "method", type: "String", required: true, description: "Payment method (e.g., MASTERCARD_MY, GOBIZ_MY)." },
    { name: "gobiz", type: "Object", description: "GoBiz details",
      children: [
      { name: "type", type: "String", description: "GoBiz payment type." },
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
      { name: "url", type: "String", description: "Payment URL." },
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
