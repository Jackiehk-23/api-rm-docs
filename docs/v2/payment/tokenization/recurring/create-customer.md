---
title: "Create Recurring Customer"
sidebar_label: "Create Recurring Customer"

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
        "productName": "Subscription",
        "productDescription": "Weekly subscription",
        "currency": "MYR",
        "amount": 1000,
        "redirectUrl": "https://merchant.com/redirect",
        "notifyUrl": "https://merchant.com/notify",
        "recurringInterval": "WEEKLY",
        "recurringTarget": "1",
        "recurringRepetition": 10
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
      "productName": "Subscription",
      "productDescription": "Weekly subscription",
      "currency": "MYR",
      "amount": 1000,
      "redirectUrl": "https://merchant.com/redirect",
      "notifyUrl": "https://merchant.com/notify",
      "recurringInterval": "WEEKLY",
      "recurringTarget": "1",
      "recurringRepetition": 10
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

Creates a recurring payment customer. The customer will be redirected to bind their card, after which charges happen automatically on your defined schedule.

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "storeId", type: "String", required: true, description: "Revenue Monster Store ID" },
    { name: "email", type: "String", required: true, description: "Customer email address" },
    { name: "name", type: "String", required: true, description: "Customer name" },
    { name: "countryCode", type: "String", required: true, description: "Customer country code", example: "\"60\"" },
    { name: "phoneNumber", type: "String", required: true, description: "Customer phone number" },
    { name: "productName", type: "String", required: true, description: "Recurring product name" },
    { name: "productDescription", type: "String", required: true, description: "Recurring product description" },
    { name: "currency", type: "String", required: true, description: "Recurring payment currency", example: "\"MYR\"" },
    { name: "amount", type: "Integer", required: true, description: "Recurring payment amount in smallest currency unit" },
    { name: "redirectUrl", type: "String", required: true, description: "URL to redirect the customer to after card binding" },
    { name: "notifyUrl", type: "String", required: true, description: "Server URL to receive payment notifications" },
    { name: "recurringInterval", type: "String", required: true, description: "Recurring interval (WEEKLY, MONTHLY)" },
    { name: "recurringTarget", type: "String", required: true, description: "Day of the week or month to charge. See recurring target rules below." },
    { name: "recurringRepetition", type: "Integer", required: true, description: "Number of times to charge the customer" }
  ]}
/>

## Recurring Target Rules

| Interval | Target | Payment Behaviour |
|---|---|---|
| `WEEKLY` | `0` | Every Sunday |
| `WEEKLY` | `1` | Every Monday |
| `WEEKLY` | `2` | Every Tuesday |
| `WEEKLY` | `3` | Every Wednesday |
| `WEEKLY` | `4` | Every Thursday |
| `WEEKLY` | `5` | Every Friday |
| `WEEKLY` | `6` | Every Saturday |
| `MONTHLY` | `-1` | End of every month |
| `MONTHLY` | `0` | Start of every month |
| `MONTHLY` | `1–28` | Day of the month |

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item.id", type: "String", description: "Recurring payment ID" },
    { name: "item.merchantId", type: "String", description: "Merchant ID" },
    { name: "item.storeId", type: "String", description: "Store ID" },
    { name: "item.label", type: "String", description: "Customer card: front six and last four digits" },
    { name: "item.email", type: "String", description: "Customer email" },
    { name: "item.countryCode", type: "String", description: "Customer country code" },
    { name: "item.phoneNumber", type: "String", description: "Customer phone number" },
    { name: "item.productName", type: "String", description: "Recurring product name" },
    { name: "item.productDescription", type: "String", description: "Recurring product description" },
    { name: "item.isActive", type: "Boolean", description: "Whether the recurring payment is active. Becomes true after card is bound successfully." },
    { name: "item.createdAt", type: "String", description: "Recurring created date time" },
    { name: "item.updatedAt", type: "String", description: "Recurring last updated date time" },
    { name: "item.clientKey", type: "String", description: "Internal usage only" },
    { name: "item.redirectUrl", type: "String", description: "URL for customer to redirect after card binding" },
    { name: "item.notifyUrl", type: "String", description: "URL for payment notifications" },
    { name: "item.paymentUrl", type: "String", description: "URL for customer to bind their card" },
    { name: "item.recurringPayment.amount", type: "Integer", description: "Recurring payment amount" },
    { name: "item.recurringPayment.currency", type: "String", description: "Recurring payment currency" },
    { name: "item.recurringPayment.recurringInterval", type: "String", description: "Recurring interval" },
    { name: "item.recurringPayment.recurringTarget", type: "String", description: "Recurring target rules" },
    { name: "item.recurringPayment.recurringRepetition", type: "Integer", description: "Number of repetitions" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>
