---
id: register-loyalty-member
title: Register Loyalty Member
sidebar_label: Register Loyalty Member

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/member

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json
  body:
    type: json
    example: |
      {
        "name": "Oska",
        "countryCode": "60",
        "phoneNumber": "1878241234",
        "email": "developer.oskang@gmail.com",
        "nric": "950711011234",
        "birthDate": "1995-07-11T00:00:00Z",
        "gender": "MALE",
        "point": 0,
        "address": {
          "addressLine1": "17, Jalan Pertanian 25",
          "addressLine2": "Taman Universiti",
          "postCode": "81301",
          "city": "SKUDAI",
          "state": "JOHOR",
          "country": "MALAYSIA"
        }
      }

examples:
  request: |
    curl --location --request GET "{{open_base_path}}/v3/loyalty/member" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
    --data "{
      "name": "Oska",
      "countryCode": "60",
      "phoneNumber": "1878241234",
      "email": "developer.oskang@gmail.com",
      "nric": "950711011234",
      "birthDate": "1995-07-11T00:00:00Z",
      "gender": "MALE",
      "point": 0,
      "address": {
        "addressLine1": "17, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postCode": "81301",
        "city": "SKUDAI",
        "state": "JOHOR",
        "country": "MALAYSIA"
      }
    }"
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "id": "",
        "key": "EhIKBk1lbWJlchDCkZOfvLyOphYSGQoNTWVtYmVyUHJvZmlsZRCZp_uzvLyOphY",
        "name": "Oska",
        "email": "",
        "nric": "950711011234",
        "birthDate": "1995-07-11",
        "gender": "MALE",
        "state": "JOHOR",
        "address": {
          "addressLine1": "17, Jalan Pertanian 25",
          "addressLine2": "Taman Universiti",
          "postcode": "81301",
          "city": "SKUDAI",
          "state": "JOHOR",
          "country": "MALAYSIA"
        },
        "memberTier": null,
        "totalLoyaltyPoint": 0,
        "hasPinCode": false,
        "loyaltyPointBalance": 0,
        "spendingPoint": 0,
        "creditBalance": 0,
        "status": "ACTIVE",
        "createdAt": "2020-11-30T07:53:37.0578116Z",
        "updatedAt": "0001-01-01T00:00:00Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/loyalty/member"
  prod="/v3/loyalty/member"
/>

:::note
Using Query String to **Get User Profile** by input the **country code** and **phone number**  
:::

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "name", type: "String", required: true, description: "Member name", example: "\"Oska\"" },
    { name: "countryCode", type: "String", required: true, description: "Country code of member contact number", example: "\"60\"" },
    { name: "phoneNumber", type: "String", required: true, description: "Phone number of member", example: "\"1878241234\"" },
    { name: "email", type: "String", required: true, description: "Email address of member", example: "\"developer.oskang@gmail.com\"" },
    { name: "nric", type: "String", required: true, description: "IC Number", example: "\"950711011234\"" },
    { name: "birthDate", type: "String", required: true, description: "Member Birth Date", example: "\"1995-07-11T00:00:00Z\"" },
    { name: "gender", type: "String", required: true, description: "Gender", example: "\"MALE\"" },
    { name: "point", type: "Integer", required: true, description: "Loyalty Point", example: "0" },
    { name: "address", type: "Object", required: true, description: "Refer to explanation below", example: "(Refer to explanation below)" }
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Profile object",
      children: [
        { name: "id", type: "String", description: "Profile ID", example: "\"\"" },
        { name: "key", type: "String", description: "Profile Key (Internal Usage)", example: "\"EhIKBk1lbWJlchDOuOKz24XWkg4SGQoNTWVtYmVyUHJvZmlsZRDl-MTxiPOPjzY\"" },
        { name: "name", type: "String", description: "Profile name", example: "\"Oska\"" },
        { name: "email", type: "String", description: "Profile email", example: "\"developer.oskang@gmail.com\"" },
        { name: "nric", type: "String", description: "IC Number", example: "\"950711011234\"" },
        { name: "birthDate", type: "String", description: "User Birth Date (YYYY:MM:DD)", example: "\"1995-07-11\"" },
        { name: "gender", type: "String", description: "Gender", example: "\"MALE\"" },
        { name: "address", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "addressLine1", type: "String", description: "Address 1", example: "\"\"" },
        { name: "addressLine2", type: "String", description: "Address 2", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode", example: "\"\"" },
        { name: "city", type: "String", description: "City", example: "\"\"" },
        { name: "state", type: "String", description: "State", example: "\"\"" },
        { name: "country", type: "String", description: "Country", example: "\"\"" }
      ]},
        { name: "memberTier", type: "String", description: "Member Tier Point", example: "null" },
        { name: "totalLoyaltyPoint", type: "Integer", description: "Total Loyalty Point", example: "0" },
        { name: "hasPinCode", type: "Boolean", description: "User Pin", example: "false" },
        { name: "loyaltyPointBalance", type: "Integer", description: "Total Point Balance left", example: "0" },
        { name: "spendingPoint", type: "Integer", description: "Point Spend", example: "0" },
        { name: "creditBalance", type: "Integer", description: "Credit Balance", example: "0" },
        { name: "status", type: "String", description: "Profile Status", example: "\"ACTIVE\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time", example: "\"2018-10-19T03:39:47Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time", example: "\"2020-06-29T10:14:33Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

<a id="address" />

