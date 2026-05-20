---
id: get-loyalty-balances
title: Get Loyalty Balances
sidebar_label: Get Loyalty Balances
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/balances

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/loyalty/balances" \
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
          "id": "1643256166719420340",
          "store": {
            "id": "1601912947341252990",
            "merchantSettlementId": "1596124535165747709",
            "name": "Mountain Food - Aeon Mall Shah Alam",
            "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
            "addressLine1": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
            "addressLine2": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
            "postCode": "40100",
            "city": "Shah Alam",
            "state": "Selangor",
            "country": "Malaysia",
            "countryCode": "60",
            "phoneNumber": "1123621544",
            "geoLocation": {
              "latitude": 3.0753809,
              "longitude": 101.5502306
            },
            "status": "ACTIVE",
            "createdAt": "2021-03-24T07:58:02Z",
            "updatedAt": "2021-11-12T02:56:02Z"
          },
          "transactionId": "",
          "method": "LOYALTY_CREDIT",
          "type": "QUICK_PAY",
          "order": {
            "id": "220127120247232716",
            "title": "In store payment",
            "detail": "[Merchant app] Pay to Mountain Food - Aeon Mall Shah Alam with loyalty balance",
            "amount": 100
          },
          "terminalId": "",
          "currencyType": "MYR",
          "transactionAt": "2022-01-27T04:02:46Z",
          "status": "SUCCESS",
          "createdAt": "2022-01-27T04:02:46Z",
          "updatedAt": "2022-01-27T04:02:46Z"
        },
        {
          "id": "1643256151642900798",
          "store": {
            "id": "1601912947341252990",
            "merchantSettlementId": "1596124535165747709",
            "name": "Mountain Food - Aeon Mall Shah Alam",
            "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
            "addressLine1": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
            "addressLine2": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
            "postCode": "40100",
            "city": "Shah Alam",
            "state": "Selangor",
            "country": "Malaysia",
            "countryCode": "60",
            "phoneNumber": "1123621544",
            "geoLocation": {
              "latitude": 3.0753809,
              "longitude": 101.5502306
            },
            "status": "ACTIVE",
            "createdAt": "2021-03-24T07:58:02Z",
            "updatedAt": "2021-11-12T02:56:02Z"
          },
          "transactionId": "",
          "method": "LOYALTY_CREDIT",
          "type": "QUICK_PAY",
          "order": {
            "id": "220127120233232716",
            "title": "In store payment",
            "detail": "[Merchant app] Pay to Mountain Food - Aeon Mall Shah Alam with loyalty balance",
            "amount": 100
          },
          "terminalId": "",
          "currencyType": "MYR",
          "transactionAt": "2022-01-27T04:02:31Z",
          "status": "SUCCESS",
          "createdAt": "2022-01-27T04:02:31Z",
          "updatedAt": "2022-01-27T04:02:31Z"
        }
      ],
      "code": "SUCCESS",
      "meta": {
        "count": 50,
        "cursor": "eyJzaWduYXR1cmUiOiJVUWdGcTdXekI3Q1JtYUhGQmRUVHJmVVFJeGc9IiwibmV4dCI6IkVoNEtFa3h2ZVdGc2RIbFVjbUZ1YzJGamRHbHZiaENDN04zUzlvRzJzQlkifQ"
      }
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/loyalty/balances"
  prod="/v3/loyalty/balances"
/>



import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";


:::note
Get loyalty balances
:::

### Request Parameters

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "items", type: "Array", example: "(Refer to explanation below)" },
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" },
    { name: "meta", type: "Object", description: "Inside meta have countand cursor", example: "{ \"count\": 2 , \"cursor\":\"\"}" }
  ]}
/>


<br />

<a id="items" />

<ParamTable
  title="Details"
  rows={[
    { name: "id", type: "String", example: "\"1647502414730379278\"" },
    { name: "store", type: "Object",
      children: [
        { name: "id", type: "String", description: "Store ID", example: "\"1601912947341252990\"" },
        { name: "merchantSettlementId", type: "String", description: "Merchant Settlement ID", example: "\"1596124535165747709\"" },
        { name: "name", type: "String", description: "Store Name", example: "\"Mountain Food - Aeon Mall Shah Alam\"" },
        { name: "imageUrl", type: "String", description: "Yes", example: "\"https://storage.googleapis.com/rm-prod-asset/img/store.png\"" },
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
        { name: "createdAt", type: "DateTime", description: "Creation date time of store", example: "\"2020-09-14T03:01:20Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of store", example: "\"2020-09-14T03:01:20Z\"" }
      ]},
    { name: "transactionId", type: "String", example: "\"\"" },
    { name: "method", type: "String", example: "\"LOYALTY_CREDIT\"" },
    { name: "type", type: "String", example: "\"QUICK_PAY\"" },
    { name: "order", type: "Object",
      children: [
        { name: "id", type: "String", required: true, description: "Order ID (from Merchant), max: 24", example: "\"134850717797247290\"" },
        { name: "title", type: "String", required: true, example: "\"\"" },
        { name: "detail", type: "String", required: true, example: "\"\"" },
        { name: "amount", type: "Integer", required: true, description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "100" }
      ]},
    { name: "terminalId", type: "String", example: "\"\"" },
    { name: "currencyType", type: "String", example: "\"MYR\"" },
    { name: "transactionAt", type: "DateTime", example: "\"2022-01-27T04:02:46Z\"" },
    { name: "status", type: "String", example: "\"SUCCESS\"" },
    { name: "createdAt", type: "DateTime", description: "Creation date time of merchant", example: "\"2022-01-27T04:02:46Z\"" },
    { name: "updatedAt", type: "DateTime", description: "Last update date time of merchant", example: "\"2022-01-27T04:02:46Z\"" }
  ]}
/>

