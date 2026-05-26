---
id: create-store
title: Create Store
sidebar_label: Create Store
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/store

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "merchantSettlementId": "string",
      "name": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postCode": "string",
      "city": "string",
      "state": "string",
      "country": "string",
      "countryCode": "string",
      "phoneNumber": "string",
      "geoLocation": {
        "latitude": 0,
        "longitude": 0
      }
    }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/store" \
      --header "Content-Type: application/json" \
      --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
      --header "X-Signature: sha256 X+IAMfyCdGTE4Or/jdYqBbwRvCpzNqv1lnaXUd+iWE37nCmxAT69x3PqdmcwyQnmO6BuHsqNy7znCFg3L9sjxg==" \
      --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
      --header "X-Timestamp: 1527407052" \
      --data "{
    	\"addressLine1\": \"gugusan melur\",
        \"city\": \"petaling jaya\",
        \"country\": \"malaysia.\",
        \"name\": \"yussuf\",
        \"countryCode\": \"60\",
        \"phoneNumber\": \"176473298\",
        \"postCode\": \"47810\",
        \"state\": \"selangor\"
    }"
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "id": "5237968049713769466",
        "name": "yussuf",
        "addressLine1": "GUGUSAN MELUR",
        "addressLine2": "",
        "postCode": "47810",
        "city": "PETALING JAYA",
        "state": "SELANGOR",
        "country": "MALAYSIA.",
        "countryCode": "60",
        "phoneNumber": "176473298",
        "geoLocation": {
          "latitude": 0,
          "longitude": 0
        },
        "status": "ACTIVE",
        "createdAt": "2018-05-27T17:17:12.196274Z",
        "updatedAt": "2018-05-27T17:17:12.196283Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/store"
  prod="/v3/store"
/>

:::note
To create a store under one merchant.
:::

### Request Parameters:

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "merchantSettlementId", type: "String", description: "Linkage with payment settlement account" },
    { name: "name", type: "String", required: true, description: "Store Name", example: "\"REVENUE MONSTER\"" },
    { name: "addressLine1", type: "String", required: true, description: "Store Address 1", example: "\"B-5-30, 5th Floor, Block Bougainvillea,\"" },
    { name: "addressLine2", type: "String", description: "Store Address 2", example: "\"PJU 6A, Lebuhraya SPRINT, 10 Boulevard,\"" },
    { name: "postCode", type: "String", required: true, description: "Postcode of store", example: "\"47400\"" },
    { name: "city", type: "String", required: true, description: "City of store", example: "\"Petaling Jaya\"" },
    { name: "state", type: "String", required: true, description: "State of store", example: "\"Selangor\"" },
    { name: "country", type: "String", required: true, description: "Country of store", example: "\"Malaysia\"" },
    { name: "countryCode", type: "String", required: true, description: "Country code of store contact number", example: "\"60\"" },
    { name: "phoneNumber", type: "String", required: true, description: "Phone number of store", example: "\"377334080\"" },
    { name: "geoLocation", type: "Object", description: "Geo Location (latitude and longitude) of store", example: "{\"latitude\": 3.1349857, \"longitude\": 101.6136659 }" }
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Array", description: "Array of store object",
      children: [
        { name: "id", type: "String", description: "Store ID", example: "\"6170506694335521334\"" },
        { name: "merchantSettlementId", type: "String", description: "Merchant Settlement ID", example: "\"6170506694335521334\"" },
        { name: "name", type: "String", description: "Store Name", example: "\"REVENUE MONSTER\"" },
        { name: "addressLine1", type: "String", description: "Store Address 1", example: "\"B-5-30, 5th Floor, Block Bougainvillea,\"" },
        { name: "addressLine2", type: "String", description: "Store Address 2", example: "\"PJU 6A, Lebuhraya SPRINT, 10 Boulevard,\"" },
        { name: "postCode", type: "String", description: "Postcode of store", example: "\"47400\"" },
        { name: "city", type: "String", description: "City of store", example: "\"Petaling Jaya\"" },
        { name: "state", type: "String", description: "State of store", example: "\"Selangor\"" },
        { name: "country", type: "String", description: "Country of store", example: "\"Malaysia\"" },
        { name: "countryCode", type: "String", description: "Country code of store contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of store", example: "\"377334080\"" },
        { name: "geoLocation", type: "Object", description: "Geo Location (latitude and longitude) of store", example: "{\"latitude\": 3.1349857, \"longitude\": 101.6136659 }" },
        { name: "status", type: "String", description: "Current status of store", example: "\"ACTIVE\"" },
        { name: "isDefault", type: "String", description: "Default store of merchant (first store created upon signup)", example: "true" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of store", example: "\"2018-02-12T08:53:13Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of store", example: "\"2018-02-12T08:53:13Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

