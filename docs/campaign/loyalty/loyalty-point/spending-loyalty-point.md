---
id: spending-loyalty-point
title: Spending Loyalty Point
sidebar_label: Spending Loyalty Point
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/spending-reward

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "currencyType": "MYR",
      "amount": 100,
      "type": "PHONENUMBER",
      "countryCode": "60",
      "phoneNumber": "176473298"
    }

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    There is no example response provided.
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/loyalty/spending-reward"
  prod="/v3/loyalty/spending-reward"
/>

## What is this?

Award spending-loyalty points to a member based on a sales `amount`. Uses the merchant's loyalty point rules to compute the reward.

## When to Use

Use this endpoint when:
- Awarding points proportional to spend after a non-auto-give payment
- Implementing manual loyalty-point awarding for non-WeChat wallets

<Admonition type="caution">
**Only WeChat Pay + WeChat OA loyalty** program supports auto-give points during payment. All other wallets **DO NOT** support auto-give points. Use the merchant app / terminal app or this endpoint to award points manually for each payment.
</Admonition>

## How to Use

POST to `/v3/loyalty/spending-reward` with `currencyType`, `amount`, and the member identifier.

---

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "currencyType", type: "String", required: true, description: "Currently MYR only", example: "MYR" },
    { name: "amount", type: "Integer", required: true, description: "Loyalty point given to customers.", example: "100" },
    { name: "type", type: "String", required: true, description: "\"ID\" ,\"PHONENUMBER\" or \"QRCODE\"", example: "Use phone number , ID or QR Code to give loyalty point(s)." },
    { name: "memberId", type: "String", description: "Member ID if type \"ID\" being provided.", example: "\"2777058682717858418\"" },
    { name: "countryCode", type: "String", description: "Country code if type \"PHONENUMBER\" being provided.", example: "\"60\"" },
    { name: "phoneNumber", type: "String", description: "Phone number if type \"PHONENUMBER\" being provided.", example: "\"172826990\"" }
  ]}
/>

<CodeBlock language="json" filename="Example Request Phone Number">
{`curl --location --request POST "{{open_base_path}}/v3/loyalty/reward" \\
  --header "Content-Type: application/json" \\
  --header "Authorization: Bearer {{clientToken}}" \\
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \\
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \\
  --header "X-Timestamp: 1528450585" \\
  --data "{
   \\"currencyType\\": \\"MYR\\",
   \\"amount\\": 100,
   \\"type\\": \\"PHONENUMBER\\",
   \\"countryCode\\": \\"60\\",
   \\"phoneNumber\\": \\"176473298\\"
}"`}
</CodeBlock>

<CodeBlock language="json" filename="Example Request QR Code">
{`curl --location --request POST "{{open_base_path}}/v3/loyalty/reward" \\
  --header "Content-Type: application/json" \\
  --header "Authorization: Bearer {{clientToken}}" \\
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \\
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \\
  --header "X-Timestamp: 1528450585" \\
  --data "{
   \\"currencyType\\": \\"MYR\\",
   \\"amount\\": 100,
   \\"type\\": \\"QRCODE\\",
}"`}
</CodeBlock>

<CodeBlock language="json" filename="Example Request Member ID">
{`curl --location --request POST "https://sb-open.revenuemonster.my/v3/loyalty/reward" \\
  --header "Content-Type: application/json" \\
  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \\
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \\
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \\
  --header "X-Timestamp: 1528450585" \\
  --data "{
    \\"currencyType\\": \\"MYR\\",
    \\"amount\\": 100,
    \\"type\\": \\"ID\\",
    \\"memberId\\": \\"2777058682717858418\\",
}"`}
</CodeBlock>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<CodeBlock language="json" filename="Example Response (PhoneNumber & Member ID)">
{`{
  "code": "SUCCESS"
}`}
</CodeBlock>

<CodeBlock language="json" filename="Example Response (QR Code)">
{`{
  "item": {
    "id": "83f575034d45f776b8e1fed1a26e2fee",
    "qrCodeUrl": "https://dev-rm-api.ap.ngrok.io/qr/4118165203679668885/loyalty/d3008719d04cab91c53eb0b5d8cc4ee6"
  },
  "code": "SUCCESS"
}`}
</CodeBlock>


<!-- SPDX-License-Identifier: Apache-2.0 -->
