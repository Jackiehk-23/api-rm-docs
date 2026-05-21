---
title: "Terminal — Card Settlement"
sidebar_label: "Card Settlement"

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
        "type": "SETTLEMENT",
        "data": { "receiptType": 3 }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --header "Content-Type: application/json" \
    --data '{
      "terminalId": "1554193032595276913",
      "type": "SETTLEMENT",
      "data": { "receiptType": 3 }
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

Sends a card settlement event to the RM Terminal. The terminal will settle all pending card transactions in its batch.

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "terminalId", type: "String", required: true, description: "RM Terminal ID" },
    { name: "type", type: "String", required: true, description: "Event type. Set to \"SETTLEMENT\"." },
    { name: "data.receiptType", type: "Integer", description: "Receipt setting: 1 = Print both copies, 2 = Print customer copy only, 3 = Do not print" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "code", type: "String", description: "\"SUCCESS\" if the event was sent to terminal, otherwise an error code." },
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." },
    { name: "summary.batchNo", type: "String", description: "Terminal settlement sequence number" },
    { name: "summary.currencyType", type: "String", description: "Settlement currency type (currently supported MYR only)" },
    { name: "summary.noOfTransactions", type: "Integer", description: "Count of settled transactions" },
    { name: "summary.settlementAt", type: "String", description: "Date and time of settlement" },
    { name: "summary.totalSalesAmount", type: "Integer", description: "Total sales amount in cents" },
    { name: "transactions[*].amount", type: "Integer", description: "Transaction amount in cents" },
    { name: "transactions[*].currencyType", type: "Integer", description: "Transaction currency type" },
    { name: "transactions[*].transactionAt", type: "String", description: "Transaction date and time" },
    { name: "transactions[*].transactionId", type: "String", description: "Transaction ID" },
    { name: "transactions[*].type", type: "String", description: "Transaction type" }
  ]}
/>
