---
id: merchant-subscriptions
title: Get Merchant Subscriptions
sidebar_label: Get Merchant Subscriptions
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/merchant/subscriptions

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: "{}"

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "item": [
        {
          "id": 1001,
          "gracePeriod": 90,
          "expiryAt": "2018-04-28T06:36:08Z",
          "terminateAt": "2018-07-27T23:59:59Z",
          "status": "ACTIVE"
        },
        {
          "id": 1000,
          "gracePeriod": 90,
          "expiryAt": "2018-04-25T02:51:10Z",
          "terminateAt": "2018-07-24T23:59:59Z",
          "status": "ACTIVE"
        },
        {
          "id": 1003,
          "gracePeriod": 90,
          "expiryAt": "2018-04-29T05:04:30Z",
          "terminateAt": "2018-07-28T23:59:59Z",
          "status": "ACTIVE"
        }
      ],
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/merchant/subscriptions"
  prod="/v3/merchant/subscriptions"
/>





:::note
To query for merchant product subscription details.
:::

### Request Parameters:

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "id", type: "Integer", description: "ID is to differentiate which subscription:  1000 : Loyalty & Voucher  1001 : Payment  1002 : Market Place  1003 : Social Media", example: "1001" },
    { name: "gracePeriod", type: "Integer", description: "merchant will terminate after 3 months", example: "90" },
    { name: "expiryAt", type: "DateTime", description: "Expiry date time of merchant", example: "\"2018-04-28T06:36:08Z\"" },
    { name: "terminateAt", type: "DateTime", description: "Terminate date time of merchant", example: "\"2018-07-27T23:59:59Z\"" },
    { name: "status", type: "String", description: "\"ACTIVE\" , \"REVIEWING\" , \"SUSPEND\" , \"PENDING\" , \"SUSPEND\"", example: "\"ACTIVE\"" }
  ]}
/>

