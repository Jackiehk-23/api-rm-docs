---
id: create-recurring-customer
title: Create Recurring Customer
sidebar_label: Create Recurring Customer
---
{% raw %}

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/recurring-payment`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/recurring-payment`

:::note
Create Recurring Customer
:::

### Request Parameters

<ParamTable
  rows={[
    { name: "storeId", type: "String", required: true, description: "Store Identifier", example: "\"134850717797247290\"" },
    { name: "email", type: "String", required: true, description: "Customer email", example: "dev@revenuemonster.my" },
    { name: "name", type: "String", description: "Customer name", example: "RM Developer" },
    { name: "countryCode", type: "String", description: "Customer country code", example: "60" },
    { name: "phoneNumber", type: "String", description: "Customer phone number", example: "103603440" },
    { name: "productName", type: "String", description: "Recurring product title", example: "Recurring Product" },
    { name: "productDescription", type: "String", description: "Recurring product description", example: "Recurring description" },
    { name: "currency", type: "String", required: true, description: "Recurring payment currency", example: "MYR" },
    { name: "amount", type: "String", required: true, description: "Recurring payment amount", example: "100" },
    { name: "redirectUrl", type: "String", required: true, description: "Redirect URL after customer bind card", example: "https://google.com" },
    { name: "notifyUrl", type: "String", required: true, description: "Notify URL when payment has made", example: "https://google.com" },
    { name: "recurringInterval", type: "String", required: true, description: "Recurring payment interval could be MONTHLY, WEEKLY, DAILY", example: "WEEKLY" },
    { name: "recurringTarget", type: "String", description: "Recurring target rules can be different values based on interval", example: "1" },
    { name: "recurringRepetition", type: "Integer", description: "Recurring repetition rules, how many times charge the customer card", example: "1" }
  ]}
/>
<strong>Recurring Target Rules:</strong>

| Interval | Target | Payment Behaviour                     |
| -------- | ------ | ------------------------------------- |
| WEEKLY   | 0      | Every week of Sunday                  |
| WEEKLY   | 1      | Every week of Monday                  |
| WEEKLY   | 2      | Every week of Tuesday                 |
| WEEKLY   | 3      | Every week of Wednesday               |
| WEEKLY   | 4      | Every week of Thursday                |
| WEEKLY   | 5      | Every week of Friday                  |
| WEEKLY   | 6      | Every week of Saturday                |
| MONTHLY  | -1     | End of every month e.g. 2022/10/31    |
| MONTHLY  | 0      | Start of every month, e.g. 2022/10/01 |
| MONTHLY  | 1 - 28 | Day of month                          |


### Response Parameters

<ParamTable
  rows={[
    { name: "item", type: "Object", description: "Customer object",
      children: [
        { name: "id", type: "String", description: "Customer ID", example: "1668148680519476516" },
        { name: "merchantId", type: "String", description: "Merchant ID", example: "4118165203679668885" },
        { name: "storeId", type: "String", description: "Store ID", example: "1602660043994159611" },
        { name: "email", type: "String", description: "Customer email", example: "dev@revenuemonster.my" },
        { name: "name", type: "String", description: "Customer name", example: "RM Developer" },
        { name: "label", type: "String", description: "Customer PAN Label" },
        { name: "countryCode", type: "String", description: "Customer country code", example: "60" },
        { name: "phoneNumber", type: "String", description: "Customer phone number", example: "103603440" },
        { name: "isActive", type: "bool", description: "Customer active status ( no card bind will always be false )", example: "true" },
        { name: "createdAt", type: "String", description: "Created DateTime timstamp in RFC3339 formatted", example: "2022-11-11T06:38:00Z" },
        { name: "updatedAt", type: "String", description: "Updated DateTime timstamp in RFC3339 formatted", example: "2022-11-11T06:38:00Z" },
        { name: "clientKey", type: "String", description: "Customer client key ( internal usage only )", example: "EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg" },
        { name: "amount", type: "Int64", description: "Recurring payment amount", example: "1000" },
        { name: "redirectUrl", type: "String", description: "Redirect URL after customer bind card", example: "https://google.com" },
        { name: "notifyUrl", type: "String", description: "Notify URL when payment has made", example: "https://google.com" },
        { name: "recurringInterval", type: "String", description: "Recurring payment interval could be MONTHLY, WEEKLY", example: "WEEKLY" },
        { name: "recurringTarget", type: "String", description: "Recurring target rules can be different values based on interval", example: "1" },
        { name: "productName", type: "String", description: "Recurring product title", example: "Recurring Product" },
        { name: "productDescription", type: "String", description: "Recurring product description", example: "Recurring description" },
        { name: "paymentUrl", type: "String", description: "Payment URL for Customer bind their Card Information", example: "https://sb-pg.revenuemonster.my/v1/recurring?customerId=1668148680519476516" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

> Example Response

```json
{
    "item": {
        "id": "1671703158559365205",
        "merchantId": "4118165203679668885",
        "storeId": "1602660043994159611",
        "label": "",
        "email": "oska.ng@revenuemonster.my",
        "name": " Oska Ng OpenAPI",
        "countryCode": "60",
        "phoneNumber": "187824152",
        "isActive": false,
        "createdAt": "2022-12-22T09:59:18Z",
        "updatedAt": "2022-12-22T09:59:18Z",
        "clientKey": "EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg",
        "redirectUrl": "https://google.com",
        "notifyUrl": "https://google.com",
        "paymentUrl": "https://sb-pg.revenuemonster.my/v1/recurring?customerId=1671703158559365205",
        "recurringPayment": {
            "amount": 120,
            "currency": "MYR",
            "recurringInterval": "WEEKLY",
            "recurringTarget": "1",
            "productName": "Some Product Name",
            "productDescription": "Some Product productDescription",
            "recurringRepetition": 10
        }
    },
    "code": "SUCCESS"
}
```

{% endraw %}
