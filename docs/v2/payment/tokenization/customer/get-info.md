---
title: "Customer — Get Info"
sidebar_label: "Get Info"

api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/recurring-payment/{customer_id}" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Signature: sha256 {{signature}}" \
    --header "X-Nonce-Str: {{nonce}}" \
    --header "X-Timestamp: {{timestamp}}"
  response: |
    {
      "item": { "id": "...", "isActive": true },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="GET"
  sandbox="/v3/recurring-payment/{customer_id}"
  prod="/v3/recurring-payment/{customer_id}"
/>

## What is this?

Returns the customer record for a recurring or tokenized customer — including their masked card label, active status, and recurring schedule.

## When to Use

Use this endpoint when:
- Displaying a saved-card user's stored payment method in your UI
- Verifying a customer's `isActive` status before charging
- Inspecting a recurring schedule

<Admonition type="note">
Only available after the customer has successfully bound their card.
</Admonition>

## How to Use

### Step 1: Identify the Customer

Use the `customer_id` returned by [Create Tokenized Customer](../tokenized/create-customer.md) or [Create Recurring Customer](../recurring/create-customer.md).

### Step 2: Send the GET Request

GET `/v3/recurring-payment/{customer_id}`.

### Step 3: Read the Response

The `item` object contains the full customer record.

---

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
    { name: "item", type: "Object", description: "Response item",
      children: [
      { name: "id", type: "String", description: "Customer ID" },
      { name: "merchantId", type: "String", description: "Merchant ID" },
      { name: "storeId", type: "String", description: "Store ID" },
      { name: "label", type: "String", description: "Customer card: front six and last four digits" },
      { name: "email", type: "String", description: "Customer email" },
      { name: "countryCode", type: "String", description: "Customer country code" },
      { name: "phoneNumber", type: "String", description: "Customer phone number" },
      { name: "productName", type: "String", description: "Product name" },
      { name: "productDescription", type: "String", description: "Product description" },
      { name: "isActive", type: "Boolean", description: "Whether the token is active" },
      { name: "createdAt", type: "String", description: "Created date time" },
      { name: "updatedAt", type: "String", description: "Last updated date time" },
      { name: "clientKey", type: "String", description: "Internal usage only" },
      { name: "redirectUrl", type: "String", description: "Redirect URL" },
      { name: "notifyUrl", type: "String", description: "Notify URL" },
      { name: "paymentUrl", type: "String", description: "Card binding URL" },
      { name: "recurringPayment", type: "Object", description: "recurringPayment details",
        children: [
        { name: "amount", type: "Integer", description: "Recurring payment amount" },
        { name: "currency", type: "String", description: "Recurring payment currency" },
        { name: "recurringInterval", type: "String", description: "Recurring interval" },
        { name: "recurringTarget", type: "String", description: "Recurring target rules" },
        { name: "recurringRepetition", type: "Integer", description: "Number of repetitions" },
        ]
      },
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded, otherwise an error code." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed." },
      { name: "message", type: "String", description: "Error message if the request failed." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
