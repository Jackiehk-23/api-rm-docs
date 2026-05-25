---
title: "Direct Checkout — Mode: WechatPay Mini Program"
sidebar_label: "Mode: WechatPay Mini Program"

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
        "method": "WECHATPAY_CN",
        "userId": "oFGqK6w1kZyjDTtNAcOXBDHAa8CY"
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
      "method": "WECHATPAY_CN",
      "userId": "oFGqK6w1kZyjDTtNAcOXBDHAa8CY"
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

:::note
Before starting integration, contact [support@revenuemonster.my](mailto:support@revenuemonster.my) to bind your Mini Program App ID (小程序 App ID) to your account.
:::

Returns base64-encoded data to pass to the WeChat Pay Mini Program payment API.

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"MINI_PROGRAM\"." },
    { name: "method", type: "String", required: true, description: "Payment method. Set to \"WECHATPAY_CN\"." },
    { name: "userId", type: "String", required: true, description: "WeChat user Open ID." }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item", type: "Object", description: "Response item",
      children: [
      { name: "type", type: "String", description: "Checkout session type." },
      { name: "data", type: "String", description: "Base64-encoded data to pass to the mini program API." },
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code." },
      { name: "message", type: "String", description: "Error message." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
  ]}
/>

## Frontend Integration

:::note
Use base64 decode on the `data` parameter and pass the result to the mini program API.
:::

<CodeBlock language="javascript" filename="WeChat Mini Program">
{`var base64decoded = base64Decode(dataParameter);
var payload = JSON.parse(base64decoded);
wx.requestPayment({
  ...payload,
  success: function (res) { console.log("success", res); },
  fail: function (res) { console.log("fail", res); },
  complete: function (res) { console.log("complete", res); }
});`}
</CodeBlock>
