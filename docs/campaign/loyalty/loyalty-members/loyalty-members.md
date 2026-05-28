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

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/loyalty/members"
  prod="/v3/loyalty/members"
/>

## What is this?

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

<!-- SPDX-License-Identifier: Apache-2.0 -->
