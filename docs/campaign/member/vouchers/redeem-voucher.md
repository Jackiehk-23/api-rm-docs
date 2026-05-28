---
id: redeem-voucher
title: Redeem Voucher
sidebar_label: Redeem Voucher
---

**Method :** <HttpMethodBadge method="POST" />
URL : `https://open.revenuemonster.my/v3/loyalty/me/voucher/{voucher-code}/redeem?countryCode=60&phoneNumber=187824152`
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/me/voucher/{voucher-code}/redeem?countryCode=60&phoneNumber=187824152`

## What is this?

Redeem a voucher on behalf of a loyalty member by `voucher-code`. Marks the voucher as redeemed and applies any associated benefits.

## When to Use

Use this endpoint when:
- A member presents a voucher for redemption at checkout
- Triggering redemption from a member-facing UI

## How to Use

**Method:** <HttpMethodBadge method="POST" />
URL: `https://open.revenuemonster.my/v3/loyalty/me/voucher/{voucher-code}/redeem?countryCode=60&phoneNumber=187824152`
Sandbox URL: `https://sb-open.revenuemonster.my/v3/loyalty/me/voucher/{voucher-code}/redeem?countryCode=60&phoneNumber=187824152`

POST with `voucher-code` in the path and `countryCode` + `phoneNumber` as query parameters.

---

### Request Parameters

<CodeBlock language="json" filename="Example Request">
{`curl --location --request POST "{{open_base_path}}/v3/loyalty/me/voucher/rms@xR43u4bRhUU/redeem?countryCode=60&phoneNumber=187824152" \\
--header "Content-Type: application/json" \\
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \\
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \\
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \\
--header "X-Timestamp: 1528450585" \\
`}
</CodeBlock>

### Response Parameters

<ParamTable
  rows={[
    { name: "item", type: "Object", description: "Voucher object",
      children: [
        { name: "key", type: "String", description: "Voucher Key (Internal Usage)", example: "\"EhIKBk1lbWJlchDOuOKz24XWkg4SGQoNTWVtYmVyUHJvZmlsZRDl-MTxiPOPjzY\"" },
        { name: "label", type: "String", description: "Voucher Label", example: "\"asdasd\"" },
        { name: "voucherBatchKey", type: "String", description: "Voucher Batch Key", example: "\"EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQs4n7iuzioaQW\"" },
        { name: "type", type: "String", description: "Voucher Type (\"CASH\", \"DISCOUND\", \"GIFT\")", example: "\"CASH\"" },
        { name: "amount", type: "Integer", description: "Amount of the voucher", example: "100" },
        { name: "discountRate", type: "Integer", description: "Voucher Discount Rate", example: "0" },
        { name: "minimumSpendAmount", type: "Integer", description: "Set a Minimum Spend Amount", example: "0" },
        { name: "origin", type: "String", description: "Origin is for determine voucher source (\"SYSTEM\", \"SELF\", \"MARKETPLACE\" )", example: "\"SYSTEM\"" },
        { name: "imageUrl", type: "String", description: "Voucher Image", example: "\"\"" },
        { name: "memberProfile", type: "Object", description: "Member Profile (refer to profile page)", example: "null" },
        { name: "assignedAt", type: "DateTime", description: "Voucher Assign at", example: "\"0001-01-01T00:00:00Z\"" },
        { name: "payload", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "tnc", type: "Array", example: "[\"T&C\"]" },
        { name: "contactInfo", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "email", type: "String", description: "Email", example: "\"\"" },
        { name: "phoneNumber", type: "String", description: "Phone Number", example: "\"\"" }
      ]}
      ]},
        { name: "qrUrl", type: "String", description: "Voucher QRcode URL", example: "\"\"" },
        { name: "code", type: "String", description: "Voucher Code", example: "\"xR43u4bRhUU\"" },
        { name: "isShipping", type: "Boolean", description: "Voucher Shipping", example: "false" },
        { name: "address", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "addressLine1", type: "String", description: "Address 1", example: "\"\"" },
        { name: "addressLine2", type: "String", description: "Address 2", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode", example: "\"\"" },
        { name: "city", type: "String", description: "City", example: "\"\"" },
        { name: "state", type: "String", description: "State", example: "\"\"" },
        { name: "country", type: "String", description: "Country", example: "\"\"" }
      ]},
        { name: "expiry", type: "Object", description: "Expiry date time",
      children: [
        { name: "type", type: "String", description: "Voucher Type (\"DYNAMIC\" , \"STATIC\")", example: "\"DYNAMIC\"" },
        { name: "day", type: "Integer", description: "Expired Day", example: "1" },
        { name: "expiredAt", type: "DateTime", description: "Voucher Expired", example: "\"2020-11-26T04:33:04Z\"" }
      ]},
        { name: "usedAt", type: "DateTime", description: "Voucher Use", example: "\"2020-11-25T13:58:55+08:00\"" },
        { name: "redeemedAt", type: "DateTime", description: "Voucher Redeem", example: "\"2020-11-25T04:33:04Z\"" },
        { name: "isDeviceRedeem", type: "Boolean", description: "Voucher Redeem Device", example: "true" },
        { name: "status", type: "String", description: "Voucher Status (\"VALID\", \"ISSUE\", \"REDEEMED\", \"VOID\", \"EXPIRED\", \"MARKET_PLACE\", \"COMPLETE\")", example: "\"VOID\"" },
        { name: "voucherComboKey", type: "String", description: "Voucher Combo Key", example: "null" },
        { name: "isMarketPlace", type: "Boolean", description: "Last update date time", example: "false" },
        { name: "createdAt", type: "DateTime", description: "Create date time", example: "\"2020-11-18T06:43:19Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time", example: "\"2020-11-25T05:58:56Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

<a id="payload" />

<a id="contactinfo" />

<a id="expiry" />

<a id="address" />

<CodeBlock language="json" filename="Example Response">
{`{
  "item": {
    "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIcCgdWb3VjaGVyGhFybXNAeFI0M3U0YlJoVVUtMA",
    "label": "asdasd",
    "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQs4n7iuzioaQW",
    "type": "CASH",
    "amount": 100,
    "discountRate": 0,
    "minimumSpendAmount": 0,
    "origin": "SYSTEM",
    "imageUrl": "",
    "memberProfile": null,
    "assignedAt": "0001-01-01T00:00:00Z",
    "payload": null,
    "qrUrl": "",
    "code": "rms@xR43u4bRhUU",
    "isShipping": false,
    "address": null,
    "expiry": {
      "type": "DYNAMIC",
      "day": 1,
      "expiredAt": "2020-11-26T04:33:04Z"
    },
    "usedAt": "2020-11-25T13:58:55+08:00",
    "redeemedAt": "2020-11-25T04:33:04Z",
    "isDeviceRedeem": true,
    "status": "VOID",
    "voucherComboKey": null,
    "isMarketPlace": false,
    "createdAt": "2020-11-18T06:43:19Z",
    "updatedAt": "2020-11-25T05:58:56Z"
  },
  "code": "SUCCESS"
}`}
</CodeBlock>


<!-- SPDX-License-Identifier: Apache-2.0 -->
