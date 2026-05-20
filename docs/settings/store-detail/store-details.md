---
id: store-details
title: Get All Stores
sidebar_label: Get All Stores
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/stores

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
      "items": [
        {
          "id": "1662168764176583360",
          "name": "Test Store",
          "addressLine1": "20, JALAN JASA 38, TAMAN MUTIARA RINI",
          "addressLine2": "",
          "postCode": "81230",
          "city": "BALING",
          "state": "KEDAH",
          "country": "MALAYSIA",
          "countryCode": "60",
          "phoneNumber": "12354645547",
          "geoLocation": {
            "latitude": 0,
            "longitude": 0
          },
          "status": "ACTIVE",
          "createdAt": "2018-05-16T08:05:02Z",
          "updatedAt": "2018-05-16T08:05:02Z"
        },
        {
          "id": "526742853846521323",
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
          "createdAt": "2018-05-27T10:12:25Z",
          "updatedAt": "2018-05-27T10:12:25Z"
        },
        {
          "id": "6883264812332703106",
          "name": "XXX",
          "addressLine1": "",
          "addressLine2": "",
          "postCode": "",
          "city": "",
          "state": "",
          "country": "",
          "countryCode": "",
          "phoneNumber": "",
          "geoLocation": {
            "latitude": 0,
            "longitude": 0
          },
          "status": "ACTIVE",
          "createdAt": "2018-05-14T09:26:23Z",
          "updatedAt": "2018-05-14T09:26:23Z"
        }
      ],
      "code": "SUCCESS",
      "meta": {
        "count": 3,
        "total": 3
      }
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/stores"
  prod="/v3/stores"
/>

Get Store By ID


import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";


:::note

- To query for ALL stores under a merchant.

- To implement a pagination cursor, you may use query string: ~/?cursor= < cursor >\_

:::

### Request Parameters:

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "items", type: "Array", description: "Array of store object",
      children: [
        { name: "id", type: "String", description: "Store ID", example: "\"6170506694335521334\"" },
        { name: "name", type: "String", description: "Store Name", example: "\"REVENUE MONSTER\"" },
        { name: "addressLine1", type: "String", description: "Store Address 1", example: "\"B-5-30, 5th Floor, Block Bougainvillea,\"" },
        { name: "addressLine2", type: "String", description: "Store Address 2", example: "\"PJU 6A, Lebuhraya SPRINT, 10 Boulevard,\"" },
        { name: "postCode", type: "String", description: "Postcode of store", example: "\"47400\"" },
        { name: "city", type: "String", description: "City of store", example: "\"Petaling Jaya\"" },
        { name: "state", type: "String", description: "State of store", example: "\"Selangor\"" },
        { name: "country", type: "String", description: "Country of store", example: "\"Malaysia\"" },
        { name: "countryCode", type: "String", description: "Country code of store contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of store", example: "\"377334080\"" },
        { name: "geoLocation", type: "Object", description: "Geo Location (latitude and longitude) of store", example: "{\"Lat\": 3.1349857, \"Lng\": 101.6136659 }" },
        { name: "status", type: "String", description: "Current status of store", example: "\"ACTIVE\"" },
        { name: "isDefault", type: "String", description: "Default store of merchant (first store created upon signup)", example: "true" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of store", example: "\"2018-02-12T08:53:13Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of store", example: "\"2018-02-12T08:53:13Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" },
    { name: "meta", type: "Object", description: "Database object",
      children: [
        { name: "count", type: "Integer", description: "Current page record", example: "1" },
        { name: "total", type: "Integer", description: "Total record in database", example: "1" },
        { name: "cursor", type: "Integer", description: "Optional, if pagination exists.", example: "1" }
      ]}
  ]}
/>


<br/>
<a id="items" />

<br/>
<a id="meta" />

