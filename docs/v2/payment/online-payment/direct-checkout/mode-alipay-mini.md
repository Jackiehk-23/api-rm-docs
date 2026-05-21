---
title: "Direct Checkout — Mode: Alipay Mini Program"
sidebar_label: "Mode: Alipay Mini Program"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/online

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Timestamp: {{timestamp}}
  body:
    type: json
    example: |
      {
        "checkoutId": "1582438693268947023",
        "type": "MINI_PROGRAM",
        "method": "ALIPAY_CN"
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "checkoutId": "1582438693268947023",
      "type": "MINI_PROGRAM",
      "method": "ALIPAY_CN"
    }'
  response: |
    {
      "item": { "type": "MINI_PROGRAM", "data": "base64encodedstring" },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/online"
  prod="/v3/payment/online"
/>

Returns base64-encoded data to pass to the Alipay Mini Program payment API.

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"MINI_PROGRAM\"." },
    { name: "method", type: "String", required: true, description: "Payment method. Set to \"ALIPAY_CN\"." }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item.type", type: "String", description: "Checkout session type." },
    { name: "item.data", type: "String", description: "Base64-encoded data to pass to the mini program API." },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded." },
    { name: "error.code", type: "String", description: "Error code." },
    { name: "error.message", type: "String", description: "Error message." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>

## Frontend Integration

:::note
Use base64 decode on the `data` parameter and pass the result to the mini program API.
:::

<CodeBlock language="javascript" filename="Alipay Mini Program">
{`my.tradePay({
  orderStr: base64Decode(dataParameter),
  success: (res) => { console.log("success", res); },
  fail: (res) => { console.log("error", res); }
});`}
</CodeBlock>
