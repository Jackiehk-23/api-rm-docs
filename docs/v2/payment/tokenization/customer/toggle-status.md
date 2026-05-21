---
title: "Customer — Toggle Status"
sidebar_label: "Toggle Status"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/toggle

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/toggle" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}"
  response: |
    {
      "item": { "id": "...", "isActive": false },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/recurring-payment/{customer_id}/toggle"
  prod="/v3/recurring-payment/{customer_id}/toggle"
/>

Activates or deactivates a customer's token. Toggling to inactive stops all future recurring charges for that customer.

:::note
Only available after the customer has successfully bound their card.
:::

## Request Parameters

<ParamTable
  title="Path Parameters"
  rows={[
    { name: "customer_id", type: "String", required: true, description: "Customer ID returned from Create Recurring Customer or Create Tokenized Customer" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item.id", type: "String", description: "Customer ID" },
    { name: "item.merchantId", type: "String", description: "Merchant ID" },
    { name: "item.storeId", type: "String", description: "Store ID" },
    { name: "item.label", type: "String", description: "Customer card: front six and last four digits" },
    { name: "item.email", type: "String", description: "Customer email" },
    { name: "item.countryCode", type: "String", description: "Customer country code" },
    { name: "item.phoneNumber", type: "String", description: "Customer phone number" },
    { name: "item.productName", type: "String", description: "Product name" },
    { name: "item.productDescription", type: "String", description: "Product description" },
    { name: "item.isActive", type: "Boolean", description: "Whether the token is active after toggle" },
    { name: "item.createdAt", type: "String", description: "Created date time" },
    { name: "item.updatedAt", type: "String", description: "Last updated date time" },
    { name: "item.clientKey", type: "String", description: "Internal usage only" },
    { name: "item.redirectUrl", type: "String", description: "Redirect URL" },
    { name: "item.notifyUrl", type: "String", description: "Notify URL" },
    { name: "item.paymentUrl", type: "String", description: "Card binding URL" },
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
