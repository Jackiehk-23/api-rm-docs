---
id: user-profile
title: Get User Profile
sidebar_label: Get User Profile
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/user

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
        "id": "2728070797661038926",
        "firstName": "M",
        "lastName": "YUSSUF",
        "countryCode": "60",
        "phoneNumber": "176473298",
        "email": "yussuf@revenuemonster.my",
        "avatarUrl": "https://storage.googleapis.com/rm-dev-asset/img/avatar.png",
        "status": "ACTIVE",
        "storeId": ["6883264812332703106"],
        "isActive": true,
        "createdAt": "2018-05-14T09:26:23Z",
        "updatedAt": "2018-05-15T03:29:56Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/user"
  prod="/v3/user"
/>

:::note
To query for ALL users under this merchant.
:::

### Request Parameters:

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Array", description: "Array of user object",
      children: [
        { name: "id", type: "String", description: "User ID", example: "“8190656045166232716”" },
        { name: "firstName", type: "String", description: "First name of user", example: "“MOHAMED”" },
        { name: "lastName", type: "String", description: "Last name of user", example: "“YUSSUF”" },
        { name: "countryCode", type: "String", description: "Country code of user contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of user", example: "\"377334080\"" },
        { name: "email", type: "String", description: "Email address of user", example: "\"yussuf@revenuemonster.my\"" },
        { name: "avatarUrl", type: "String", description: "Public URL to show user’s avatar", example: "\"https://storage.googleapis.com/rm-prod-asset/img/avatar.png\"" },
        { name: "status", type: "String", description: "Current status of user", example: "“ACTIVE”" },
        { name: "storeId", type: "String", description: "Store ID", example: "\"6170506694335521334\"" },
        { name: "isActive", type: "Boolean", description: "User active or deactivated status", example: "true" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of user", example: "\"2018-02-12T08:53:13Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of user", example: "\"2018-02-12T08:53:13Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

