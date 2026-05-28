---
title: "Transaction Object"
sidebar_label: "Transaction Object"
---

import Admonition from '@theme/Admonition';


## What is this?

Reference for the **transaction object** returned in `item` (or each entry in `items[]`) by all transaction query and payment endpoints. Use this page as the canonical field map when parsing responses.

## When to Use

Refer to this page when:
- Parsing the response of any payment or query endpoint
- You need to know which fields apply to a specific payment method (card, FPX, BNPL, loyalty)

## Fields

The transaction object is returned in the `item` (or `items[]`) field of query responses.

<ParamTable
  rows={[
    { name: "store", type: "JSON", description: "Store details" },
    { name: "referenceId", type: "String", description: "Reference ID from the payment provider" },
    { name: "transactionId", type: "String", required: true, description: "Revenue Monster's unique transaction ID" },
    { name: "terminalId", type: "String", description: "Terminal ID if applicable" },
    { name: "currencyType", type: "String", required: true, description: "Currency type (currently supported MYR only)" },
    { name: "balanceAmount", type: "Integer", required: true, description: "Remaining balance amount for initiating refund" },
    { name: "finalAmount", type: "Integer", required: true, description: "Amount after all deductions (voucher, membership)" },
    { name: "platform", type: "String", required: true, description: "Transaction platform" },
    { name: "type", type: "String", required: true, description: "Transaction type" },
    { name: "method", type: "String", required: true, description: "Transaction payment method" },
    { name: "region", type: "String", required: true, description: "Transaction payment region" },
    { name: "status", type: "String", required: true, description: "Transaction status (SUCCESS, FAILED, IN_PROCESS, etc.)" },
    { name: "source", type: "String", required: true, description: "(Internal) Determines initiator source" },
    { name: "transactionAt", type: "String", description: "Transaction date time (exists only when SUCCESS)" },
    { name: "createdAt", type: "String", required: true, description: "Transaction created date time" },
    { name: "updatedAt", type: "String", required: true, description: "Transaction last updated date time" },
    { name: "order", type: "Object", required: true, description: "Order details",
      children: [
      { name: "id", type: "String", required: true, description: "Order ID" },
      { name: "title", type: "String", required: true, description: "Order title" },
      { name: "currencyType", type: "String", required: true, description: "Order currency type" },
      { name: "amount", type: "Integer", required: true, description: "Order amount" },
      { name: "detail", type: "String", description: "Order detail" },
      { name: "additionalData", type: "String", description: "Order additional data" },
      ]
    },
  ]}
/>

<details className="section-details">
<summary className="section-summary">
  <span>Show Example Transaction</span>
  <span className="section-toggle">▾</span>
</summary>
<div className="section-body">

<CodeBlock language="json" filename="Example Transaction">
{`{
  "referenceId": "230522162302AC0570UM",
  "transactionId": "230522082259300426500551",
  "order": {
    "id": "1684743768790895",
    "title": "Demo",
    "detail": "Demo",
    "additionalData": "Demo",
    "amount": 120
  },
  "currencyType": "MYR",
  "balanceAmount": 120,
  "finalAmount": 120,
  "platform": "OPEN_API",
  "method": "GOBIZ",
  "transactionAt": "2023-05-22T08:23:02Z",
  "type": "WEB_PAYMENT",
  "status": "SUCCESS",
  "region": "MALAYSIA",
  "createdAt": "2023-05-22T08:23:02Z",
  "updatedAt": "2023-05-22T08:23:11Z"
}`}
</CodeBlock>

</div>
</details>

---

## Store Object

<ParamTable
  rows={[
    { name: "id", type: "String", required: true, description: "Store ID" },
    { name: "name", type: "String", description: "Store name" },
    { name: "imageUrl", type: "String", description: "Store image URL" },
    { name: "addressLine1", type: "String", description: "Store address line 1" },
    { name: "addressLine2", type: "String", description: "Store address line 2" },
    { name: "postCode", type: "String", description: "Store postal code" },
    { name: "city", type: "String", description: "Store city" },
    { name: "state", type: "String", description: "Store state" },
    { name: "country", type: "String", description: "Store country" },
    { name: "countryCode", type: "String", description: "Store country code for phone number" },
    { name: "phoneNumber", type: "String", description: "Store phone number" },
    { name: "geoLocation", type: "Object", description: "Geographic coordinates",
      children: [
      { name: "latitude", type: "Float", description: "Store latitude" },
      { name: "longitude", type: "Float", description: "Store longitude" },
      ]
    },
    { name: "status", type: "String", description: "Store status" },
    { name: "createdAt", type: "String", description: "Store created time" },
    { name: "updatedAt", type: "String", description: "Store last updated time" }
  ]}
/>

---

## BuyNowPayLater (BNPL)

<ParamTable
  rows={[
    { name: "isBuyNowPayLater", type: "Boolean", description: "Whether this is a BNPL transaction" },
    { name: "installmentMonth", type: "Integer", description: "Number of months selected for BNPL" }
  ]}
/>

---

## Online Banking (FPX)

<ParamTable
  rows={[
    { name: "buyerName", type: "String", description: "FPX buyer name" },
    { name: "bankId", type: "String", description: "FPX bank ID" }
  ]}
/>

---

## Card Payment

<ParamTable
  rows={[
    { name: "cardType", type: "Object", description: "Card type details",
      children: [
      { name: "brand", type: "String", description: "Card brand" },
      { name: "type", type: "String", description: "Card type (CREDIT, DEBIT)" },
      { name: "issuer", type: "String", description: "Card issuer" },
      { name: "alpha2", type: "String", description: "Card country in alpha2 code" },
      { name: "alpha3", type: "String", description: "Card country in alpha3 code" },
      { name: "country", type: "String", description: "Card country full name" },
      ]
    },
    { name: "provider", type: "String", description: "(Internal) Card provider" },
    { name: "isTokenization", type: "Boolean", description: "Whether payment uses a token instead of PAN" },
    { name: "token", type: "String", description: "Token used for tokenized payment" },
    { name: "maskNo", type: "String", description: "Masked PAN, last four digits", example: "\"XXXX-XXXX-XXXX-2354\"" },
    { name: "inputType", type: "String", description: "Card input type" },
    { name: "referenceId", type: "String", description: "Card transaction reference number" },
    { name: "secondaryReferenceId", type: "String", description: "Card transaction invoice number" },
    { name: "domain", type: "String", description: "Online card payment domain" }
  ]}
/>

---

## Spending Loyalty

<Admonition type="tip">
If you are using QR code mode for payment, you will receive the spending loyalty object in the transaction response. When printing the receipt, include the `qrcode` parameter as the QR code content — customers can scan it to retrieve their loyalty points.
</Admonition>

<ParamTable
  title="Details"
  rows={[
    { name: "code", type: "String", description: "Spending loyalty code" },
    { name: "qrcode", type: "String", description: "Spending loyalty QR code content" },
    { name: "id", type: "String", description: "Spending loyalty ID" }
  ]}
/>

---

## Payment Provider Discount Info

<ParamTable
  rows={[
    { name: "salesAmount", type: "Integer", description: "Original sales amount before discount" },
    { name: "discountAmount", type: "Integer", description: "Payment provider discount amount" },
    { name: "grossAmount", type: "Integer", description: "Sales amount after discount" }
  ]}
/>

---

## Membership Discount Info

<ParamTable
  rows={[
    { name: "memberId", type: "String", description: "Membership member ID" },
    { name: "voucherId", type: "String", description: "Membership voucher ID" },
    { name: "discountAmount", type: "Integer", description: "Membership discount amount" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
