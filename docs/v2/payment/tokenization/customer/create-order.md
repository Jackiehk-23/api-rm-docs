---
title: "Customer — Create Order (Payment)"
sidebar_label: "Create Order"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/charge

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
        "currency": "MYR",
        "amount": 100,
        "title": "Some order title",
        "description": "Some order description"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/charge" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --header "Content-Type: application/json" \
    --data '{
      "currency": "MYR",
      "amount": 100,
      "title": "Some order title",
      "description": "Some order description"
    }'
  response: |
    {
      "item": { ... },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/recurring-payment/{customer_id}/charge"
  prod="/v3/recurring-payment/{customer_id}/charge"
/>

Charges a customer's bound card immediately. Used for tokenized payment customers where you manage your own charging schedule.

:::caution
This charges the customer's card — it is not a manual order creation. The amount is applied directly to the stored token.
:::

## Request Parameters

<ParamTable
  title="Path Parameters"
  rows={[
    { name: "customer_id", type: "String", required: true, description: "Customer ID returned from Create Recurring Customer or Create Tokenized Customer" }
  ]}
/>

<ParamTable
  title="Body Parameters"
  rows={[
    { name: "currency", type: "String", required: true, description: "Payment currency", example: "\"MYR\"" },
    { name: "amount", type: "Integer", required: true, description: "Payment amount in smallest currency unit" },
    { name: "title", type: "String", description: "Payment information title" },
    { name: "description", type: "String", description: "Payment information description" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Transaction response object" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the payment succeeded, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>
