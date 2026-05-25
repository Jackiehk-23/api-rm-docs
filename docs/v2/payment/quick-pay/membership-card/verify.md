---
title: "Verify Membership Card"
sidebar_label: "Verify Membership Card"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/quickpay

  headers:
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json
  body:
    type: json
    example: |
      {
        "memberCardId": "28158443195878043074",
        "storeId": "4949529109748431621"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/quickpay" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "memberCardId": "28158443195878043074",
      "storeId": "4949529109748431621"
    }'
  response: |
    {
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/quickpay"
  prod="/v3/payment/quickpay"
/>

:::info
Currently available membership card: Alipay Gourmet Card (马来西亚美食优惠卡).

Call this endpoint first to verify the membership card before processing payment.
:::

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "memberCardId", type: "String", required: true, description: "Alipay's Member Card ID" },
    { name: "storeId", type: "String", required: true, description: "Store ID" }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "code", type: "String", description: "\"SUCCESS\" if the verification succeeded, otherwise an error code" },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed" },
      { name: "message", type: "String", description: "Error message if the request failed" },
      { name: "debug", type: "String", description: "Debug message (sandbox only)" },
      ]
    },
  ]}
/>
