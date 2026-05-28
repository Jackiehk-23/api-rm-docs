---
title: "Hosted Payment Checkout"
sidebar_label: "Hosted Payment Checkout"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/online

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
        "storeId": "123456789012345678901234",
        "redirectUrl": "https://merchant.com/payment/redirect",
        "notifyUrl": "https://merchant.com/payment/notify",
        "layoutVersion": "v4",
        "type": "WEB_PAYMENT",
        "order": {
          "id": "ORDER123456789012345678",
          "title": "Online Payment",
          "currencyType": "MYR",
          "amount": 1000
        }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "storeId": "123456789012345678901234",
      "redirectUrl": "https://merchant.com/payment/redirect",
      "notifyUrl": "https://merchant.com/payment/notify",
      "layoutVersion": "v4",
      "type": "WEB_PAYMENT",
      "order": {
        "id": "ORDER123456789012345678",
        "title": "Online Payment",
        "currencyType": "MYR",
        "amount": 1000
      }
    }'
  response: |
    {
      "item": { "checkoutId": "...", "url": "https://..." },
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

Creates a unified payment checkout page for both web and mobile. The customer is redirected to the RM-hosted checkout page to complete payment.

## When to Use

Use this endpoint when:
- Building a web or mobile checkout that supports multiple payment methods
- You want RM to host the payment UI (no need to build your own)
- Integrating tokenization or saved cards

:::note
- This creates a unified payment checkout page for both web and mobile.
- The **data object** must be sorted alphabetically, including nested objects.
:::

## How to Use

1. Send order details → receive `checkoutId` and checkout `url`
2. Redirect customer to the `url`
3. After payment, customer is redirected to your `redirectUrl` with `status` and `orderId`
4. Your `notifyUrl` receives a server-to-server callback on success

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "storeId", type: "String", required: true, description: "Revenue Monster Store ID" },
    { name: "redirectUrl", type: "String", required: true, description: "URL to redirect the customer back to after payment." },
    { name: "notifyUrl", type: "String", required: true, description: "Server URL to receive payment status callbacks." },
    { name: "layoutVersion", type: "String", required: true, description: "Always use \"v4\"." },
    { name: "type", type: "String", required: true, description: "Checkout session type." },
    { name: "method", type: "Array", description: "Payment methods to enable.", children: [
        { name: "[item]", type: "String", description: "Payment method identifier (e.g., \"WECHATPAY\", \"ALIPAY\", \"FPX\")" }
      ] },
    { name: "order", type: "Object", required: true, description: "Order details",
      children: [
      { name: "id", type: "String", required: true, description: "Order ID" },
      { name: "title", type: "String", required: true, description: "Order title" },
      { name: "currencyType", type: "String", required: true, description: "Order currency type (currently supported MYR only)" },
      { name: "amount", type: "Integer", required: true, description: "Order amount" },
      { name: "detail", type: "String", description: "Order detail" },
      { name: "additionalData", type: "String", description: "Order additional data" },
      ]
    },
    { name: "customer", type: "Object", description: "Customer details",
      children: [
      { name: "userId", type: "String", description: "Required when tokenization is enabled." },
      { name: "email", type: "String", description: "Customer email address." },
      { name: "countryCode", type: "String", description: "Customer country code." },
      { name: "phoneNumber", type: "String", description: "Customer phone number." },
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
      { name: "checkoutId", type: "String", description: "Checkout session ID" },
      { name: "url", type: "String", description: "Checkout session URL to redirect the customer to" },
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed." },
      { name: "message", type: "String", description: "Error message." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
