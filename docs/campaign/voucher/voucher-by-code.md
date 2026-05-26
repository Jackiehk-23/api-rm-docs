---
id: voucher-by-code
title: Get Voucher By Code
sidebar_label: Get Voucher By Code
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/voucher/{voucher_code}

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {}

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIVCgdWb3VjaGVyGgpOQWtsRWZiVmRW",
        "label": "oijfge",
        "redemptionRuleKey": null,
        "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg",
        "type": "GIFT",
        "amount": 0,
        "discountRate": 0,
        "minimumSpendAmount": 0,
        "origin": "SYSTEM",
        "imageUrl": "",
        "memberProfile": null,
        "redemptionRule": null,
        "assignedAt": "2018-09-28T17:15:17Z",
        "payload": null,
        "qrUrl": "http://api.revenuemonster.my/qr/4118165203679668885/voucher/NAklEfbVdV",
        "code": "NAklEfbVdV",
        "isShipping": false,
        "address": null,
        "expiry": {
          "type": "DYNAMIC",
          "day": 100,
          "expiredAt": "2019-01-06T17:19:35Z"
        },
        "usedAt": "2018-09-28T17:19:44.686549737Z",
        "redeemedAt": "2018-09-28T17:19:35Z",
        "isDeviceRedeem": false,
        "status": "VOID",
        "createdAt": "2018-06-21T11:08:00Z",
        "updatedAt": "2018-09-28T17:19:44.686549977Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/voucher/{voucher_code}"
  prod="/v3/voucher/{voucher_code}"
/>

**Method :** <HttpMethodBadge method="POST" />
Url :`https://open.revenuemonster.my/v3/voucher/NAklEfbVdV`
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher/NAklEfbVdV`

:::note
To get single voucher by code
:::

### Request Parameters

:::note

- The URL is consists of [base_URL]/v3/voucher/[voucher_code].

- [base_URL] is the base URL depending on your environment (Sandbox or production)

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Voucher object",
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
        { name: "type", type: "String", description: "DYNAMIC (days from now), FIXED (specific fixed date)", example: "\"DYNAMIC\"" },
        { name: "day", type: "Integer", description: "Only required by DYNAMIC expiry type. To indicate number of days from now until expiry.", example: "30" },
        { name: "expiryAt", type: "DateTime", description: "Only required by FIXED. To indicate specific expiry date.", example: "\"2020-10-07T17:44:26.679908+08:00\"" }
      ]},
        { name: "usedAt", type: "DateTime", description: "Date time of voucher being voided (UTC)", example: "\"GIFT\"" },
        { name: "redeemedAt", type: "DateTime", description: "Date time of voucher being redeemed (UTC)", example: "\"GIFT\"" },
        { name: "isDeviceRedeem", type: "Boolean", description: "TRUE means only can be redeemed through merchant app. FALSE means customer can do redemption from own loyalty app.", example: "false" },
        { name: "status", type: "String", description: "Status of current voucher: 1. Merchant created voucher batch (status=VALID)2. Merchant issued or going to transfer voucher to customer (status=ISSUED)3. Merchant shows voucher to customer and customer scans to get it (status=REDEEMED)4. Customers go back to shop and use the voucher (status=VOID)", example: "\"VALID\"" },
        { name: "createdAt", type: "DateTime", description: "Date time of voucher being created (UTC)", example: "\"2018-06-21T11:08:00Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Date time of voucher being updated (UTC)", example: "\"2018-09-28T17:19:44.686549977Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

