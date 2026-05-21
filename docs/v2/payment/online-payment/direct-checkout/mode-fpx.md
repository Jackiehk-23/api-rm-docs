---
title: "Direct Checkout — Mode: FPX"
sidebar_label: "Mode: FPX"

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
        "checkoutId": "1687166508263303064",
        "method": "FPX_MY",
        "type": "URL",
        "fpx": { "bankCode": "TEST0021" }
      }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/online" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer {{access_token}}" \
    --header "X-Timestamp: {{timestamp}}" \
    --data '{
      "checkoutId": "1687166508263303064",
      "method": "FPX_MY",
      "type": "URL",
      "fpx": { "bankCode": "TEST0021" }
    }'
  response: |
    {
      "item": { "type": "URL", "url": "https://..." },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/payment/online"
  prod="/v3/payment/online"
/>

Returns an FPX payment redirect URL. Use the FPX bank list endpoint to get available bank codes.

## Get FPX Bank List

**Method:** <HttpMethodBadge method="GET" /> `https://sb-open.revenuemonster.my/v3/payment/fpx-bank`

| Code | Name |
|---|---|
| ABB0233:B2C | Affin Bank |
| ABMB0212:B2C | Alliance Bank (Personal) |
| AGRO01:B2C | AGRONet |
| AMBB0209:B2C | AmBank |
| BCBB0235:B2C | CIMB Bank |
| BIMB0340:B2C | Bank Islam |
| BKRM0602:B2C | Bank Rakyat |
| BMMB0341:B2C | Bank Muamalat |
| BSN0601:B2C | Bank Simpanan Nasional |
| HLB0224:B2C | Hong Leong Bank |
| HSBC0223:B2C | HSBC |
| KFH0346:B2C | Kuwait Finance House |
| MB2U0227:B2C | Maybank2U |
| MBB0228:B2C | Maybank2E |
| OCBC0229:B2C | OCBC |
| PBB0233:B2C | Public Bank |
| RHB0218:B2C | RHB Bank |
| SCB0216:B2C | Standard Chartered Bank |
| UOB0226:B2C | United Oversea Bank |

---

## Request Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "checkoutId", type: "String", required: true, description: "Checkout ID from the Hosted Payment Checkout response." },
    { name: "type", type: "String", required: true, description: "Checkout type. Set to \"URL\"." },
    { name: "method", type: "String", required: true, description: "Payment method. Set to \"FPX_MY\"." },
    { name: "fpx.bankCode", type: "String", required: true, description: "FPX bank code from the table above." }
  ]}
/>

## Response Parameters

<ParamTable
  title="Details"
  rows={[
    { name: "item.type", type: "String", description: "Checkout session type." },
    { name: "item.url", type: "String", description: "FPX payment URL to redirect the customer to." },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded." },
    { name: "error.code", type: "String", description: "Error code." },
    { name: "error.message", type: "String", description: "Error message." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." }
  ]}
/>
