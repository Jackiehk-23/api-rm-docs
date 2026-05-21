---
title: "Terminal — Quick Pay"
sidebar_label: "Quick Pay"

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
        "terminalId": "1554193032595276913",
        "type": "E-WALLET",
        "receiptType": 3,
        "cameraType": "FRONT",
        "order": {
          "amount": 10,
          "currencyType": "MYR",
          "id": "387153091916665362292147",
          "title": "title"
        }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --header "Content-Type: application/json" \
    --data '{
      "terminalId": "1554193032595276913",
      "type": "E-WALLET",
      "receiptType": 3,
      "cameraType": "FRONT",
      "order": {
        "amount": 10,
        "currencyType": "MYR",
        "id": "387153091916665362292147",
        "title": "title"
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

:::tip
If your hardware device has its own scanner to scan payment QR codes, use [Standard Quick Pay](../quick-pay/standard.md) instead for better experience and performance.
:::

Sends an e-wallet Quick Pay event to the RM Terminal. The terminal will open its camera to scan the customer's QR code.

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "terminalId", type: "String", required: true, description: "RM Terminal ID" },
    { name: "type", type: "String", required: true, description: "Payment type. Set to \"E-WALLET\"." },
    { name: "receiptType", type: "Integer", required: true, description: "Receipt setting: 1 = Print both merchant and customer copy, 2 = Print customer copy only, 3 = Do not print" },
    { name: "cameraType", type: "String", required: true, description: "Use \"FRONT\" or \"BACK\" camera to scan QR code" },
    { name: "order.id", type: "String", required: true, description: "Order ID" },
    { name: "order.title", type: "String", required: true, description: "Order title" },
    { name: "order.currencyType", type: "String", required: true, description: "Currency type (currently supported MYR only)" },
    { name: "order.amount", type: "Integer", required: true, description: "Order amount" },
    { name: "order.detail", type: "String", description: "Order detail" },
    { name: "order.additionalData", type: "String", description: "Order additional data" }
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
