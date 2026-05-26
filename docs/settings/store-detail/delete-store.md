---
id: delete-store
title: Delete Store
sidebar_label: Delete Store
api:
  method: DELETE
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/store/{store_id}

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
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="DELETE"
  sandbox="/v3/store/{store_id}"
  prod="/v3/store/{store_id}"
/>





:::note
To delete specific store under the merchant. Specify `store_id` in your query.
:::

:::warning
Deleted stores cannot be revoked!
:::

### Request Parameters:

:::note

- The URL is consists of `[base_URL]`/v3/store/`[store_id]`

- Pass in `Store ID` in your query

:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

