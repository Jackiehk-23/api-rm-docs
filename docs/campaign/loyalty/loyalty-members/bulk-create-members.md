---
id: bulk-create-members
title: Bulk Create Members
sidebar_label: Bulk Create Members
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/members

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "members": [
        {
          "name": "testing 1",
          "countryCode": "60",
          "phoneNumber": "1622288812",
          "nric": "970503145887",
          "email": "test@email.com",
          "gender": "MALE",
          "state": "",
          "address": {
            "addressLine1": "",
            "addressLine2": "",
            "postcode": "52100",
            "city": "",
            "country": ""
          },
          "loyaltyPoint": 10
        },
        {
          "name": "testing 2",
          "countryCode": "60",
          "phoneNumber": "1622288813",
          "nric": "970503145887",
          "email": "test@email.com",
          "gender": "MALE",
          "state": "",
          "address": {
            "addressLine1": "",
            "addressLine2": "",
            "postcode": "52100",
            "city": "",
            "country": ""
          },
          "loyaltyPoint": 0
        }
      ]
    }

examples:
  request: |
    curl --location --request POST "{{open_base_path}}/v3/loyalty/members" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
    --data {
    	"members": [{
    	    "name": "testing 1",
    	    "countryCode": "60",
    	    "phoneNumber": "1622288812",
    	    "nric": "970503145887",
    	    "email": "test@email.com",
    	    "gender": "MALE",
    	    "state": "",
    	    "address": {
    	      "addressLine1": "",
    	      "addressLine2": "",
    	      "postcode": "52100",
    	      "city": "",
    	      "country": ""
    	     },
    	     "loyaltyPoint": 10
    	    },
    	    {
    	    "name": "testing 2",
    	    "countryCode": "60",
    	    "phoneNumber": "1622288813",
    	    "nric": "970503145887",
    	    "email": "test@email.com",
    	    "gender": "MALE",
    	    "state": "",
    	    "address": {
    	      "addressLine1": "",
    	      "addressLine2": "",
    	      "postcode": "52100",
    	      "city": "",
    	      "country": ""
    	    }
    	}]
    }
  body: |
    There is no example body request.
  response: |
    {
      "item": [
        {
          "name": "testing 1",
          "countryCode": "60",
          "phoneNumber": "1622288812",
          "email": "test@email.com",
          "nric": "970503145887",
          "birthDate": "2019-01-01T00:00:00Z",
          "gender": "MALE",
          "address": {
            "postcode": "52100"
          },
          "loyaltyPoint": 10,
          "status": "FAILED",
          "error": "MEMBER_REGISTERED"
        },
        {
          "name": "testing 2",
          "countryCode": "60",
          "phoneNumber": "1622288813",
          "email": "test@email.com",
          "nric": "970503145887",
          "birthDate": "2019-01-01T00:00:00Z",
          "gender": "MALE",
          "address": {
            "postcode": "52100"
          },
          "loyaltyPoint": 0,
          "status": "FAILED",
          "error": "MEMBER_REGISTERED"
        }
      ],
      "code": "SUCCESS"
    }
---

Bulk-create multiple loyalty members in a single request.

## When to Use

Use this endpoint when:
- Importing customers from a CRM or CSV
- Onboarding many members at once

## How to Use

POST an array of member objects to `/v3/loyalty/members`.

---

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "members", type: "Array", required: true, description: "Array of member objects to create",
      children: [
        { name: "name", type: "String", required: true, description: "Member name", example: "\"testing 1\"" },
        { name: "countryCode", type: "String", required: true, description: "Country code of member contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", required: true, description: "Phone number of member", example: "\"1622288812\"" },
        { name: "nric", type: "String", required: true, description: "IC Number", example: "\"970503145887\"" },
        { name: "email", type: "String", required: true, description: "Email address of member", example: "\"test@email.com\"" },
        { name: "gender", type: "String", required: true, description: "Gender", example: "\"MALE\"" },
        { name: "state", type: "String", description: "Member state", example: "\"\"" },
        { name: "address", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "addressLine1", type: "String", description: "Address 1", example: "\"\"" },
        { name: "addressLine2", type: "String", description: "Address 2", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode", example: "\"52100\"" },
        { name: "city", type: "String", description: "City", example: "\"\"" },
        { name: "country", type: "String", description: "Country", example: "\"\"" }
      ]},
        { name: "loyaltyPoint", type: "Integer", required: true, description: "Loyalty Point", example: "10" }
      ]}
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Array", description: "Array of member creation results",
      children: [
        { name: "name", type: "String", description: "Member name", example: "\"testing 1\"" },
        { name: "countryCode", type: "String", description: "Country code of member contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of member", example: "\"1622288812\"" },
        { name: "email", type: "String", description: "Email address of member", example: "\"test@email.com\"" },
        { name: "nric", type: "String", description: "IC Number", example: "\"970503145887\"" },
        { name: "birthDate", type: "String", description: "Member Birth Date", example: "\"2019-01-01T00:00:00Z\"" },
        { name: "gender", type: "String", description: "Gender", example: "\"MALE\"" },
        { name: "address", type: "Object", description: "Refer to explanation below",
      children: [
        { name: "postcode", type: "String", description: "Postcode", example: "\"52100\"" }
      ]},
        { name: "loyaltyPoint", type: "Integer", description: "Loyalty Point", example: "10" },
        { name: "status", type: "String", description: "Creation status of this member (e.g. SUCCESS, FAILED)", example: "\"FAILED\"" },
        { name: "error", type: "String", description: "Error code when status is FAILED (Refer Appendix 1: Error Codes)", example: "\"MEMBER_REGISTERED\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<a id="item" />

<a id="address" />

<!-- SPDX-License-Identifier: Apache-2.0 -->
