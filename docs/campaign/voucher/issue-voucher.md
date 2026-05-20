---
id: issue-voucher
title: Issue Voucher
sidebar_label: Issue Voucher
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/voucher-batch/{batchkey}/issue

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: "{}"

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "code": "NAklEfbVdV",
        "qrUrl": "http://api.local.rm:8080/qr/4118165203679668885/voucher/NAklEfbVdV"
      },
      "code": "SUCCESS"
    }
---



import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/voucher-batch/{batchkey}/issue"
  prod="/v3/voucher-batch/{batchkey}/issue"
/>



import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <HttpMethodBadge method="POST" /><br/>
Url : `https://open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg/issue`<br/><br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg/issue`

:::note
To issue vouchers for customer.
:::

### Request Parameters

:::note

- The URL is consists of [base_URL]/v3/voucher-batch/[batchkey]/issue.

- [base_URL] is the base URL depending on your environment (Sandbox or production)

- [batchkey] can be retrieved by viewing at merchant portal or using endpoint [`Get voucher By Batches`](https://doc.revenuemonster.my/#get-voucher-by-batches)

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Voucher object",
      children: [
        { name: "code", type: "String", description: "Voucher Code, members can keep this code for future redemption. Same as the qrURL below except this code is not a URL.", example: "\"NAklEfbVdV\"" },
        { name: "qrUrl", type: "String", description: "QR code for user to scan with Wechat or Facebook to add the voucher into their member account.", example: "QR Url link (refer to below code)" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>


<br/>

<a id="item" />

