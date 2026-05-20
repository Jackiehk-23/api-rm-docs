---
id: rewards-detail
title: Get Rewards
sidebar_label: Get Rewards
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/me/rewards?countryCode=60&phoneNumber=187824152

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  query:
    countryCode: 60
    phoneNumber: 187824152

examples:
  request: |
    curl --location --request GET "{{open_base_path}}/v3/loyalty/me/rewards?countryCode=60&phoneNumber=187824152" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
  body: |
    There is no example body request.
  response: |
    {
      "items": [
        {
          "id": "1575971661443933008",
          "label": "Prudential RM 5 Cash Vouchers ( BoostPulse )",
          "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/00c5184b36484d865372c1841f4cc4ce.jpeg",
          "point": 1,
          "payload": {
            "tnc": ["T&C"],
            "contactInfo": {
              "email": "",
              "phoneNumber": ""
            }
          },
          "isShipping": false,
          "quantity": 49998,
          "balanceQuantity": 49991,
          "usedQuantity": 2,
          "redeemQuantity": 7,
          "isEnabled": true,
          "limitPerUser": 1,
          "status": "COMPLETED",
          "isCombo": false,
          "type": "",
          "createdAt": "2019-12-10T09:54:21Z",
          "updatedAt": "2019-12-10T09:55:05Z",
          "expiredAt": "2020-12-05T15:59:59Z"
        }
      ],
      "code": "SUCCESS",
      "meta": {}
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/loyalty/me/rewards?countryCode=60&phoneNumber=187824152"
  prod="/v3/loyalty/me/rewards?countryCode=60&phoneNumber=187824152"
/>



import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";


:::noteya,,

- Using Query String to **Get User Reward** by input the **country code** and **phone number**
- Using Query String to set a limit: ~/?limit=< limit >
- To implement a pagination cursor, you may use query string: ~/?cursor= < cursor >
- Example :
  `https://open.revenuemonster.my/v3/loyalty/me/reward?countryCode=60&phoneNumber=187824152&limit=100&cursor=asdas`

:::

### Request Parameters

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "items", type: "Array", description: "Rewards object", example: "(Refer to explanation below)" },
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" },
    { name: "meta", type: "Object", description: "Inside meta have count key example \"count\": 2", example: "2" }
  ]}
/>


<br />

<a id="items" />

<strong>Rewards object <code>item</code>:</strong>

<ParamTable
  title="Details"
  rows={[
    { name: "id", type: "String", description: "Reward Id", example: "\"1575971661443933008\"" },
    { name: "label", type: "String", description: "Reward Label", example: "\"Prudential RM 5 Cash Vouchers ( BoostPulse )\"" },
    { name: "imageUrl", type: "String", description: "Reward Image", example: "\"\"" },
    { name: "point", type: "Integer", description: "Reward Point", example: "1" },
    { name: "payload", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "tnc", type: "Array", example: "[\"T&C\"]" },
        { name: "contactInfo", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "email", type: "String", description: "Email", example: "\"\"" },
        { name: "phoneNumber", type: "String", description: "Phone Number", example: "\"\"" }
      ]}
      ]},
    { name: "isShipping", type: "Boolean", description: "Reward shipping", example: "false" },
    { name: "quantity", type: "Integer", description: "Reward Quantity", example: "49998" },
    { name: "balanceQuantity", type: "Integer", description: "Reward Balance Quantity", example: "49991" },
    { name: "usedQuantity", type: "Integer", description: "Reward Used Quantity", example: "2" },
    { name: "redeemQuantity", type: "String", description: "Reward Redeem Quantity", example: "7" },
    { name: "isEnabled", type: "Boolean", description: "Enable Reward", example: "true" },
    { name: "limitPerUser", type: "Integer", description: "Set Limit per User use", example: "1" },
    { name: "status", type: "String", description: "Reward status have (\"COMPLETED\", \"INPROGRESS\", \"FAILED\", \"EXPIRED\")", example: "\"COMPLETED\"" },
    { name: "isCombo", type: "Boolean", description: "Reward is Combo", example: "false" },
    { name: "type", type: "String", description: "Reward type have Combo or Batch", example: "\"\"" },
    { name: "createdAt", type: "DateTime", description: "Create date time", example: "\"2020-11-18T06:43:19Z\"" },
    { name: "updatedAt", type: "DateTime", description: "Last update date time", example: "\"2020-11-25T05:58:56Z\"" },
    { name: "expiredAt", type: "DateTime", description: "Expired date time", example: "\"2018-10-19T03:39:47Z\"" }
  ]}
/>


<br />
<a id="payload" />

<br />
<a id="contactinfo" />

<br />
