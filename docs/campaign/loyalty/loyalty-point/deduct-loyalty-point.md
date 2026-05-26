---
id: deduct-loyalty-point
title: Deduct Loyalty Point
sidebar_label: Deduct Loyalty Point

api:
  method: DELETE
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/reward

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json
  body:
    type: json
    example: |
      {
        "point": 100,
        "memberId": "1231231312"
      }

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="DELETE"
  sandbox="/v3/loyalty/reward"
  prod="/v3/loyalty/reward"
/>

:::note
To deduct loyalty point(s) to customers using phone number or member ID.
:::

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "point", type: "Integer", required: true, description: "Loyalty point given to customers.", example: "100" },
    { name: "memberId", type: "String", description: "Member ID if type \"ID\" being provided.", example: "\"2777058682717858418\"" }
  ]}
/>

<CodeBlock language="json" filename="Example Request Phone Number">
{`curl --location --request DELETE "https://sb-open.revenuemonster.my/v3/loyalty/reward" \\
  --header "Content-Type: application/json" \\
  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \\
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \\
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \\
  --header "X-Timestamp: 1528450585" \\
  --data "{
   \\"point\\": 100,
   \\"memberId\\": \\"1231231312\\"
}"`}
</CodeBlock>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<hr/>