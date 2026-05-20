---
id: get-store-by-id
title: Get Store By ID
sidebar_label: Get Store By ID
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/store/{storeId}

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {}

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "id": "1553067214325776225",
        "name": "Starbucks",
        "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
        "addressLine1": "Berjaya Times Square,  Imbi",
        "addressLine2": "",
        "postCode": "55100",
        "city": "Kuala Lumpur",
        "state": "W.P. Kuala Lumpur",
        "country": "Malaysia",
        "countryCode": "60",
        "phoneNumber": "1234567890",
        "geoLocation": {
          "latitude": 3.1421984,
          "longitude": 101.71055120000005
        },
        "status": "ACTIVE",
        "createdAt": "2019-03-20T07:33:34Z",
        "updatedAt": "2019-03-20T07:33:34Z"
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/store/{storeId}"
  prod="/v3/store/{storeId}"
/>



import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";


:::note
Use `Store ID` to check a particular store details.
:::

### Request Parameters:

:::note

- The URL is consists of `[base_URL]`/v3/store/`[store_id]`

- Pass in `Store ID` in your query

:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Array", description: "Array of store object",
      children: [
        { name: "id", type: "String", description: "Store ID", example: "\"6170506694335521334\"" },
        { name: "merchantSettlementId", type: "String", description: "Linkage with payment settlement account" },
        { name: "name", type: "String", description: "Store Name", example: "\"REVENUE MONSTER\"" },
        { name: "imageUrl", type: "String", description: "Image of your Store", example: "\"https://storage.googleapis.com/rm-prod-asset/img/store.png\"" },
        { name: "addressLine1", type: "String", description: "Store Address 1", example: "\"B-5-30, 5th Floor, Block Bougainvillea,\"" },
        { name: "addressLine2", type: "String", description: "Store Address 2", example: "\"PJU 6A, Lebuhraya SPRINT, 10 Boulevard,\"" },
        { name: "postCode", type: "String", description: "Postcode of store", example: "\"55100\"" },
        { name: "city", type: "String", description: "City of store", example: "\"Petaling Jaya\"" },
        { name: "state", type: "String", description: "State of store", example: "\"Selangor\"" },
        { name: "country", type: "String", description: "Country of store", example: "\"Malaysia\"" },
        { name: "countryCode", type: "String", description: "Country code of store contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of store", example: "\"377334080\"" },
        { name: "geoLocation", type: "Object", description: "Geo Location (latitude and longitude) of store", example: "{\"Lat\": 3.1349857, \"Lng\": 101.6136659 }" },
        { name: "status", type: "String", description: "Current status of store", example: "\"ACTIVE\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of store", example: "\"2018-02-12T08:53:13Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of store", example: "\"2018-02-12T08:53:13Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>


<br/>
<a id="item" />

