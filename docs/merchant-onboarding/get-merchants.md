---
id: get-merchants
title: Merchants Info
sidebar_label: Merchants Info
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/partner/merchants

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/partner/merchants" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585"
  response: |
    {
      "items": [
        {
          "id": "1629258448138509563",
          "companyName": "Ed Testing",
          "status": "REVIEWING",
          "isActive": true,
          "isPartner": true
        }
      ],
      "code": "SUCCESS",
      "meta": {}
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/partner/merchants"
  prod="/v3/partner/merchants"
/>

## What is this?

Retrieve a list of all merchants under your Partner account. This endpoint returns merchant details including registration status, company information, and subscription settings.

## When to Use

Use this endpoint when you:
- Need to view all merchants in your partner account
- Want to check merchant status or details
- Need to display merchant list in your dashboard

:::note
This endpoint is for merchants with a Partner account. To activate a Partner account, [contact us](https://revenuemonster.my/about-us).
:::

## How to Use

### Step 1: Authenticate Your Request

Include your `Authorization` header with the Bearer token obtained from the Client Credentials flow.

### Step 2: Make the GET Request

Send a GET request to the endpoint. No request body is required.

### Step 3: Review the Response

The response contains an `items` array with all your merchants. Check the `status` field to see each merchant's current state.

---

## Request Parameters

This is a GET request with no parameters.

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "items", type: "Array", description: "Array of merchant objects",
      children: [
        { name: "id", type: "String", description: "Unique merchant ID", example: "\"6170506694335521334\"" },
        { name: "companyName", type: "String", description: "Registered company name", example: "\"REVENUE MONSTER\"" },
        { name: "brandName", type: "String", description: "Brand name if different from company", example: "\"\"" },
        { name: "companyType", type: "String", description: "Type of company incorporation", example: "\"SOLE PROPRIETOR\"" },
        { name: "companyLogoUrl", type: "String", description: "Public URL for company logo", example: "\"https://storage.googleapis.com/rm-sandbox-asset/img/merchant.png\"" },
        { name: "registrationNumber", type: "String", description: "Company registration number", example: "\"\"" },
        { name: "businessCategory", type: "String", description: "Business category", example: "\"\"" },
        { name: "countryCode", type: "String", description: "Country code for contact", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Contact phone number", example: "\"377334080\"" },
        { name: "addressLine1", type: "String", description: "Street address line 1", example: "\"\"" },
        { name: "city", type: "String", description: "City", example: "\"\"" },
        { name: "state", type: "String", description: "State/Province", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postal/ZIP code", example: "\"\"" },
        { name: "country", type: "String", description: "Country", example: "\"\"" },
        { name: "isActive", type: "Boolean", description: "Whether the merchant account is active", example: "true" },
        { name: "status", type: "String", description: "Current status (\"REVIEWING\", \"UNVERIFIED\", \"ACTIVE\")", example: "\"REVIEWING\"" },
        { name: "isPartner", type: "Boolean", description: "Whether this is a partner merchant", example: "true" },
        { name: "partnerId", type: "String", description: "Partner ID if applicable", example: "\"\"" },
        { name: "gstNo", type: "String", description: "GST registration number", example: "\"\"" },
        { name: "subscription", type: "Object", description: "Subscription flags",
          children: [
            { name: "terminalOfflineEWallet", type: "Boolean", description: "Offline e-wallet terminal enabled", example: "false" },
            { name: "terminalOfflineCreditCard", type: "Boolean", description: "Offline credit card terminal enabled", example: "false" },
            { name: "onlineCreditCard", type: "Boolean", description: "Online credit card enabled", example: "false" }
          ]
        },
        { name: "registrationSource", type: "String", description: "How the merchant was registered", example: "\"OPEN_API\"" },
        { name: "createdAt", type: "DateTime", description: "Account creation timestamp", example: "\"2021-08-18T03:47:28Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update timestamp", example: "\"2021-08-18T03:47:28Z\"" }
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded. Otherwise returns an error code.", example: "\"SUCCESS\"" },
    { name: "meta", type: "Object", description: "Pagination metadata (empty if no pagination)", example: "{}" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->