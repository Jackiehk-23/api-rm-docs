---
id: spend-loyalty-balance
title: Spend Loyalty Balances
sidebar_label: Spend Loyalty Balances
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/balances

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "authCode": "string",
      "storeId": "{{storeId}}",
      "order": {
        "id": "string",
        "title": "string",
        "detail": "string",
        "additionalData": "string",
        "amount": 100
      }
    }

examples:
  request: |
    curl --location --request POST 'https://sb-open.revenuemonster.my/v3/loyalty/balances' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNbkFxWjZHek9MS0ZRIl0sImV4cCI6MTYxMTczMzcxMiwiaWF0IjoxNjA5MTQxNzEyLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTYtRElnc3E3dEtvVyIsIm5iZiI6MTYwOTE0MTcxMiwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.vDyDrmriPMyvrzpadJx3iBLvBtX4ELsK4shnKkUPqgC9KovNzSTFVEqOe9hxAqqh9VFrEC7kBbS4FNm007CWC4P9_zbN0Ax829Q1DRS3ZZQg-wYEXywFgIqMEPKavG9KkpQ_zvNplu4kLq-gdlR0sjF37x9s7j7uZVJg8xAf8LVEOJzqfgsnt56JpcOGWsaQahQyvhAUq8_O9EYLM_PewqxIfVT6hJA83_ULGUFF9wp4xVbS1kU-u93E569F0gdiJnmcQ80CB6fz4q4u_oMrqBZiaZIJ1RYNKRXk3i8pNPhu9d3sIulPCY8PuD9eqdL31LF9npd8r54lWs05ATrg-g' \
    --header 'X-Signature: sha256 XvedDW8H2gqGL5gMzTHqDy1PXX3OqRF09WuQDkeCDwuinOAsPstcPOSefUwkyHPM9WPNKKHyR5qXbKNLC7UgQyGi8Ynio03kDo0p+g3BqXaUT1tpo5D8kv42Kh2S8CW4RkX2Dkf+Yxi2XMQ8l3kzPZaRyhudaGerUZony4Npzf63p4+oTBbXE01uX/4x/WL57+zkaaVRc1KlJsLdGsBmLlPOHLana7udJffJyxXhOmyokBuJ4GoOC8JpDG9oaKCNMZ88ow9CWWB0yRPrK2KeaEDwzCm2Jh8IFKw1gS6avQAwsjychZWv5XmAXkZ8ZQrnLXJquA09QpLxPTtOeQC9SA==' \
    --header 'X-Nonce-Str: XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG' \
    --header 'X-Timestamp: 1599467903' \
  body: |
    {
      "authCode": "loyalty_qr_authcode",
      "storeId": "{{storeId}}",
      "order": {
        "id": "some unique id",
        "title": "Loyalty Balance Payment",
        "detail": "some detail",
        "additionalData": "some additional data",
        "amount": 100
      }
    }
  response: |
    {
      "item": {
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
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/loyalty/balances"
  prod="/v3/loyalty/balances"
/>

## What is this?

Spend a member's loyalty credit balance at checkout. The customer's loyalty QR code is scanned to capture the `authCode`.

## When to Use

Use this endpoint when:
- Member pays partially or fully with loyalty credit
- Settling a Quick Pay transaction with the `LOYALTY_CREDIT` method

## How to Use

POST `authCode`, `storeId`, and `order` details. Returns the loyalty-credit transaction record.

---

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "authCode", type: "String", description: "Auth code of QR code/barcode being scanned. Length: 18", example: "\"loyalty_qr_authcode\"" },
    { name: "storeId", type: "String" },
    { name: "order", type: "Object",
      children: [
        { name: "id", type: "String", required: true, description: "Order ID (from Merchant), max: 24", example: "\"134850717797247290\"" },
        { name: "title", type: "String", required: true, example: "\"In store payment\"" },
        { name: "detail", type: "String", required: true, example: "\"\"" },
        { name: "additionalData", type: "String", example: "\"\"" },
        { name: "amount", type: "Integer", required: true, description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "100" }
      ]}
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", example: "(Refer to explanation below)" },
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

<ParamTable
  title="Details"
  rows={[
    { name: "id", type: "String", example: "\"1647502414730379278\"" },
    { name: "store", type: "Object",
      children: [
        { name: "id", type: "String", description: "Store ID", example: "\"1601912947341252990\"" },
        { name: "merchantSettlementId", type: "String", description: "Merchant Settlement ID", example: "\"1596124535165747709\"" },
        { name: "name", type: "String", description: "Store Name", example: "\"Mountain Food - Aeon Mall Shah Alam\"" },
        { name: "imageUrl", type: "String", description: "Store image URL", example: "\"https://storage.googleapis.com/rm-prod-asset/img/store.png\"" },
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


<!-- SPDX-License-Identifier: Apache-2.0 -->
