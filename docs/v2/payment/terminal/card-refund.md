---
title: "Terminal — Card Refund"
sidebar_label: "Card Refund"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay

  headers:
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json
  body:
    type: json
    example: |
      {
        "terminalId": "1582107209454501456",
        "type": "REFUND",
        "data": {
          "transactionId": "210215083727100327507906",
          "receiptType": 3,
          "reason": "Testing Refund",
          "email": "oska.ng@revenuemonster.my",
          "pin": "321123"
        }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --header "Content-Type: application/json" \
    --data '{
      "terminalId": "1582107209454501456",
      "type": "REFUND",
      "data": {
        "transactionId": "210215083727100327507906",
        "receiptType": 3,
        "reason": "Testing Refund",
        "email": "oska.ng@revenuemonster.my",
        "pin": "321123"
      }
    }'
  response: |
    {
      "code": "SUCCESS"
    }

---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/terminal/quickpay"
  prod="/v3/payment/terminal/quickpay"
/>

Sends a card refund event to the RM Terminal. The terminal will process the refund for the specified transaction.

:::note
For e-wallet refunds, use [Cancel Transaction — Refund](../cancel-transaction/refund-transaction.mdx) via the server API instead.
:::

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "terminalId", type: "String", required: true, description: "RM Terminal ID" },
    { name: "type", type: "String", required: true, description: "Event type. Set to \"REFUND\"." },
    { name: "data.transactionId", type: "String", required: true, description: "Transaction ID to refund" },
    { name: "data.receiptType", type: "Integer", description: "Receipt setting: 1 = Print both copies, 2 = Print customer copy only, 3 = Do not print" },
    { name: "data.reason", type: "String", description: "Reason for the refund" },
    { name: "data.email", type: "String", required: true, description: "Email address matching the refund PIN" },
    { name: "data.pin", type: "String", required: true, description: "Refund PIN" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Transaction response object" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the event was sent to terminal, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>
