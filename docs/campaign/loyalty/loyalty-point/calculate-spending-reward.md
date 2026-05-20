---
id: calculate-spending-reward
title: Calculate Spending Reward
sidebar_label: Calculate Spending Reward
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/spending-reward/calculate

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "currencyType": "MYR",
      "amount": 300
    }

examples:
  request: |
    curl --location --request GET "{{open_base_path}}/v3/loyalty/spending-reward/calculate" \
      --header "Content-Type: application/json" \
      --header "Authorization: Bearer {{clientToken}}" \
      --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
      --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
      --header "X-Timestamp: 1528450585" \
      --data "{
        \"currencyType\": \"MYR\",
        \"amount\": 300
    
    }"
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "point": 3
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/loyalty/spending-reward/calculate"
  prod="/v3/loyalty/spending-reward/calculate"
/>



import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";


:::note
Use amount sales to Calculate Spending Reward points
:::

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "currencyType", type: "String", description: "Currently MYR only", example: "MYR" },
    { name: "amount", type: "Integer", description: "Amount Sales", example: "300" }
  ]}
/>


### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Point object",
      children: [
        { name: "point", type: "Integer", description: "Loyalty point given to customers.", example: "3" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>


<br/>

<a id="item" />

Currency notation (currently only support MYR)
