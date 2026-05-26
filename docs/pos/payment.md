---
id: payment
title: POS Terminal Integration
sidebar_label: POS Terminal Integration
---

**Method :** <HttpMethodBadge method="POST" />
URL : `https://open.revenuemonster.my/v3/payment/terminal/quickpay`
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay`

:::note
Integrate RM Terminal with POS System or Kiosk machine (using local callback). This endpoint only supports payment initiation. For other methods (refund/reverse/settlement), please follow back refund , reverse , settlement API standard steps accordingly.
:::

### Request Parameters

<ParamTable
  rows={[
    { name: "terminalId", type: "String", required: true, description: "Terminal ID", example: "\"1582107209454501456\"" },
    { name: "type", type: "String", required: true, description: "e-wallet \"E-WALLET\" or Bank card \"CARD\" payment", example: "\"E-WALLET\"" },
    { name: "receiptType", type: "Integer", required: true, description: "1 : Print Merchant Copy and Customer copy  2 : Print Customer copy 3 : Do not print Merchant Copy & Customer Copy", example: "1" },
    { name: "cameraType", type: "String", required: true, description: "For \"E-WALLET\" only, use back or front camera to scan QR", example: "\"FRONT\"" },
    { name: "order", type: "String", required: true, description: "(Refer order )", example: "{}",
      children: [
        { name: "amount", type: "Integer", required: true, description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "100" },
        { name: "currencyType", type: "String", required: true, description: "Currency notation (currently only support MYR)", example: "\"MYR\"" },
        { name: "id", type: "String", required: true, description: "Order ID (from Merchant), max: 24", example: "\"123443333304\"" },
        { name: "title", type: "String", required: true, description: "Order title, max: 32", example: "\"title\"" },
        { name: "details", type: "String", required: true, description: "Order details, max: 600", example: "\"desc\"" },
        { name: "additionalData", type: "String", required: true, description: "For merchant's remark, max 128", example: "\"API Test\"" }
      ]}
  ]}
/>

<CodeBlock language="json" filename="Example Request">
{`curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay" \\
--header "Content-Type: application/json" \\
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \\
--header "X-Signature: sha256 GohuT2QTUXJV3MZh2OoEE9qW9wcfakOU9iVLmkTjM12NQuV6IcWMRQDz9NdxAOVIrh5MssfYCLDlafb2illXxgQMpmZkZ38NT6NQsMeMfGbHBS1Kc+BUtU7o1TMLUzk55J1tA6f0Z95oEuBlCeLm6VsgCG30wFm5YmgssJ0weIwMcW355r2sFl7QcKOuRqynoGtmmr/aGfOk1HjiFLoFzSd38O7rRjwGrekYwuYUD1N/Wp5GFXRjtaaPkzAERPbXEmnh/taLME8VeAhky6dAVGZE6gHKnP5WvvVjUE+KLtj3D32YIHzxhzEW9x3JEObqgvm5Q2oRZNxoh6/MvqwkVA==" \\
--header "X-Nonce-Str: bfdgdjgtjhmnbmmjmdfdghghffj" \\
--header "X-Timestamp: 1546850694" \\
--data-raw {
  "terminalId": "1554193032595276913",
  "type": "CARD",
  "receiptType": 3,
  "cameraType": "BACK",
  "order": {
    "amount": 10,
    "currencyType": "MYR",
    "id": "387153091916665362292147",
    "title": "title",
    "detail": "desc",
    "additionalData": "010100 Pay parking ticket\\n30/07/20 07:13 - 30/07/20 18:40\\nLength of stay: 0 Days. 11:35\\n02993777014011020212260030??"
  }
}
`}
</CodeBlock>

### Response Parameters

<ParamTable
  rows={[
    { name: "balanceAmount", type: "Integer", description: "Amount of order in cent", example: "10" },
    { name: "createdAt", type: "DateTime", description: "Creation date time of store", example: "\"2020-02-13T07:08:56Z\"" },
    { name: "currencyType", type: "String", description: "Currency notation (currently only support MYR)", example: "\"MYR\"" },
    { name: "extraInfo", type: "Object", description: "for CARD payment (Refer to extraInfo)", example: "{}",
      children: [
        { name: "card", type: "Object", required: true, description: "Object of card Info",
      children: [
        { name: "inputType", type: "String", required: true, description: "Type of card payment", example: "\"NFC\"" },
        { name: "maskNo", type: "String", required: true, description: "Masked card no", example: "\"XXXX-XXXX-XXXX-9081\"" },
        { name: "referenceId", type: "String", required: true, description: "Card payment ref on server", example: "\"104974001774\"" },
        { name: "secondaryReferenceId", type: "String", required: true, description: "Card payment ref on terminal", example: "\"001774\"" }
      ]}
      ]},
    { name: "method", type: "String", description: "RM currently supported method", example: "\"CARD\"" },
    { name: "order", type: "String", description: "(Refer order )", example: "{}",
      children: [
        { name: "amount", type: "Integer", required: true, description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "10" },
        { name: "id", type: "String", required: true, description: "Order ID (from Merchant), max: 24", example: "\"201919250001\"" },
        { name: "title", type: "String", required: true, description: "Order title, max: 32", example: "\"SALE\"" },
        { name: "details", type: "String", required: true, description: "Order details, max: 600", example: "\"XXXX-XXXX-XXXX-3121\"" },
        { name: "additionalData", type: "String", required: true, description: "For merchant's remark, max 128", example: "\"000008\"" }
      ]},
    { name: "payee", type: "Object", description: "for E-WALLET payment (Refer to payee)", example: "{}",
      children: [
        { name: "userId", type: "String", required: true, description: "Payee account id", example: "\"1000000806040489\"" }
      ]},
    { name: "platform", type: "String", description: "Only \"TERMINAL\"", example: "\"TERMINAL\"" },
    { name: "referenceId", type: "String", description: "Transaction ID (from server)", example: "\"00000000000791320002737201919250001\"" },
    { name: "region", type: "String", description: "Region of wallet", example: "\"MALAYSIA\"" },
    { name: "status", type: "String", description: "Status returned from WeChat server", example: "\"SUCCESS\"" },
    { name: "store", type: "Object", description: "(Refer to store)", example: "{}",
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
    { name: "transactionAt", type: "DateTime", description: "Transaction date time of store", example: "\"2020-10-25T04:35:22Z\"" },
    { name: "transactionId", type: "DateTime", description: "Transaction ID generated from Revenue Monster.", example: "\"200213070856100322408442\"" },
    { name: "type", type: "String", description: "\"QUICKPAY\" or \"BANK_CARD\"", example: "\"BANK_CARD\"" },
    { name: "updatedAt", type: "DateTime", description: "Last update date time of store", example: "\"2020-02-13T07:08:56Z\"" }
  ]}
/>

<a id="card" />

<CodeBlock language="json" filename="Example Response">
{`{
  "balanceAmount": 10,
  "createdAt": "2021-02-17T18:39:30Z",
  "currencyType": "MYR",
  "extraInfo": {
    "card": {
      "inputType": "NFC",
      "maskNo": "XXXX-XXXX-XXXX-9081",
      "referenceId": "104983001779",
      "secondaryReferenceId": "001779"
    }
  },
  "method": "CARD",
  "order": {
    "additionalData": "010100 Pay parking ticket\\n30/07/20 07:13 - 30/07/20 18:40\\nLength of stay: 0 Days. 11:35\\n02993777014011020212260030??",
    "amount": 10,
    "detail": "desc",
    "id": "387153091916665362292147",
    "title": "title"
  },
  "payee": {
    "userId": "1000000806040489"
  },
  "platform": "TERMINAL",
  "referenceId": "00000000000550520003236104983001779",
  "region": "MALAYSIA",
  "status": "SUCCESS",
  "store": {
    "addressLine1": "UTROPOLIS MARKETPLACE,  JALAN KONTRAKTOR U1/14,  SHAH ALAM",
    "addressLine2": "UTROPOLIS MARKETPLACE,  JALAN KONTRAKTOR U1/14,  SHAH ALAM",
    "city": "Shah Alam",
    "country": "Malaysia",
    "countryCode": "60",
    "createdAt": "2021-01-08T10:09:23Z",
    "geoLocation": {
      "latitude": 3.0901139,
      "longitude": 101.55987
    },
    "id": "1601912947341252990",
    "name": "Mountain Food - Utropolis",
    "phoneNumber": "1123621544",
    "postCode": "40150",
    "state": "Selangor",
    "status": "ACTIVE",
    "updatedAt": "2021-01-08T10:09:23Z"
  },
  "transactionAt": "2021-02-18T02:39:35+08:00",
  "transactionId": "210217183930100325434403",
  "type": "BANK_CARD",
  "updatedAt": "2021-02-17T18:39:37Z"
}`}
</CodeBlock>

