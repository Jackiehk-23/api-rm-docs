---
id: get-voucher-batches
title: Get Voucher Batches
sidebar_label: Get Voucher Batches
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/voucher-batches

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
          "id": "6544507929221794245",
          "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQxZP495jpsOla",
          "label": "Shell Voucher",
          "type": "CASH",
          "amount": 10000,
          "discountRate": 0,
          "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/1d2721426e06da4b2b459446135da29e.jpeg",
          "quantity": 1,
          "balanceQuantity": 0,
          "usedQuantity": 1,
          "status": "COMPLETED",
          "expiry": {
            "type": "DYNAMIC",
            "day": 1,
            "expiredAt": "2050-12-31T23:59:59Z"
          },
          "origin": "SYSTEM",
          "isShipping": false,
          "reason": "",
          "isDeviceRedeem": true,
          "createdAt": "2018-09-21T07:12:31Z",
          "updatedAt": "2018-09-26T07:15:54Z"
        },
        {
          "id": "8223209398981211509",
          "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQ9eq2n5SsrY9y",
          "label": "Wedding",
          "type": "GIFT",
          "discountRate": 0,
          "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/1d2721426e06da4b2b459446135da29e.jpeg",
          "quantity": 2,
          "balanceQuantity": 0,
          "usedQuantity": 0,
          "status": "COMPLETED",
          "expiry": {
            "type": "DYNAMIC",
            "day": 1,
            "expiredAt": "2050-12-31T23:59:59Z"
          },
          "origin": "SYSTEM",
          "isShipping": false,
          "reason": "",
          "isDeviceRedeem": false,
          "createdAt": "2018-09-19T03:41:54Z",
          "updatedAt": "2018-09-19T03:41:54Z"
        },
        {
          "id": "1626310995848872959",
          "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQ_4eJj7-n9MgW",
          "label": "ALA10OFF",
          "type": "DISCOUNT",
          "discountRate": 1000,
          "minimumSpendAmount": 100,
          "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/f03508e50866abd615fc65c63857858f.jpeg",
          "quantity": 50,
          "balanceQuantity": 48,
          "usedQuantity": 2,
          "status": "COMPLETED",
          "expiry": {
            "type": "DYNAMIC",
            "day": 1,
            "expiredAt": "2050-12-31T23:59:59Z"
          },
          "origin": "SYSTEM",
          "isShipping": false,
          "isStatic": true,
          "staticCode": "ALA10OFF",
          "isDeviceRedeem": true,
          "source": "",
          "sourceType": "",
          "sourcePrefix": "",
          "isMarketPlace": false,
          "createdAt": "2021-07-15T01:03:15Z",
          "updatedAt": "2021-07-15T01:53:38Z"
       }
      ],
      "code": "SUCCESS",
      "meta": {
        "count": 3
      }
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/voucher-batches"
  prod="/v3/voucher-batches"
/>

**Method :** <HttpMethodBadge method="GET" />
Url : `https://open.revenuemonster.my/v3/voucher-batches`
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher-batches`

:::note
To get multiple voucher batches.
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "items", type: "Array", description: "Voucher object array",
      children: [
        { name: "id", type: "String", description: "Voucher ID", example: "“6544507929221794245\"" },
        { name: "key", type: "String", description: "Vocher Key", example: "\"EhQKCE1lcmNoYW50EJXVzd3wraqTORIVCgdWb3VjaGVyGgpOQWtsRWZiVmRW\"" },
        { name: "label", type: "String", description: "label of voucher for merchant remarks", example: "\"Free Breakfast”" },
        { name: "type", type: "String", description: "Define type of vouchers: DISCOUNT, GIFT, “CASH\"", example: "“GIFT\"" },
        { name: "amount", type: "Integer", description: "Required if type = CASH, notation in cents, eg. RM 1.00 = 100", example: "10000" },
        { name: "discountRate", type: "Integer", description: "Required if type = DISCOUNT, notation without decimals, eg. 1% = 100", example: "0" },
        { name: "minimumSpendAmount", type: "Integer", description: "Minimum spend amount", example: "0" },
        { name: "imageUrl", type: "String", description: "Image URL of current voucher, optional", example: "Image Url link (refer to below code)" },
        { name: "quantity", type: "Integer", description: "Total quantity of voucher(s) in this batch", example: "1" },
        { name: "balanceQuantity", type: "Integer", description: "Total quantity of voucher(s) remaining in this batch", example: "0" },
        { name: "usedQuantity", type: "Integer", description: "Total quantity of voucher(s) used/assigned/redeemed in this batch", example: "1" },
        { name: "status", type: "String", description: "Voucher's status", example: "\"COMPLETED\"" },
        { name: "expiry", type: "Object", description: "Expiry date time of current voucher", example: "(Refer below)" },
        { name: "origin", type: "String", description: "SYSTEM (voucher code generated from RM server), SELF (voucher code uploaded from merchant csv file)", example: "“SYSTEM”" },
        { name: "isShipping", type: "Boolean", description: "True if items/goods to be delivered physically to customers", example: "false" },
        { name: "reason", type: "String", description: "Will show if voucher batch is fail during creation. Optional.", example: "”\"" },
        { name: "staticCode", type: "String", description: "Voucher's code", example: "\"ABC123\"" },
        { name: "isDeviceRedeem", type: "Boolean", description: "TRUE means only can be redeemed through merchant app. FALSE means customer can do redemption from own loyalty app.", example: "false" },
        { name: "createdAt", type: "DateTime", description: "Date time of voucher being created (UTC)", example: "\"2018-06-21T11:08:00Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Date time of voucher being updated (UTC)", example: "\"2018-09-28T17:19:44.686549977Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="items" />

