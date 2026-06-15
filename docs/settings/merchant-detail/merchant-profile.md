---
id: merchant-profile
title: Get Merchant Profile
sidebar_label: Get Merchant Profile
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/merchant

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
        "id": "5611759774758429587",
        "companyName": "YUSSUF TEST",
        "companyType": "SOLE PROPRIETORSHIP",
        "companyLogoUrl": "https://storage.googleapis.com/rm-dev-merchant/5611759774758429587/logo/merchant.jpeg",
        "registrationNumber": "12343",
        "businessCategory": "INSURANCE SERVICES",
        "establishedAt": "2018-05-12T16:00:00Z",
        "countryCode": "60",
        "phoneNumber": "167367171",
        "addressLine1": "20, JALAN JASA 38, TAMAN MUTIARA RINI",
        "addressLine2": "",
        "postcode": "81300",
        "city": "AYER HITAM",
        "state": "JOHOR",
        "country": "MALAYSIA",
        "invoiceAddress": {
          "addressLine1": "20, JALAN JASA 38, TAMAN MUTIARA RINI",
          "addressLine2": "",
          "postcode": "81300",
          "city": "AYER HITAM",
          "state": "JOHOR",
          "country": "MALAYSIA"
        },
        "isActive": true,
        "status": "VERIFIED",
        "isMasterMerchant": false,
        "masterMerchantId": "2301663653361832803",
        "isPartner": false,
        "partnerId": "2301663653361832803",
        "gstNo": "",
        "createdAt": "2018-05-14T09:26:22Z",
        "updatedAt": "2018-05-22T05:23:02Z"
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="GET"
  sandbox="/v3/merchant"
  prod="/v3/merchant"
/>





## What is this?

Retrieve the authenticated merchant's full profile — company details, address, status, and partner flags.

## When to Use

Use this endpoint when you:
- Display merchant info in a dashboard
- Need to verify the merchant's verification or active status
- Check `isPartner` / `isMasterMerchant` flags

## How to Use

### Step 1: Authenticate

Obtain a valid `accessToken` for the merchant.

### Step 2: Send the GET Request

No request body or query parameters required.

### Step 3: Read the Response

The `item` object contains the merchant profile.

---

## Request Parameters

No request body. Authenticated headers only.

---

## Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Object of item details.",
      children: [
        { name: "id", type: "String", description: "Merchant ID", example: "\"6170506694335521334\"" },
        { name: "companyName", type: "String", description: "Company name of merchant", example: "\"REVENUE MONSTER\"" },
        { name: "companyType", type: "String", description: "Type of company incorporation", example: "\"SOLE PROPRIETOR\"" },
        { name: "companyLogoUrl", type: "String", description: "Public URL to show merchant's logo", example: "\"https://storage.googleapis.com/rm-dev-asset/img/merchant.png\"" },
        { name: "registrationNumber", type: "String", description: "Registration number of merchant", example: "“12344”" },
        { name: "businessCategory", type: "String", description: "Business category of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "establishedAt", type: "DateTime", description: "Established date time of merchant", example: "\"2018-03-26T04:50:57Z\"" },
        { name: "countryCode", type: "String", description: "Country code of merchant contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of merchant", example: "\"377334080\"" },
        { name: "addressLine1", type: "String", description: "Address 1 of merchant", example: "\"20, JALAN JASA 38, TAMAN MUTIARA RINI\"" },
        { name: "addressLine2", type: "String", description: "Address 2 of merchant", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode of merchant", example: "“81300”" },
        { name: "city", type: "String", description: "City of merchant", example: "\"Selangor\"" },
        { name: "state", type: "String", description: "State of merchant", example: "\"Selangor\"" },
        { name: "country", type: "String", description: "Country of merchant", example: "\"Malaysia\"" },
        { name: "invoiceAddress", type: "Object", description: "Object of Invoice Address",
      children: [
        { name: "addressLine1", type: "String", description: "Address 1 of merchant", example: "\"20, JALAN JASA 38, TAMAN MUTIARA RINI\"" },
        { name: "addressLine2", type: "String", description: "Address 2 of merchant", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode of merchant", example: "“81300”" },
        { name: "city", type: "String", description: "City of merchant", example: "\"Selangor\"" },
        { name: "state", type: "String", description: "State of merchant", example: "\"Selangor\"" },
        { name: "country", type: "String", description: "Country of merchant", example: "\"Malaysia\"" }
      ]},
        { name: "isActive", type: "Boolean", description: "Merchant active or deactivated status", example: "true" },
        { name: "status", type: "String", description: "Current status of merchant", example: "“REVIEWING”" },
        { name: "isMasterMerchant", type: "Boolean", description: "Master Merchant flag", example: "true" },
        { name: "masterMerchantId", type: "String", description: "Master Merchant ID, if any", example: "\"2301663653361832803\"" },
        { name: "isPartner", type: "Boolean", description: "Partner Merchant flag", example: "true" },
        { name: "partnerId", type: "String", description: "Partner Merchant ID, if any", example: "\"2301663653361832803\"" },
        { name: "gstNo", type: "String", description: "GST No, if any", example: "\"\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of merchant", example: "\"2018-02-12T08:53:13Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of merchant", example: "\"2018-02-12T08:53:13Z\"" }
      ]},
    { name: "code", type: "String", description: "`\"SUCCESS\"` if the call succeeded. Otherwise returns an error code. See [Error Codes](../../error-codes).", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
