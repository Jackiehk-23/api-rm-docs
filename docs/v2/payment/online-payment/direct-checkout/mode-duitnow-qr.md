---
title: "Direct Checkout — Mode: DuitNow QR"
sidebar_label: "Mode: DuitNow QR"

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
        "method": "",
        "type": "DUITNOW_QRCODE"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "checkoutId": "1687168234460362061",
      "method": "",
      "type": "DUITNOW_QRCODE"
    }'
  response: |
    {
      "item": { "type": "DUITNOW_QRCODE", "qrcode": { "base64Image": "...", "data": "..." } },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/online"
  prod="/v3/payment/online"
/>

Returns a DuitNow QR code that supports all DuitNow-compatible payment apps.

:::note
Poll [Query Payment Checkout](../query-checkout.md) every 3–5 seconds to track payment status.
:::

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"DUITNOW_QRCODE\"." },
    { name: "method", type: "String", required: true, description: "Leave empty for DuitNow QR." }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item.type", type: "String", description: "Checkout session type." },
    { name: "item.qrcode.base64Image", type: "String", description: "Base64-encoded QR code image." },
    { name: "item.qrcode.data", type: "String", description: "QR code data string." },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded." },
    { name: "error.code", type: "String", description: "Error code." },
    { name: "error.message", type: "String", description: "Error message." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>
