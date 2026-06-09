---
id: bulk-redeem-voucher
title: Bulk Redeem Voucher
sidebar_label: Bulk Redeem Voucher
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/vouchers/redeem

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "codes": [
        "string"
      ]
    }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/vouchers/redeem" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV2E1NHl5dE1QSUZnIl0sImV4cCI6MTc0NTA1MDY2MCwiaWF0IjoxNzQyNDU4NjYwLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UW5vcURvcm1kblpjWSIsIm5iZiI6MTc0MjQ1ODY2MCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.T-6nuPM-V0dMV6cgFrfzznx-pdOwyUVvM6EdIxpsQYu8GWjGIN6xrZzBbldy7Fafp2zuhKLfRkE6G-FVuSfV3Qg_S8hDJD4SpB0_bawuXwNmq-tMp1WOFkE0IOfMtfCowp4z6arDayhQTIT0qO36aQ1XzZrsPwqvRJ8fo_YfsurE8Z1UnSXukZWPTpjDs7fio8ZEVcNlWDWuimGHJcpYuH4FgvIdMJ1oWqnwZtvf9gDqmig5ddSpPEVTjf9cGMVBdZlwPXXw0mRuI0ClKMbBgrgUwmnYnIT3zPTRxNwMPKj4AkI3QnLbFkLvTDpk9wrIgrXLFNEZ37j9mQtehuTSgQ" \
    --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1717039047" \
    --data-raw "{
      \"codes\": [\"32zSv2W8\", \"344PNV5r\", \"V2FrkTnh\"]
    }"
  body: |
    There is no example body request.
  response: |
    {
      "item": [
        {
          "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGggzMnpTdjJXOA",
          "label": "dasdadas",
          "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
          "type": "CASH",
          "amount": 100,
          "discountRate": 0,
          "minimumSpendAmount": 100,
          "origin": "SYSTEM",
          "imageUrl": "",
          "memberProfile": null,
          "assignedAt": "0001-01-01T00:00:00Z",
          "payload": null,
          "qrUrl": "",
          "code": "32zSv2W8",
          "isShipping": false,
          "address": null,
          "expiry": {
            "type": "DYNAMIC",
            "day": 2,
            "expiredAt": "2025-06-15T09:18:05Z"
          },
          "usedAt": "0001-01-01T00:00:00Z",
          "redeemedAt": "2025-06-13T09:18:05Z",
          "isDeviceRedeem": true,
          "status": "REDEEMED",
          "voucherComboKey": null,
          "isMarketPlace": false,
          "createdAt": "2025-05-06T10:38:51Z",
          "updatedAt": "2025-06-13T09:18:05Z"
        },
        {
          "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGggzNDRQTlY1cg",
          "label": "dasdadas",
          "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
          "type": "CASH",
          "amount": 100,
          "discountRate": 0,
          "minimumSpendAmount": 100,
          "origin": "SYSTEM",
          "imageUrl": "",
          "memberProfile": null,
          "assignedAt": "0001-01-01T00:00:00Z",
          "payload": null,
          "qrUrl": "",
          "code": "344PNV5r",
          "isShipping": false,
          "address": null,
          "expiry": {
            "type": "DYNAMIC",
            "day": 2,
            "expiredAt": "2025-06-15T09:18:05Z"
          },
          "usedAt": "0001-01-01T00:00:00Z",
          "redeemedAt": "2025-06-13T09:18:05Z",
          "isDeviceRedeem": true,
          "status": "REDEEMED",
          "voucherComboKey": null,
          "isMarketPlace": false,
          "createdAt": "2025-05-06T10:38:51Z",
          "updatedAt": "2025-06-13T09:18:05Z"
        },
        {
          "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGghWMkZya1RuaA",
          "label": "dasdadas",
          "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
          "type": "CASH",
          "amount": 100,
          "discountRate": 0,
          "minimumSpendAmount": 100,
          "origin": "SYSTEM",
          "imageUrl": "",
          "memberProfile": null,
          "assignedAt": "0001-01-01T00:00:00Z",
          "payload": null,
          "qrUrl": "",
          "code": "V2FrkTnh",
          "isShipping": false,
          "address": null,
          "expiry": {
            "type": "DYNAMIC",
            "day": 2,
            "expiredAt": "2025-06-15T09:18:05Z"
          },
          "usedAt": "0001-01-01T00:00:00Z",
          "redeemedAt": "2025-06-13T09:18:05Z",
          "isDeviceRedeem": true,
          "status": "REDEEMED",
          "voucherComboKey": null,
          "isMarketPlace": false,
          "createdAt": "2025-05-06T10:38:51Z",
          "updatedAt": "2025-06-13T09:18:05Z"
        }
      ],
      "code": "SUCCESS"
    }

---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/vouchers/redeem"
  prod="/v3/vouchers/redeem"
/>

## What is this?

Redeem multiple vouchers in a single bulk call. Marks each provided voucher code as redeemed.

## When to Use

Use this endpoint when:
- Redeeming several vouchers at once at checkout
- Bulk-processing voucher redemptions from a backend job

## How to Use

POST to `/v3/vouchers/redeem` with an array of voucher codes.

---

<Admonition type="note">

- The URL is consists of [base_URL]/v3/vouchers/redeem.

- [base_URL] is the base URL depending on your environment (Sandbox or production)

</Admonition>

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "codes", type: "Array", description: "Voucher Code", example: "[\"8JwpM3BC\",\"7AbaVWXS\"]" }
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Array", description: "Voucher object",
      children: [
        { name: "key", type: "String", description: "Voucher key", example: "\"EhQKCE1lcmNoYW50EJXVzd3wraqTORIVCgdWb3VjaGVyGgpOQWtsRWZiVmRW\"" },
        { name: "label", type: "String", description: "label of voucher for merchant remarks", example: "\"Free Breakfast\"" },
        { name: "voucherBatchKey", type: "String", description: "Parent key of current voucher", example: "\"EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg\"" },
        { name: "type", type: "String", description: "Define type of vouchers: DISCOUNT, GIFT, CASH", example: "\"GIFT\"" },
        { name: "amount", type: "Integer", description: "Required if type = CASH, notation in cents, eg. RM 1.00 = 100", example: "0" },
        { name: "discountRate", type: "Integer", description: "Required if type = DISCOUNT, notation without decimals, eg. 1% = 100", example: "100" },
        { name: "minimumSpendAmount", type: "Integer", description: "min amount to activate this voucher, required if type = CASH, DISCOUNT, notation in cents, eg. RM 1.00 = 100", example: "100" },
        { name: "origin", type: "String", description: "SYSTEM (voucher code generated from RM server), SELF (voucher code uploaded from merchant csv file)", example: "\"SYSTEM\"" },
        { name: "imageUrl", type: "String", description: "Image URL of current voucher, optional", example: "\"\"" },
        { name: "memberProfile", type: "String", description: "Member profile of user's social media", example: "\"\"" },
        { name: "assignedAt", type: "DateTime", description: "Date time of voucher issuance (UTC)", example: "\"2018-09-28T17:15:17Z\"" },
        { name: "qrUrl", type: "String", description: "QR code for user to scan with Wechat or Facebook to add the voucher into their member account.", example: "QR Url link (refer to below code)" },
        { name: "code", type: "String", description: "Voucher Code, members can keep this code for future redemption. Same as the qrURL below except this code is not a URL.", example: "\"NAklEfbVdV\"" },
        { name: "isShipping", type: "Boolean", description: "True if items/goods to be delivered physically to customers", example: "false" },
        { name: "address", type: "String", description: "Required if isShipping = true", example: "null" },
        { name: "expiry", type: "Object", description: "Expiry date time of current voucher",
      children: [
        { name: "type", type: "String", description: "\"DYNAMIC\" (days from now), \"FIXED\" (specific fixed date)", example: "\"DYNAMIC\"" },
        { name: "day", type: "Integer", description: "Only required by \"DYNAMIC\" expiry type. To indicate number of days from now until expiry.", example: "30" },
        { name: "expiryAt", type: "DateTime", description: "Only required by \"FIXED\". To indicate specific expiry date.", example: "\"2020-10-07T17:44:26.679908+08:00\"" }
      ]},
        { name: "usedAt", type: "DateTime", description: "Date time of voucher being reinstateed (UTC)", example: "\"GIFT\"" },
        { name: "redeemedAt", type: "DateTime", description: "Date time of voucher being redeemed (UTC)", example: "\"GIFT\"" },
        { name: "isDeviceRedeem", type: "Boolean", description: "TRUE means only can be redeemed through merchant app. FALSE means customer can do redemption from own loyalty app.", example: "false" },
        { name: "status", type: "String", description: "Status of current voucher: 1. Merchant created voucher batch (status=VALID)2. Merchant issued or going to transfer voucher to customer (status=ISSUED)3. Merchant shows voucher to customer and customer scans to get it (status=REDEEMED)4. Customers go back to shop and use the voucher (status=reinstate)", example: "\"VALID\"" },
        { name: "createdAt", type: "DateTime", description: "Date time of voucher being created (UTC)", example: "\"2018-06-21T11:08:00Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Date time of voucher being updated (UTC)", example: "\"2018-09-28T17:19:44.686549977Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />


<!-- SPDX-License-Identifier: Apache-2.0 -->
