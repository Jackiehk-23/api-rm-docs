---
id: cancel-spending-loyalty-point
title: Cancel Spending Loyalty Point
sidebar_label: Cancel Spending Loyalty Point
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/spending-reward/cancel

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "id": "dee13d3470f2dd43466c252cfc67f967"
    }

examples:
  request: |
    curl --location --request POST "{{open_base_path}}/v3/loyalty/spending-reward/cancel" \
    --header "Content-Type: application/json"\
    --header "Authorization: Bearer {{clientToken}}" \
    --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585"\
    --data-raw "{
      \"id\":\"dee13d3470f2dd43466c252cfc67f967\"
    
    }"
  body: |
    There is no example body request.
  response: |
    {
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/loyalty/spending-reward/cancel"
  prod="/v3/loyalty/spending-reward/cancel"
/>

## What is this?

Cancel a previously issued spending-loyalty-point reward by its `id`.

## When to Use

Use this endpoint when:
- A spending reward was issued in error
- Reversing rewards on a refunded transaction

## How to Use

POST to `/v3/loyalty/spending-reward/cancel` with the `id` from the spending-loyalty-point response.

---

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "id", type: "String", required: true, description: "Get the id from spending loyalty point api", example: "\"dee13d3470f2dd43466c252cfc67f967\" ( from Respond QR code )" }
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>


<!-- SPDX-License-Identifier: Apache-2.0 -->
