---
id: create-customer-order
title: Create Customer Order
sidebar_label: Create Customer Order
---
{% raw %}

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/order`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/order`

:::note
Create Customer Order
:::

### Request Parameters

<ParamTable
  rows={[
    { name: "currency", type: "String", required: true, description: "Recurring payment currency", example: "MYR" },
    { name: "amount", type: "String", required: true, description: "Recurring payment amount", example: "100" }
  ]}
/>

### Response Parameters

<ParamTable
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
        { name: "geoLocation", type: "Object of [Float]", description: "Geo Location (latitude and longtitude) of store", example: "{\"latitude\": 3.1349857, \"longitude\": 101.6136659 }" },
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
        { name: "detail", type: "String", description: "Order details, max: 600", example: "\"1 x iPhone X; 2 x SAMSUNG S8\"" },
        { name: "amount", type: "Uint", description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "100" }
      ]},
        { name: "payee", type: "Object", description: "Object of userID made payment (payment sender)", example: "{\"userId\": \"o74f0wjjzv9eKRu1fccrZswVFnOQ\"}" },
        { name: "currencyType", type: "String", description: "Currency notation (currently only support MYR)", example: "\"MYR\"" },
        { name: "balanceAmount", type: "Uint", description: "Amount of order", example: "100" },
        { name: "platform", type: "String", description: "Currently only support \"OPEN_API\"", example: "\"OPEN_API\"" },
        { name: "method", type: "String", description: "RM currently supported method", example: "ALL" },
        { name: "type", type: "String", description: "Currently only support \"QUICKPAY\"", example: "\"QUICKPAY\"" },
        { name: "status", type: "String", description: "Status returned from WeChat server", example: "\"SUCCESS\"" },
        { name: "region", type: "String", description: "Region of wallet, \"MALAYSIA\" or \"CHINA\"", example: "\"MALAYSIA\"" },
        { name: "error", type: "String", description: "(Refer Appendix: Error Codes)", example: "{}" },
        { name: "transactionAt", type: "DateTime", description: "Payment date time", example: "\"2018-03-21T06:41:22Z\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of transaction", example: "\"2018-03-21T06:41:22Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of transaction", example: "\"2018-03-21T06:41:22Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

> Example Response

```json
{
  "item": {
    "referenceId": "",
    "transactionId": "221111072221600425841118",
    "order": {
      "id": "1668151341700658887R0",
      "title": "Some Product Name",
      "detail": "Some Product productDescription",
      "additionalData": "1668151341700658887",
      "amount": 300
    },
    "terminalId": "",
    "currencyType": "MYR",
    "balanceAmount": 0,
    "finalAmount": 300,
    "voucher": null,
    "platform": "OPEN_API",
    "method": "GOBIZ",
    "error": {
      "message": "9010"
    },
    "transactionAt": "0001-01-01T00:00:00Z",
    "type": "RECURRING_PAYMENT",
    "status": "FAILED",
    "region": "MALAYSIA",
    "extraInfo": {
      "card": {
        "cardType": null,
        "provider": "",
        "isTokenization": false,
        "token": "",
        "maskNo": "",
        "inputType": "",
        "referenceId": "",
        "domain": "https://sb-pg.revenuemonster.my",
        "secondaryReferenceId": ""
      },
      "onlineBanking": null,
      "manualRefund": null
    },
    "extendInfo": {
      "inHousePromo": {
        "amount": 0,
        "info": null
      },
      "buyNowPayLater": {
        "isBuyNowPayLater": false,
        "installmentMonth": 0
      }
    },
    "source": "RECURRING",
    "createdAt": "2022-11-11T07:22:21Z",
    "updatedAt": "2022-11-11T07:23:23Z"
  },
  "code": "SUCCESS"
}
```

{% endraw %}
