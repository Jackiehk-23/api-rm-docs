---
id: get-merchant
title: Merchant Info
sidebar_label: Merchant Info
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/partner/merchants/{merchantID}

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/partner/merchants/1629258448138509563" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9..." \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585"
  response: |
    {
      "item": {
        "merchant": {
          "id": "1629258448138509563",
          "companyName": "Ed Testing",
          "status": "REVIEWING",
          "isActive": true
        },
        "settlement": {
          "id": "1629258558902992793",
          "merchantId": "1629258448138509563",
          "isDefault": true,
          "status": "REVIEWING"
        }
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="GET"
  sandbox="/v3/partner/merchants/{merchantID}"
  prod="/v3/partner/merchants/{merchantID}"
/>

## What is this?

Retrieve detailed information about a specific merchant under your Partner account, including merchant details, settlement information, and document status.

## When to Use

Use this endpoint when you:
- Need to view a specific merchant's complete details
- Want to check the merchant's settlement or document status
- Need to verify merchant information for support tickets

<Admonition type="note">
This endpoint is for merchants with a Partner account. To activate a Partner account, [contact us](https://revenuemonster.my/about-us).
</Admonition>

## How to Use

### Step 1: Get the Merchant ID

Locate the `merchantID` for the merchant you want to retrieve. You can get this from the [Get Merchants](./get-merchants) endpoint.

### Step 2: Make the GET Request

Include the `merchantID` as a path parameter in the URL.

### Step 3: Review the Response

The response contains `merchant` and `settlement` objects with complete details.

---

## Request Parameters

<ParamTable
  title="Path Parameters"
  rows={[
    { name: "merchantID", type: "String", required: true, description: "The unique ID of the merchant to retrieve", example: "\"1629258448138509563\"" }
  ]}
/>

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "item", type: "Object", description: "Contains merchant and settlement objects",
      children: [
        { name: "merchant", type: "Object", description: "Merchant details",
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
            { name: "createdAt", type: "DateTime", description: "Account creation timestamp", example: "\"2021-08-18T03:47:28Z\"" },
            { name: "updatedAt", type: "DateTime", description: "Last update timestamp", example: "\"2021-08-18T03:47:28Z\"" }
          ]
        },
        { name: "settlement", type: "Object", description: "Settlement details",
          children: [
            { name: "id", type: "String", description: "Unique settlement ID", example: "\"1629258558902992793\"" },
            { name: "merchantId", type: "String", description: "Associated merchant ID", example: "\"1629258448138509563\"" },
            { name: "isDefault", type: "Boolean", description: "Whether this is the default settlement account", example: "true" },
            { name: "companyName", type: "String", description: "Company name", example: "\"REVENUE MONSTER\"" },
            { name: "companyType", type: "String", description: "Type of company incorporation", example: "\"SOLE PROPRIETOR\"" },
            { name: "registrationNumber", type: "String", description: "Company registration number", example: "\"\"" },
            { name: "businessCategory", type: "String", description: "Business category", example: "\"\"" },
            { name: "countryCode", type: "String", description: "Country code for contact", example: "\"60\"" },
            { name: "phoneNumber", type: "String", description: "Contact phone number", example: "\"377334080\"" },
            { name: "addressLine1", type: "String", description: "Street address line 1", example: "\"\"" },
            { name: "city", type: "String", description: "City", example: "\"\"" },
            { name: "state", type: "String", description: "State/Province", example: "\"\"" },
            { name: "postcode", type: "String", description: "Postal/ZIP code", example: "\"\"" },
            { name: "country", type: "String", description: "Country", example: "\"Malaysia\"" },
            { name: "isSameBusinessAddress", type: "Boolean", description: "Whether settlement address matches business address", example: "false" },
            { name: "status", type: "String", description: "Settlement status (\"REVIEWING\", \"ACTIVE\")", example: "\"REVIEWING\"" },
            { name: "document", type: "Object", description: "Uploaded document URLs",
              children: [
                { name: "ctosFileUrl", type: "String", description: "CTOS file URL", example: "\"\"" },
                { name: "ownerICFileUrl", type: "String", description: "Owner IC file URL", example: "\"\"" },
                { name: "directorICFileUrl", type: "String", description: "Director IC file URL", example: "\"\"" },
                { name: "shareHolderICFileUrl", type: "String", description: "Shareholder IC file URL", example: "\"\"" },
                { name: "businessRegistrationFileUrl", type: "String", description: "Business registration file URL", example: "\"\"" },
                { name: "bankStatementFileUrl", type: "String", description: "Bank statement file URL", example: "\"\"" },
                { name: "moaFileUrl", type: "String", description: "MOA file URL", example: "\"\"" },
                { name: "form24FileUrl", type: "String", description: "Form 24 file URL", example: "\"\"" },
                { name: "form49FileUrl", type: "String", description: "Form 49 file URL", example: "\"\"" },
                { name: "section14FileUrl", type: "String", description: "Section 14 file URL", example: "\"\"" },
                { name: "form44FileUrl", type: "String", description: "Form 44 file URL", example: "\"\"" },
                { name: "businessSitePhotoFileUrl", type: "String", description: "Business site photo file URL", example: "\"\"" },
                { name: "essmDocumentFileUrl", type: "String", description: "ESSM document file URL", example: "\"\"" },
                { name: "letterOfConsentFileUrl", type: "String", description: "Letter of consent file URL", example: "\"\"" }
              ]
            },
            { name: "documentFile", type: "Object", description: "Uploaded document file details",
              children: [
                { name: "CTOSFileURL", type: "String", description: "CTOS file URL", example: "null" },
                { name: "OwnerICFileURL", type: "String", description: "Owner IC file URL", example: "null" },
                { name: "DirectorICFileURL", type: "String", description: "Director IC file URL", example: "null" },
                { name: "ShareHolderICFileURL", type: "String", description: "Shareholder IC file URL", example: "null" },
                { name: "BusinessRegistrationFileURL", type: "String", description: "Business registration file URL", example: "null" },
                { name: "BankStatementFileURL", type: "String", description: "Bank statement file URL", example: "null" },
                { name: "MOAFileURL", type: "String", description: "MOA file URL", example: "null" },
                { name: "Form24FileURL", type: "String", description: "Form 24 file URL", example: "null" },
                { name: "Form49FileURL", type: "String", description: "Form 49 file URL", example: "null" },
                { name: "Section14FileURL", type: "String", description: "Section 14 file URL", example: "null" },
                { name: "Form44FileURL", type: "String", description: "Form 44 file URL", example: "null" },
                { name: "BusinessSitePhotoFileURL", type: "String", description: "Business site photo file URL", example: "null" }
              ]
            },
            { name: "bankAccountNo", type: "String", description: "Bank account number (masked)", example: "\"\"" },
            { name: "bankAccountType", type: "String", description: "Bank account type", example: "\"\"" },
            { name: "bankAccountHolderName", type: "String", description: "Bank account holder name", example: "\"\"" },
            { name: "bankName", type: "String", description: "Bank name", example: "\"\"" },
            { name: "bankCode", type: "String", description: "Bank code", example: "\"\"" },
            { name: "averageTicketSize", type: "Integer", description: "Average transaction ticket size", example: "0" },
            { name: "averageTurnoverPerMonth", type: "Integer", description: "Average monthly turnover", example: "0" },
            { name: "createdAt", type: "DateTime", description: "Creation timestamp", example: "\"2021-08-18T04:03:15Z\"" },
            { name: "updatedAt", type: "DateTime", description: "Last update timestamp", example: "\"2021-08-18T04:03:15Z\"" }
          ]
        }
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the request succeeded. Otherwise returns an error code.", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->