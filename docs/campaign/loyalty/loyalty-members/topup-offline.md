---
id: topup-offline
title: Topup Balance Offline (QuickPay)
sidebar_label: Topup Balance Offline (QuickPay)
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/member/:memberId/topup-offline

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "authCode": "283838110784383199",
      "storeId": "10946114768247530",
      "memberId": "1626838502220135674",
      "order": {
        "id": "123asd1e1zz2ed",
        "amount": 100,
        "currencyType": "MYR"
      }
    }

examples:
  request: |
    curl --location --request GET "{{open_base_path}}/v3/loyalty/member/:memberId/topup-offline" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
  body: |
    {
        "authCode": "283838110784383199",
        "storeId": "10946114768247530",
        "memberId": "1626838502220135674",
        "order": {
            "id": "123asd1e1zz2ed",
            "amount": 100,
            "currencyType": "MYR"
        }
    }
  response: |
    {
        "item": {
            "store": {
                "id": "10946114768247530",
                "name": "Ultropolis",
                "imageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/store.png",
                "addressLine1": "GLENMARIE LRT STATION,  SS7,  PETALING JAYA",
                "addressLine2": "GLENMARIE LRT STATION,  SS7,  PETALING JAYA",
                "postCode": "47301",
                "city": "Petaling Jaya",
                "state": "Selangor",
                "country": "Malaysia",
                "countryCode": "60",
                "phoneNumber": "1123621544",
                "geoLocation": {
                    "latitude": 3.0956282,
                    "longitude": 101.5900452
                },
                "status": "ACTIVE",
                "createdAt": "2020-12-18T11:17:51Z",
                "updatedAt": "2020-12-18T11:17:51Z"
            },
            "referenceId": "2021020522001472380501150230",
            "transactionId": "210205115701010435429229",
            "order": {
                "id": "123asd1e1zz2ed",
                "title": "Pay to Revenue Monster",
                "detail": "[Loyalty Balance][4118165203679668885] Top Up MYR 1.00",
                "additionalData": "Member ID: 1019317844027415630",
                "amount": 100
            },
            "terminalId": "",
            "payee": {
                "userId": "2088622925272386"
            },
            "currencyType": "MYR",
            "balanceAmount": 100,
            "voucher": null,
            "platform": "OPEN_API",
            "method": "ALIPAY",
            "transactionAt": "2021-02-05T11:57:14Z",
            "type": "QUICK_PAY",
            "status": "SUCCESS",
            "region": "CHINA",
            "createdAt": "2021-02-05T11:57:01Z",
            "updatedAt": "2021-02-05T11:57:07Z"
        },
        "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/loyalty/member/:memberId/topup-offline"
  prod="/v3/loyalty/member/:memberId/topup-offline"
/>


import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";


:::note
Specify loyalty member id to topup using quickpay
:::

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "authCode", type: "String", required: true, description: "Auth code of QR code/barcode being scanned. Length: 18", example: "\"134850717797247290\"" },
    { name: "order", type: "Object", required: true, description: "Object of order",
      children: [
        { name: "id", type: "String", required: true, description: "Order ID (from Merchant), max: 24", example: "\"134850717797247290\"" },
        { name: "currencyType", type: "String", required: true, description: "Currency notation (currently only support MYR)", example: "\"MYR\"" },
        { name: "amount", type: "Integer", required: true, description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "100" }
      ]},
    { name: "storeId", type: "String", required: true, description: "ID of the store", example: "\"6170506694335521334\"" },
    { name: "memberId", type: "String", required: true, description: "Member id", example: "\"1626838502220135674\"" }
  ]}
/>




<br />

<a id="order" />

### Response Parameters


<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Transaction object",
      children: [
        { name: "store", type: "Object", description: "Store object",
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
        { name: "geoLocation", type: "Object", description: "Geo Location (latitude and longtitude) of store", example: "{\"latitude\": 3.1349857, \"longtitude\": 101.6136659 }" },
        { name: "status", type: "String", description: "Current status of store", example: "\"ACTIVE\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of store", example: "\"2018-02-12T08:53:13Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of store", example: "\"2018-02-12T08:53:13Z\"" }
      ]},
        { name: "referenceId", type: "String", description: "Reference ID (from WeChat server)", example: "\"\"" },
        { name: "transactionId", type: "String", description: "Transaction ID (from RM server)", example: "\"152161448229438994\"" },
        { name: "order", type: "Object", description: "Order object",
      children: [
        { name: "id", type: "String", description: "Order ID (from Merchant), max: 24", example: "\"134850717797247290\"" },
        { name: "title", type: "String", description: "Order title, max: 32", example: "\"Sales\"" },
        { name: "details", type: "String", description: "Order details, max: 600", example: "\"1 x iPhone X; 2 x SAMSUNG S8\"" },
        { name: "amount", type: "Integer", description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "100" }
      ]},
        { name: "payee", type: "Object", description: "Object of userID made payment (payment sender)", example: "{\"userId\": \"o74f0wjjzv9eKRu1fccrZswVFnOQ\"}" },
        { name: "currencyType", type: "String", description: "Currency notation (currently only support MYR)", example: "\"MYR\"" },
        { name: "platform", type: "String", description: "Currently only support \"OPEN_API\"", example: "\"OPEN_API\"" },
        { name: "method", type: "String", description: "RM currently supported method", example: "ALL" },
        { name: "type", type: "String", description: "Currently only support \"QUICKPAY\"", example: "\"QUICKPAY\"" },
        { name: "status", type: "String", description: "Status returned from WeChat server", example: "\"SUCCESS\"" },
        { name: "region", type: "String", description: "Region of wallet, \"MALAYSIA\" or \"CHINA\"", example: "\"MALAYSIA\"" },
        { name: "error", type: "String", description: "(Refer Appendix: Error Codes)", example: "{}" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of transaction", example: "\"2018-03-21T06:41:22Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of transaction", example: "\"2018-03-21T06:41:22Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>


<br />

<a id="item" />

<br />

<a id="store" />

