---
id: loyalty-members
title: Get Loyalty Members
sidebar_label: Get Loyalty Members
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/members

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
          "id": "2940921291529816182",
          "name": "Gan",
          "email": "junkai@revenuemonster.my",
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
          "countryCode": "60",
          "phoneNumber": "167367171",
          "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
          "memberTier": null,
          "status": "ACTIVE",
          "createdAt": "2018-09-19T10:00:21Z"
        },
        {
          "id": "3328113896344269171",
          "name": "Sharon",
          "email": "sharon@apacvebture.com",
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
          "loyaltyPoint": 99,
          "countryCode": "60",
          "phoneNumber": "1126195189",
          "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
          "memberTier": null,
          "status": "ACTIVE",
          "createdAt": "2018-09-13T09:17:24Z"
        },
        {
          "id": "2777058682717858418",
          "name": "yussuf",
          "email": "yussuf@gmail.com",
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
          "loyaltyPoint": 400,
          "countryCode": "60",
          "phoneNumber": "176473298",
          "profileImageUrl": "https://storage.googleapis.com/rm-dev-asset/img/avatar.png",
          "memberTier": null,
          "status": "ACTIVE",
          "createdAt": "2018-09-26T07:13:13Z"
        }
      ],
      "code": "SUCCESS",
      "meta": {
        "count": 3
      }
    }
---

List all loyalty members under the merchant.

## When to Use

Use this endpoint when:
- Displaying a member directory in your dashboard
- Exporting members for reporting

## How to Use

GET `/v3/loyalty/members` with signed authentication headers.

---

### Request Parameters

No request body. Authenticated headers only.

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "items", type: "Array", description: "Array of loyalty member objects",
      children: [
        { name: "id", type: "String", description: "Member ID", example: "\"2940921291529816182\"" },
        { name: "name", type: "String", description: "Member name", example: "\"Gan\"" },
        { name: "email", type: "String", description: "Email address of member", example: "\"junkai@revenuemonster.my\"" },
        { name: "nric", type: "String", description: "IC Number", example: "\"\"" },
        { name: "address", type: "Object", description: "Member address",
      children: [
        { name: "addressLine1", type: "String", description: "Address 1", example: "\"\"" },
        { name: "addressLine2", type: "String", description: "Address 2", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode", example: "\"\"" },
        { name: "city", type: "String", description: "City", example: "\"\"" },
        { name: "state", type: "String", description: "State", example: "\"\"" },
        { name: "country", type: "String", description: "Country", example: "\"\"" }
      ]},
        { name: "gender", type: "String", description: "Gender", example: "\"\"" },
        { name: "state", type: "String", description: "Member state", example: "\"\"" },
        { name: "birthDate", type: "String", description: "Member Birth Date", example: "\"0001-01-01T00:00:00Z\"" },
        { name: "loyaltyPoint", type: "Integer", description: "Loyalty Point", example: "0" },
        { name: "countryCode", type: "String", description: "Country code of member contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of member", example: "\"167367171\"" },
        { name: "profileImageUrl", type: "String", description: "Member profile image URL", example: "\"https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png\"" },
        { name: "memberTier", type: "String", description: "Member tier", example: "null" },
        { name: "status", type: "String", description: "Member status", example: "\"ACTIVE\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time", example: "\"2018-09-19T10:00:21Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" },
    { name: "meta", type: "Object", description: "Pagination metadata",
      children: [
        { name: "count", type: "Integer", description: "Total number of members returned", example: "3" }
      ]}
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
