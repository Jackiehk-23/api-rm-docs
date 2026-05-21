---
title: "Tokenized — Create Customer"
sidebar_label: "Create Customer"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/recurring-payment

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
        "storeId": "1602660043994159611",
        "email": "customer@email.com",
        "name": "Customer Name",
        "countryCode": "60",
        "phoneNumber": "187824152",
        "productName": "Card Tokenized Binding",
        "productDescription": "Some description for card tokenized",
        "redirectUrl": "https://merchant.com/redirect"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/recurring-payment" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --header "Content-Type: application/json" \
    --data '{
      "storeId": "1602660043994159611",
      "email": "customer@email.com",
      "name": "Customer Name",
      "countryCode": "60",
      "phoneNumber": "187824152",
      "productName": "Card Tokenized Binding",
      "productDescription": "Some description for card tokenized",
      "redirectUrl": "https://merchant.com/redirect"
    }'
  response: |
    {
      "item": { "id": "...", "paymentUrl": "https://..." },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/recurring-payment"
  prod="/v3/recurring-payment"
/>

Creates a tokenized payment customer. The customer binds their card once on the RM-hosted page, after which you can charge them on demand using the [Create Customer Order](../customer/create-order.md) API.

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "storeId", type: "String", required: true, description: "Revenue Monster Store ID" },
    { name: "email", type: "String", required: true, description: "Customer email address" },
    { name: "name", type: "String", required: true, description: "Customer name" },
    { name: "countryCode", type: "String", required: true, description: "Customer country code", example: "\"60\"" },
    { name: "phoneNumber", type: "String", required: true, description: "Customer phone number" },
    { name: "productName", type: "String", required: true, description: "Tokenized product name" },
    { name: "productDescription", type: "String", required: true, description: "Tokenized product description" },
    { name: "redirectUrl", type: "String", required: true, description: "URL to redirect the customer to after card binding" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item.id", type: "String", description: "Tokenized customer ID" },
    { name: "item.merchantId", type: "String", description: "Merchant ID" },
    { name: "item.storeId", type: "String", description: "Store ID" },
    { name: "item.label", type: "String", description: "Customer card: front six and last four digits" },
    { name: "item.email", type: "String", description: "Customer email" },
    { name: "item.countryCode", type: "String", description: "Customer country code" },
    { name: "item.phoneNumber", type: "String", description: "Customer phone number" },
    { name: "item.productName", type: "String", description: "Tokenized product name" },
    { name: "item.productDescription", type: "String", description: "Tokenized product description" },
    { name: "item.isActive", type: "Boolean", description: "Whether the token is active. Becomes true after card is bound successfully." },
    { name: "item.createdAt", type: "String", description: "Created date time" },
    { name: "item.updatedAt", type: "String", description: "Last updated date time" },
    { name: "item.clientKey", type: "String", description: "Internal usage only" },
    { name: "item.redirectUrl", type: "String", description: "URL for customer to redirect after card binding" },
    { name: "item.notifyUrl", type: "String", description: "URL for payment notifications" },
    { name: "item.paymentUrl", type: "String", description: "URL for customer to bind their card" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>
