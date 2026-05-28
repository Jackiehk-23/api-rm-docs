---
title: "Direct Checkout — Mode: QR Code"
sidebar_label: "Mode: QR Code"

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
        "type": "QRCODE",
        "method": "MAYBANK_MY"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "checkoutId": "1582438693268947023",
      "type": "QRCODE",
      "method": "MAYBANK_MY"
    }'
  response: |
    {
      "item": { "type": "QRCODE", "qrcode": { "base64Image": "...", "data": "..." } },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/online"
  prod="/v3/payment/online"
/>

## What is this?

Returns a QR code image for the selected payment method. Display this QR code on screen for the customer to scan with their mobile banking or wallet app.

## When to Use

Use this mode when:
- Integrating Maybank QR, CIMB QR, or other bank-specific QR payments
- Displaying QR on a desktop checkout for mobile scanning

<Admonition type="note">
Poll [Query Payment Checkout](../query-checkout.md) every 3-5 seconds to track payment status.
</Admonition>

## How to Use

### Step 1: Create a Checkout

Call [Hosted Payment Checkout](../hosted-checkout) to obtain `checkoutId`.

### Step 2: Request the QR Code

POST with `type: "QRCODE"` and the desired bank `method`.

### Step 3: Display and Poll

Render the returned `base64Image` and poll [Query Payment Checkout](../query-checkout.md) for status.

### Decode your Image using Base64

Using **qrCodeImageBase64** URL to generate a QR Code

<img src={require('/img/payment-image/individual-qr-code.png').default} alt="QR Code Example" style={{maxWidth: '350px', display: 'block', borderRadius: '8px'}} />

### What user will receive

Once user scan the QR Code it will display

<img src={require('/img/payment-image/check-out-payment.png').default} alt="What User Will Receive" style={{maxWidth: '400px', display: 'block', borderRadius: '8px'}} />

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"QRCODE\"." },
    { name: "method", type: "String", required: true, description: "Payment method (e.g., MAYBANK_MY)." }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Response item",
      children: [
      { name: "type", type: "String", description: "Checkout session type." },
      { name: "qrcode", type: "Object", description: "qrcode details",
        children: [
        { name: "base64Image", type: "String", description: "Base64-encoded QR code image." },
        { name: "data", type: "String", description: "QR code data string." },
        ]
      },
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
