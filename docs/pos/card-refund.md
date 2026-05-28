---
id: card-refund
title: Card Payment Refund
sidebar_label: Card Payment Refund
---

## What is this?

Trigger a card refund event on the RM Terminal from a POS system. Refunds a specific card transaction by its `transactionId`.

## When to Use

Use this endpoint when:
- Refunding a card transaction from your POS app
- Customer requests an in-store card refund processed via terminal

## How to Use

**Method:** <HttpMethodBadge method="POST" />
URL: `https://open.revenuemonster.my/v3/event/terminal`
Sandbox URL: `https://sb-open.revenuemonster.my/v3/event/terminal`

### Step 1: Get the Transaction ID

Capture the `transactionId` of the original card payment to refund.

### Step 2: Send the Refund Event

POST with `type: "REFUND"`, the transaction ID, `email`, and `pin`.

### Step 3: Confirm the Refund

The response confirms refund status — `"FULL_REFUNDED"` indicates success.

---

### Request Parameters

<ParamTable
  rows={[
    { name: "terminalId", type: "String", required: true, description: "Terminal ID", example: "\"1582107209454501456\"" },
    { name: "type", type: "String", required: true, description: "Request type", example: "\"REFUND\"" },
    { name: "data", type: "String", required: true, description: "(Refer data )", example: "{}",
      children: [
        { name: "transactionId", type: "String", required: true, description: "Transaction ID generated from Revenue Monster.", example: "\"1582107209454501456\"" },
        { name: "receiptType", type: "Integer", required: true, description: "1 : Print Merchant Copy and Customer copy  2 : Print Customer copy 3 : Do not print Merchant Copy & Customer Copy", example: "1" },
        { name: "reason", type: "String", required: true, description: "Refund reason", example: "\"Wrong Item\"" },
        { name: "email", type: "String", required: true, description: "Refund email", example: "\"oska.ng@revenuemonster.my\"" },
        { name: "pin", type: "String", required: true, description: "Refund pin", example: "\"321123\"" }
      ]}
  ]}
/>

<CodeBlock language="json" filename="Example Request">
{`curl --location --request POST "https://sb-open.revenuemonster.my/v3/event/terminal" \\
--header "Content-Type: application/json" \\
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \\
--header "X-Signature: sha256 GohuT2QTUXJV3MZh2OoEE9qW9wcfakOU9iVLmkTjM12NQuV6IcWMRQDz9NdxAOVIrh5MssfYCLDlafb2illXxgQMpmZkZ38NT6NQsMeMfGbHBS1Kc+BUtU7o1TMLUzk55J1tA6f0Z95oEuBlCeLm6VsgCG30wFm5YmgssJ0weIwMcW355r2sFl7QcKOuRqynoGtmmr/aGfOk1HjiFLoFzSd38O7rRjwGrekYwuYUD1N/Wp5GFXRjtaaPkzAERPbXEmnh/taLME8VeAhky6dAVGZE6gHKnP5WvvVjUE+KLtj3D32YIHzxhzEW9x3JEObqgvm5Q2oRZNxoh6/MvqwkVA==" \\
--header "X-Nonce-Str: bfdgdjgtjhmnbmmjmdfdghghffj" \\
--header "X-Timestamp: 1546850694" \\
--data-raw {
    "terminalId": "1582107209454501456",
    "type": "REFUND",
    "data": {
        "transactionId": "210215083727100327507906",
        "receiptType": 3,
        "reason": "Testing",
        "email": "oska.ng@revenuemonster.my",
        "pin": "321123"
    }
}`}
</CodeBlock>

### Response Parameters

<ParamTable
  rows={[
    { name: "balanceAmount", type: "Integer", description: "Amount of order in cent", example: "10" },
    { name: "createdAt", type: "DateTime", description: "Creation date time of store", example: "\"2020-02-13T07:08:56Z\"" },
    { name: "currencyType", type: "String", description: "Currency notation (currently only support MYR)", example: "\"MYR\"" },
    { name: "extraInfo", type: "Object", description: "(Refer to extraInfo)", example: "{}",
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
    { name: "order", type: "String", description: "(Refer to order)", example: "{}",
      children: [
        { name: "amount", type: "Integer", required: true, description: "Amount of order in cent (min RM 0.10 or amount: 10)", example: "10" },
        { name: "id", type: "String", required: true, description: "Order ID (from Merchant), max: 24", example: "\"201919250001\"" },
        { name: "title", type: "String", required: true, description: "Order title, max: 32", example: "\"SALE\"" },
        { name: "details", type: "String", required: true, description: "Order details, max: 600", example: "\"XXXX-XXXX-XXXX-3121\"" },
        { name: "additionalData", type: "String", required: true, description: "For merchant's remark, max 128", example: "\"000008\"" }
      ]},
    { name: "platform", type: "String", description: "Only \"TERMINAL\"", example: "\"TERMINAL\"" },
    { name: "referenceId", type: "String", description: "Transaction ID (from server)", example: "\"00000000000791320002737201919250001\"" },
    { name: "region", type: "String", description: "Region of wallet", example: "\"MALAYSIA\"" },
    { name: "status", type: "String", description: "Status returned from WeChat server", example: "\"SUCCESS\"" },
    { name: "transactionAt", type: "DateTime", description: "Transaction date time of store", example: "\"2020-10-25T04:35:22Z\"" },
    { name: "transactionId", type: "DateTime", description: "Transaction ID generated from Revenue Monster.", example: "\"200213070856100322408442\"" },
    { name: "type", type: "String", description: "\"QUICKPAY\" or \"BANK_CARD\"", example: "\"BANK_CARD\"" },
    { name: "updatedAt", type: "DateTime", description: "Last update date time of store", example: "\"2020-02-13T07:08:56Z\"" },
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" },
    { name: "error", type: "Object", description: "(Refer Appendix: Error Codes)", example: "{}" }
  ]}
/>

<a id="card" />

<CodeBlock language="json" filename="Example Response">
{`{
  "code": "SUCCESS",
  "item": {
    "balanceAmount": 0,
    "createdAt": "2021-02-17T17:43:59Z",
    "currencyType": "MYR",
    "extraInfo": {
      "card": {
        "inputType": "NFC",
        "maskNo": "XXXX-XXXX-XXXX-9081",
        "referenceId": "104974001774",
        "secondaryReferenceId": "001774"
      }
    },
    "method": "CARD",
    "order": {
      "additionalData": "In store payment",
      "amount": 10,
      "detail": "[Terminal app] Pay to Mountain Food - Utropolis",
      "id": "1613583839549PE24191B504",
      "title": "In store payment"
    },
    "platform": "TERMINAL",
    "referenceId": "00000000000550520003236104974001774",
    "region": "MALAYSIA",
    "status": "FULL_REFUNDED",
    "transactionAt": "2021-02-17T17:44:02Z",
    "transactionId": "210217174359100325085446",
    "type": "BANK_CARD",
    "updatedAt": "2021-02-17T17:44:30Z"
  }
}`}
</CodeBlock>

<!-- SPDX-License-Identifier: Apache-2.0 -->
