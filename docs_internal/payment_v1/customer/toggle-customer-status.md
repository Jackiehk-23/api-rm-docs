---
id: toggle-customer-status
title: Toggle Customer Status
sidebar_label: Toggle Customer Status
---
{% raw %}

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>PUT</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/status`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/status`

:::note
Toggle customer status
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::


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
        { name: "countryCode", type: "String", description: "Customer country code", example: "60" },
        { name: "phoneNumber", type: "String", description: "Customer phone number", example: "103603440" },
        { name: "isActive", type: "bool", description: "Customer active status ( no card bind will always be false )", example: "true" },
        { name: "createdAt", type: "String", description: "Created DateTime timstamp in RFC3339 formatted", example: "2022-11-11T06:38:00Z" },
        { name: "updatedAt", type: "String", description: "Updated DateTime timstamp in RFC3339 formatted", example: "2022-11-11T06:38:00Z" },
        { name: "clientKey", type: "String", description: "Customer client key ( internal usage only )", example: "EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg" },
        { name: "currency", type: "String", description: "Recurring payment currency", example: "MYR" },
        { name: "amount", type: "Int64", description: "Recurring payment amount", example: "1000" },
        { name: "redirectUrl", type: "String", description: "Redirect URL after customer bind card", example: "https://google.com" },
        { name: "notifyUrl", type: "String", description: "Notify URL when payment has made", example: "https://google.com" },
        { name: "recurringInterval", type: "String", description: "Recurring payment interval could be MONTHLY, WEEKLY, DAILY", example: "WEEKLY" },
        { name: "recurringTarget", type: "String", description: "Recurring target rules can be different values based on interval", example: "1" },
        { name: "recurringRepetition", type: "Integer", description: "No", example: "Recurring repetition rules, how many times charge the customer card" },
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
    "id": "1668148680519476516",
    "paymentUrl": "https://sb-pg.revenuemonster.my/v1/recurring?customerId=1668148680519476516",
    "recurringPaymentId": "",
    "merchantId": "4118165203679668885",
    "storeId": "1602660043994159611",
    "email": "dev@revenuemonster.my",
    "name": "RM Developer",
    "countryCode": "60",
    "phoneNumber": "103603440",
    "isActive": false,
    "createdAt": "2022-11-11T06:38:00Z",
    "updatedAt": "2022-11-11T06:38:00Z",
    "clientKey": "EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg",
    "amount": 100,
    "redirectUrl": "https://google.com",
    "notifyUrl": "https://google.com",
    "recurringInterval": "WEEKLY",
    "recurringTarget": "1",
    "productName": "some recurring product",
    "productDescription": "some recurrnig description"
  },
  "code": "SUCCESS"
}
```

{% endraw %}
