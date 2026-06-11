---
id: gourmet-card
title: Gourmet Card
sidebar_label: Gourmet Card
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/membership/verify

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "memberCardId": "string",
      "storeId": "string"
    }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/loyalty/chop-stamp/card/scan" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \
    --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
    --data-raw "{
    \"memberCardId\": \"28158443195878043074\"
     \"storeId\": \"4949529109748431621\",
    }"
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "id": "28158443195878043074",
        "transactionId": "1584431832399399267",
        "cardId": "1576632501406219093",
        "memberId": "1584431797984173748",
        "expiredAt": "2020-05-16T07:59:18Z",
        "createdAt": "2020-03-17T07:59:18Z",
        "updatedAt": "2020-03-17T07:59:18Z",
        "card": {
          "id": "1576632501406219093",
          "name": "九折美食卡",
          "lifetime": 60,
          "lifetimeType": "DAY",
          "amount": 10,
          "currency": "RMB",
          "discountType": "DISCOUNT",
          "discountValue": "1000",
          "minimumSpentAmount": 10,
          "wallet": "ALIPAY",
          "templateId": "20191218000000002154347000300178",
          "status": "ACTIVE",
          "image": "https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/image-1579510518825819467-1579510518.png",
          "icon": "https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/icon-1579505367845553007-1579505367.png",
          "createdAt": "2019-12-18T01:28:24Z",
          "updatedAt": "2019-12-18T01:28:24Z"
        }
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/membership/verify"
  prod="/v3/membership/verify"
/>

## What is this?

Verify and retrieve full details of an Alipay Gourmet Card (美食卡) using its `memberCardId`. Returns the card's discount details, expiry, and metadata.

## When to Use

Use this endpoint when:
- Verifying an Alipay Gourmet Card before applying the discount
- Looking up card details for a verified Alipay member

<Admonition type="note">
**For Alipay merchants only.**
</Admonition>

## How to Use

POST `memberCardId` and `storeId` to `/v3/membership/verify`. Use the returned details to apply the discount in your payment flow.

---

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "memberCardId", type: "String", description: "From Ali Pay member card id", example: "28158443195878043074" },
    { name: "storeId", type: "String", description: "Store ID", example: "\"4949529109748431621\"" }
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Transaction object",
      children: [
        { name: "id", type: "String", description: "Gourmet Card ID", example: "\"28158443195878043074\"" },
        { name: "transactionId", type: "String", description: "Transaction ID", example: "\"1584431832399399267\"" },
        { name: "cardId", type: "String", description: "Card ID", example: "\"1576632501406219093\"" },
        { name: "memberId", type: "String", description: "Member ID", example: "\"1584431797984173748\"" },
        { name: "expiredAt", type: "DateTime", description: "Expired date time", example: "\"2020-05-16T07:59:18Z\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time", example: "\"2020-03-17T07:59:18Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time", example: "\"2020-03-05T09:40:21Z\"" },
        { name: "card", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "id", type: "String", description: "Card ID", example: "\"1576632501406219093\"" },
        { name: "name", type: "String", description: "Card Name", example: "\"九折美食卡\"" },
        { name: "lifetime", type: "Integer", description: "Life Time", example: "60" },
        { name: "lifetimeType", type: "String", description: "Life Time Type", example: "\"DAY\"" },
        { name: "amount", type: "Integer", description: "Amount", example: "10" },
        { name: "currency", type: "String", description: "Currency type", example: "\"RMB\"" },
        { name: "discountType", type: "String", description: "Discount type", example: "\"DISCOUNT\"" },
        { name: "discountValue", type: "String", description: "Discount Value", example: "\"1000\"" },
        { name: "minimumSpentAmount", type: "Integer", description: "Minimum Spent Amount", example: "10" },
        { name: "wallet", type: "String", description: "Wallet : Alipay", example: "\"ALIPAY\"" },
        { name: "templateId", type: "String", description: "Template ID", example: "\"20191218000000002154347000300178\"" },
        { name: "status", type: "String", description: "Status", example: "\"ACTIVE\"" },
        { name: "image", type: "String", description: "Image", example: "\"https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/image-1579510518825819467-1579510518.png\"" },
        { name: "icon", type: "String", description: "Icon", example: "\"https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/icon-1579505367845553007-1579505367.png\"" },
        { name: "createdAt", type: "DateTime", description: "Create date time", example: "\"2019-12-18T01:28:24Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Update date time", example: "\"2019-12-18T01:28:24Z\"" }
      ]}
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

<a id="card" />


<!-- SPDX-License-Identifier: Apache-2.0 -->
