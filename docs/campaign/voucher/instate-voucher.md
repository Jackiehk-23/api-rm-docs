---
id: reinstate-voucher
title: Reinstate Voucher
sidebar_label: Reinstate Voucher
api:
  method: PATCH
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/voucher/{code}/reinstate

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "pin": "string",
      "reason": "string"
    }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/voucher/2yA2gRND/reinstate" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV2E1NHl5dE1QSUZnIl0sImV4cCI6MTc0NTA1MDY2MCwiaWF0IjoxNzQyNDU4NjYwLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UW5vcURvcm1kblpjWSIsIm5iZiI6MTc0MjQ1ODY2MCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.T-6nuPM-V0dMV6cgFrfzznx-pdOwyUVvM6EdIxpsQYu8GWjGIN6xrZzBbldy7Fafp2zuhKLfRkE6G-FVuSfV3Qg_S8hDJD4SpB0_bawuXwNmq-tMp1WOFkE0IOfMtfCowp4z6arDayhQTIT0qO36aQ1XzZrsPwqvRJ8fo_YfsurE8Z1UnSXukZWPTpjDs7fio8ZEVcNlWDWuimGHJcpYuH4FgvIdMJ1oWqnwZtvf9gDqmig5ddSpPEVTjf9cGMVBdZlwPXXw0mRuI0ClKMbBgrgUwmnYnIT3zPTRxNwMPKj4AkI3QnLbFkLvTDpk9wrIgrXLFNEZ37j9mQtehuTSgQ" \
    --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1717039047" \
    --data-raw "{
    \"pin\": \"321123\"
     \"reason\": \"wrong void\",
    }"
  body: |
    There is no example body request.
  response: |
    {
        "item": {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGgg4SndwTTNCQw",
            "label": "1",
            "redemptionRuleKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIaCg5SZWRlbXB0aW9uUnVsZRCR8Jqz_tGOmhg",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQtfzY7rPRjpoY",
            "type": "CASH",
            "amount": 200,
            "discountRate": 0,
            "minimumSpendAmount": 100,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "2025-04-08T03:35:45Z",
            "payload": null,
            "qrUrl": "",
            "code": "8JwpM3BC",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 30,
                "expiredAt": "2025-05-08T03:36:17Z"
            },
            "usedAt": "2025-04-08T03:36:22Z",
            "redeemedAt": "2025-04-08T03:36:17Z",
            "isDeviceRedeem": false,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2025-04-08T03:35:25Z",
            "updatedAt": "2025-04-08T03:36:56Z"
        },
        "code": "SUCCESS"
    }
---



import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="PATCH"
  sandbox="/v3/voucher/{code}/reinstate"
  prod="/v3/voucher/{code}/reinstate"
/>


import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <HttpMethodBadge method="PATCH" /><br/>
Url :`https://open.revenuemonster.my/v3/voucher/8JwpM3BC/reinstate`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher/8JwpM3BC/reinstate`

:::note
To reinstate voucher(s) of customer.
:::

:::note

- The URL is consists of [base_URL]/v3/voucher/[code]/reinstate.

- [base_URL] is the base URL depending on your environment (Sandbox or production)

- [code] is the respond `code` generated from [`Issue Voucher`](https://doc.revenuemonster.my/#post-issue-voucher) endpoint.

:::

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "pin", type: "String", description: "User Pin", example: "\"321123\"" },
    { name: "reason", type: "String", description: "Reinstate reason", example: "\"wrong void\"" }
  ]}
/>


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


<br/>

<a id="item" />

