---
id: voucher-batch-by-key
title: Get Voucher Batch By Key
sidebar_label: Get Voucher Batch By Key
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/voucher-batch/{batchKey}/vouchers

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "items": [
        {
          "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIWCgdWb3VjaGVyGgtVVUVyYTIyVlN5Mg",
          "label": "test",
          "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQi5rUhcrdx78V",
          "type": "CASH",
          "amount": 100,
          "discountRate": 0,
          "minimumSpendAmount": 0,
          "origin": "SYSTEM",
          "imageUrl": "",
          "memberProfile": {
            "id": "1039768290679711875",
            "name": "yussuf",
            "email": "yussuf888@gmail.com",
            "nric": "",
            "address": {
              "addressLine1": "",
              "addressLine2": "",
              "postcode": "",
              "city": "",
              "state": "",
              "country": ""
            },
            "gender": "",
            "state": "",
            "birthDate": "0001-01-01T00:00:00Z",
            "loyaltyPoint": 0,
            "credit": 112,
            "countryCode": "60",
            "phoneNumber": "176473298",
            "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
            "hasPinCode": false,
            "memberTier": null,
            "status": "ACTIVE",
            "createdAt": "2018-10-19T03:39:47Z"
          },
          "assignedAt": "0001-01-01T00:00:00Z",
          "qrUrl": "",
          "code": "UUEra22VSy2",
          "isShipping": false,
          "address": null,
          "expiry": {
            "type": "DYNAMIC",
            "day": 1,
            "expiredAt": "2050-12-31T23:59:59Z"
          },
          "usedAt": "0001-01-01T00:00:00Z",
          "redeemedAt": "2019-03-22T04:58:38Z",
          "isDeviceRedeem": true,
          "status": "REDEEMED",
          "voucherComboKey": null,
          "createdAt": "2019-02-01T03:13:19Z",
          "updatedAt": "2019-03-13T03:16:26Z"
        }
      ],
      "code": "SUCCESS",
      "meta": {
        "count": 1
      }
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/voucher-batch/{batchKey}/vouchers"
  prod="/v3/voucher-batch/{batchKey}/vouchers"
/>

**Method :** <HttpMethodBadge method="GET" />
Url : `https://sb-open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQi5rUhcrdx78V/vouchers`
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQi5rUhcrdx78V/vouchers`

## What is this?

Retrieve all vouchers belonging to a specific voucher batch by its `batchkey`.

## When to Use

Use this endpoint when:
- Listing every voucher in a given batch
- Auditing voucher issuance under a batch

## How to Use

GET `/v3/voucher-batch/{batchkey}/vouchers`. Find `batchkey` via the merchant portal or [Get Voucher Batches](./get-voucher-batches).

---

### Request Parameters

:::note

- The URL is consists of [base_URL]/v3/voucher-batch/[batchkey]/vouchers.

- [batchkey] can be retrieved by viewing at merchant portal or using endpoint [`Get voucher By Batches`](https://doc.revenuemonster.my/#get-voucher-by-batches)

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "items", type: "Object", description: "Transaction object",
      children: [
        { name: "key", type: "String", description: "Voucher key", example: "\"EhQKCE1lcmNoYW50EJXVzd3wraqTORIVCgdWb3VjaGVyGgpOQWtsRWZiVmRW\"" },
        { name: "label", type: "String", description: "label of voucher for merchant remarks", example: "\"Free Breakfast”" },
        { name: "voucherBatchKey", type: "String", description: "Parent key of current voucher", example: "\"EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg\"" },
        { name: "type", type: "String", description: "Define type of vouchers: DISCOUNT, GIFT, CASH", example: "“GIFT\"" },
        { name: "amount", type: "Integer", description: "Required if type = CASH, notation in cents, eg. RM 1.00 = 100", example: "10000" },
        { name: "discountRate", type: "Integer", description: "Required if type = DISCOUNT, notation without decimals, eg. 1% = 100", example: "0" },
        { name: "imageUrl", type: "String", description: "Image URL of current voucher, optional", example: "Image Url link (Refer to the below code)" },
        { name: "quantity", type: "Integer", description: "Total quantity of voucher(s) in this batch", example: "1" },
        { name: "balanceQuantity", type: "Integer", description: "Total quantity of voucher(s) remaining in this batch", example: "0" },
        { name: "usedQuantity", type: "Integer", description: "Total quantity of voucher(s) used/assigned/redeemed in this batch", example: "1" },
        { name: "expiry", type: "Object", description: "Expiry date time of current voucher",
      children: [
        { name: "type", type: "String", description: "DYNAMIC (days from now), FIXED (specific fixed date)", example: "\"DYNAMIC\"" },
        { name: "day", type: "Integer", description: "Only required by DYNAMIC expiry type. To indicate number of days from now until expiry.", example: "30" },
        { name: "expiryAt", type: "DateTime", description: "Only required by FIXED. To indicate specific expiry date.", example: "\"2020-10-07T17:44:26.679908+08:00\"" }
      ]},
        { name: "origin", type: "String", description: "SYSTEM (voucher code generated from RM server), SELF (voucher code uploaded from merchant csv file)", example: "“SYSTEM”" },
        { name: "isShipping", type: "Boolean", description: "True if items/goods to be delivered physically to customers", example: "false" },
        { name: "reason", type: "String", description: "Will show if voucher batch is fail during creation. Optional.", example: "”\"" },
        { name: "isDeviceRedeem", type: "Boolean", description: "TRUE means only can be redeemed through merchant app. FALSE means customer can do redemption from own loyalty app.", example: "false" },
        { name: "createdAt", type: "DateTime", description: "Date time of voucher being created (UTC)", example: "\"2018-06-21T11:08:00Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Date time of voucher being updated (UTC)", example: "\"2018-09-28T17:19:44.686549977Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="items" />


<!-- SPDX-License-Identifier: Apache-2.0 -->
