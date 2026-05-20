---
id: query-status-by-transaction-id
title: Query Status by Transaction ID
sidebar_label: Query Status by TransactionID
---
{% raw %}

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/payment/transaction/1805260552060011600267`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/payment/transaction/1805260552060011600267`

:::note
Get Payment Transaction ID
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

<ParamTable
  rows={[
    { name: "item", type: "Object", description: "Transaction object",
      children: [
        { name: "store", type: "Object", description: "Store object",
      children: [
        { name: "id", type: "String", description: "Store ID", example: "\"2808912573238362402\"" },
        { name: "name", type: "String", description: "Store Name", example: "\"REVENUE MONSTER\"" },
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
        { name: "referenceId", type: "String", description: "Transaction ID (from Payment server)", example: "\"20201217211212800110171725600805232\"" },
        { name: "transactionId", type: "String", description: "Transaction ID (from RM server)", example: "\"152161448229438994\"" },
        { name: "order", type: "Object", description: "Order object",
      children: [
        { name: "id", type: "String", description: "Order ID (from Merchant)", example: "\"134850717797247290\"" },
        { name: "title", type: "String", description: "Order title", example: "\"Sales\"" },
        { name: "detail", type: "String", description: "Order details", example: "\"1 x iPhone X; 2 x SAMSUNG S8\"" },
        { name: "amount", type: "Uint", description: "Amount of order", example: "1865" }
      ]},
        { name: "terminalId", type: "String", description: "Terminal ID", example: "\"\"" },
        { name: "payee", type: "Object", description: "Object of userID made payment (payment sender)", example: "{\"userId\": \"1000000806040489\"}" },
        { name: "currencyType", type: "String", description: "Currency Type", example: "\"MYR\"" },
        { name: "balanceAmount", type: "Uint", description: "Is Sales Amount - Refunded Amount", example: "1865" },
        { name: "voucher", type: "Object", description: "Voucher", example: "null" },
        { name: "transactionAt", type: "DateTime", description: "Date time of transaction", example: "\"2018-03-21T06:41:22Z\"" },
        { name: "platform", type: "String", description: "Currently only support \"OPEN_API\"", example: "\"OPEN_API\"" },
        { name: "method", type: "String", description: "RM currently supported method", example: "\"TNG\"" },
        { name: "type", type: "String", description: "Currently only support \"QUICKPAY\" , \"WEB_PAYMENT\"", example: "\"WEB_PAYMENT\"" },
        { name: "status", type: "String", description: "Status returned from server, \"SUCCESS\" or \"IN_PROCESS\" or \"FAILED\". \"IN_PROCESS\" means user scanned and making payment.", example: "\"SUCCESS\"" },
        { name: "region", type: "String", description: "Region of wallet, \"MALAYSIA\" or \"CHINA\"", example: "\"MALAYSIA\"" },
        { name: "extraInfo", type: "Object",
      children: [
        { name: "card", type: "Object", example: "{}" }
      ]},
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
    "store": {
      "id": "2808912573238362402",
      "name": "One Utama",
      "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
      "addressLine1": "1 UTAMA SHOPPING CENTRE,  LEBUH BANDAR UTAMA,  BANDAR UTAMA",
      "addressLine2": "",
      "postCode": "47800",
      "city": "Petaling Jaya",
      "state": "Selangor",
      "country": "Malaysia",
      "countryCode": "60",
      "phoneNumber": "1123621544",
      "geoLocation": {
        "latitude": 3.1507599,
        "longitude": 101.6154222
      },
      "status": "ACTIVE",
      "createdAt": "2020-09-14T03:01:20Z",
      "updatedAt": "2020-09-14T03:01:20Z"
    },
    "referenceId": "20201217211212800110171725600805232",
    "transactionId": "201217081554300427519553",
    "order": {
      "id": "5fdb13b7e5f337f0332bdd59",
      "title": "Pay to One Utama",
      "detail": "",
      "amount": 1865
    },
    "terminalId": "",
    "payee": {
      "userId": "1000000806083034"
    },
    "currencyType": "MYR",
    "balanceAmount": 1865,
    "voucher": null,
    "platform": "OPEN_API",
    "method": "TNG",
    "transactionAt": "2020-12-17T08:16:05Z",
    "type": "WEB_PAYMENT",
    "status": "SUCCESS",
    "region": "MALAYSIA",
    "extraInfo": {
      "card": {}
    },
    "createdAt": "2020-12-17T08:15:54Z",
    "updatedAt": "2020-12-17T08:16:05Z"
  },
  "code": "SUCCESS"
}
```

{% endraw %}
