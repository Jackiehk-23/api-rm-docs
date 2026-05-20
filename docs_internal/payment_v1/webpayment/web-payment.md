---
id: web-payment
title: Web/Mobile Payment Transaction
sidebar_label: Web/Mobile Payment Transaction
---
{% raw %}

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

:::note

- Used by e-commerce and SaaS businesses for one-time purchases.

- Demo Web Payment (Version 3): [Click Here](https://sb-api.revenuemonster.my/demo/payment/online)

- Web Payment Sequence Diagram

<Flex justifyContent="center">
  <Button
    width="100%"
    sx={{
      ":hover": {
        backgroundColor: "blue",
      },
      backgroundColor: "#528ef7",
      borderRadius: 15,
    }}
    onClick={() => {
      window.location.href =
        "https://drive.google.com/drive/folders/1MOJBWY6aw6KiUUMRMbHo-hXMuxjI3Z0Q?usp=sharing";
    }}
  >
    Click Here
  </Button>
</Flex>
:::

### Example of Web Payment

![image](/img/gif/web-payment.gif)

### Example of Mobile Web Payment

<img src="/img/gif/mobile-web-payment.gif" width="300" height="600" />

<!-- ![image](/img/gif/mobile-web-payment.gif) -->

<hr />

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online`

:::note

- To create a unified payment checkout page for your website and Mobile.
- **Data object** needs to be sorted, the **Nested object** also needs to be sorted.

:::

### Request Parameters

<ParamTable
  rows={[
    { name: "order", type: "Object", required: true, description: "Object of order",
      children: [
        { name: "title", type: "String", required: true, description: "Order title, max: 32", example: "\"Sales\"" },
        { name: "detail", type: "String", required: true, description: "Order detail, max: 600", example: "\"1 x iPhone X; 2 x SAMSUNG S8\"" },
        { name: "additionalData", type: "String", required: true, description: "Order description", example: "\"Sales\"" },
        { name: "amount", type: "Uint", required: true, description: "Amount of order in cent. Only required when \"isPrefillAmount\" = true. (min RM 0.10 or amount: 10)", example: "100" },
        { name: "currencyType", type: "String", required: true, description: "Currency notation (currently only support MYR)", example: "\"MYR\"" },
        { name: "id", type: "String", description: "\"6170506694335521334\"" }
      ]},
    { name: "method", type: "[]String", required: true, description: "RM currently supported method", example: "[\"WECHATPAY_MY\",\"WECHATPAY_CN\" ,\"PRESTO_MY\",\"BOOST_MY\",\"TNG_MY\" , \"ALIPAY_CN\",\"GRABPAY_MY\",\"RAZER_MY\", GOBIZ_MY]" },
    { name: "type", type: "String", required: true, description: "Obejct of type",
      children: [
        { name: "type", type: "String", required: true, example: "\"WEB_PAYMENT\"" },
        { name: "type", type: "String", required: true, example: "\"MOBILE_PAYMENT\"" }
      ]},
    { name: "storeId", type: "String", required: true, description: "ID of the store to create QR code", example: "\"10946114768247530\"" },
    { name: "paymentOrders", type: "[]String", description: "Sequence of the payment method tabs", example: "[\"WALLET\",\"ONLINE_BANKING\",\"CARD\", \"PAY_LATER\"]" },
    { name: "redirectUrl", type: "String", required: true, description: "URL to redirect after payment is made", example: "\"https://google.com\"" },
    { name: "notifyUrl", type: "String", required: true, description: "This is a notify URL or callback URL to inform server on transaction status after payment made.", example: "\"https://google.com\"" },
    { name: "layoutVersion", type: "String", description: "Select layout for Web payment", example: "V1 / V2 (Supported Credit Card)" }
  ]}
/>

<br />

<strong>Customer object (customer):</strong>

<ParamTable
  rows={[
    { name: "userId", type: "String", required: true, description: "if tokenization enable need userId", example: "\"13245876\"" },
    { name: "email", type: "String", description: "Customer Email", example: "\"\"" },
    { name: "countryCode", type: "String", description: "Customer Country Code", example: "\"\"" },
    { name: "phoneNumber", type: "String", description: "Customer Phone Number", example: "\"\"" }
  ]}
/>

<hr />

For **MOBILE_PAYMENT** only, please apply at application.

<strong>SDK for MOBILE_PAYMENT</strong> :-

- [RM-IOS](https://github.com/RevenueMonster/RM-IOS)
- [RM-Android](https://github.com/RevenueMonster/RM-Android) <br/><br />

<hr />

> Example Request

```json
curl --location --request POST "{{open_base_path}}/v3/payment/online" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer {{clientToken}}" \
  --header "X-Nonce-Str: XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG" \
  --header "X-Signature: sha256 YTTV0p1XJUllLNwAC/m430ZbteZhdBmUm3aVnKH4XEZU2yfl7liCPzEI40VqTwFcmMLByJ0mRyzc97gzVn1XZVIr1DaPpW3LUv/on82hIDhLue4uJzKg+vS8/CKJC4+SJ1NpL4rDQEg/hdq4mrNIckTN5+UCFbM4tLCDN8FanSoI3SxcfmvfBwuOc5ro4WWStJlr/LxLJWHRdI8ZpTc1gmNkzRKA9YXJI6iACrkg4cUtMkQ0nii9dHu+brKtK2gCtZ6kdPxgiykDlJuPcpHBGsG+wjNGXLxNeeZjbIl6m40dtdwwyiDbdsk/ZelN0J8Xw1rti7a7dHY/vNnN4W+tUA==" \
  --header "X-Timestamp: 1547643342" \
  --data "{
    \"order\": {
    	\"title\": \"hello\",
    	\"detail\": \"hello\",
    	\"additionalData\": \"world\",
	    \"amount\": 100,
	    \"currencyType\": \"MYR\",
	    \"id\": \"13234353336\"
    },
    \"customer\": {
      \"userId\": \"13245876\",
      \"email\": "",
      \"countryCode\": "",
      \"phoneNumber\": "",
    },
    \"method\": [],
    \"type\": \"WEB_PAYMENT\",
    \"storeId\": \"977596145540933417\",
    \"redirectUrl\": \"https://google.com\",
    \"notifyUrl\": \"https://google.com\",
    \"layoutVersion\": \"v3\"
}"
```

### Response Parameters

<ParamTable
  rows={[
    { name: "item", type: "Object", description: "item object",
      children: [
        { name: "checkoutId", type: "String", description: "Code to identify web payment url", example: "\"1548316308361173347\"" },
        { name: "url", type: "String", description: "Example to form checkout URL. Note: to change base URL to desired URL.", example: "\"https://sb-pg.revenuemonster.my/checkout?checkoutId=1548316308361173347\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

> Example Response

```json
{
  "item": {
    "checkoutId": "1548316308361173347",
    "url": "https://sb-pg.revenuemonster.my/checkout?checkoutId=1548316308361173347"
  },
  "code": "SUCCESS"
}
```

<hr />

### Advance Options

<details>
  <summary>
    <b>Create individual payment checkout</b>
  </summary>
  <br />
  After you get the <b>url</b> from <b>response API</b>, you can append a query
  String
  <br />
  <br />
  Example:
  <br />
  <b>
    https://sb-pg.revenuemonster.my/v4/checkout?checkoutId=1548316308361173347&method=TNG_MY
  </b>
</details>

{% endraw %}
