---
title: "Customer — Get Orders"
sidebar_label: "Get Orders"

api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/orders

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}/orders" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}"
  response: |
    {
      "items": [...],
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/recurring-payment/{customer_id}/orders"
  prod="/v3/recurring-payment/{customer_id}/orders"
/>

Returns the list of payment orders made for a recurring or tokenized customer.

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
    { name: "items", type: "Array", description: "List of recurring order records" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>

**Order record `items[*]`:**

<ParamTable
  title="Details"
  rows={[
    { name: "id", type: "String", description: "Recurring order ID" },
    { name: "merchantId", type: "String", description: "Merchant ID" },
    { name: "storeId", type: "String", description: "Store ID" },
    { name: "recurringCustomerId", type: "String", description: "Customer ID" },
    { name: "transactionId", type: "String", description: "Transaction ID" },
    { name: "createdAt", type: "String", description: "Order created date time" },
    { name: "updatedAt", type: "String", description: "Order last updated date time" },
    { name: "amount", type: "Integer", description: "Order payment amount" },
    { name: "currency", type: "String", description: "Order currency" }
  ]}
/>
