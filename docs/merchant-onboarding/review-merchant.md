---
id: submit-merchant-for-review
title: Submit Merchant for Review
sidebar_label: Submit Merchant for Review
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantID}

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "comment": "Submitting merchant for review"
    }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/partner/merchant/1629292083526787883" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
    --data '{
      "comment": "Submitting merchant for review"
    }'
  response: |
    {
      "item": {
        "id": "1629297229825579798",
        "merchantId": "1629292083526787883",
        "isDefault": true,
        "companyName": "",
        "companyType": "",
        "registrationNumber": "",
        "businessCategory": "",
        "businessScope": "",
        "sourceOfFunds": "",
        "customerOrigin": "",
        "establishedAt": "0001-01-01T00:00:00Z",
        "countryCode": "",
        "phoneNumber": "",
        "addressLine1": "",
        "addressLine2": "",
        "postcode": "",
        "city": "",
        "state": "",
        "country": "",
        "isSameBusinessAddress": false,
        "invoiceAddress": null,
        "inspectList": null,
        "status": "REVIEWING",
        "document": {
          "ctosFileUrl": "",
          "ownerICFileUrl": "",
          "directorICFileUrl": "",
          "shareHolderICFileUrl": "",
          "businessRegistrationFileUrl": "",
          "bankStatementFileUrl": "",
          "moaFileUrl": "",
          "form24FileUrl": "",
          "form49FileUrl": "",
          "section14FileUrl": "",
          "form44FileUrl": "",
          "businessSitePhotoFileUrl": "",
          "essmDocumentFileUrl": "",
          "letterOfConsentFileUrl": ""
        },
        "documentFile": {
          "CTOSFileURL": null,
          "OwnerICFileURL": null,
          "DirectorICFileURL": null,
          "ShareHolderICFileURL": null,
          "BusinessRegistrationFileURL": null,
          "BankStatementFileURL": null,
          "MOAFileURL": null,
          "Form24FileURL": null,
          "Form49FileURL": null,
          "Section14FileURL": null,
          "Form44FileURL": null,
          "BusinessSitePhotoFileURL": null
        },
        "bankAccountNo": "",
        "bankAccountType": "",
        "bankAccountHolderName": "",
        "bankName": "",
        "bankCode": "",
        "averageTicketSize": 0,
        "averageTurnoverPerMonth": 0,
        "paymentSubscription": "",
        "createdAt": "2021-08-18T14:33:49Z",
        "updatedAt": "2021-08-18T14:33:49Z"
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/partner/merchant/{merchantID}"
  prod="/v3/partner/merchant/{merchantID}"
/>

:::note
This endpoint is for merchants with a Partner account. To activate a Partner account, [contact us](https://revenuemonster.my/about-us).
:::

## What is this?

Submit a merchant's completed application for review by Revenue Monster. Once submitted, the merchant's status changes to `REVIEWING` and RM will assess the application.

## When to Use

Use this endpoint when:
- A merchant has completed all required fields and documents
- You are ready to submit the merchant for RM's review process

:::tip
Before submitting, ensure all required information is complete. Incomplete applications may be rejected.
:::

---

## How to Use

### Step 1: Verify Merchant Completeness

Confirm that all required merchant details and documents have been uploaded. Check the merchant's information using [Get Merchant](./get-merchant.md).

### Step 2: Get the Merchant ID

Locate the `merchantID` for the merchant you want to submit for review.

### Step 3: Make the POST Request

Send the request with the `merchantID` as a path parameter. No request body is required.

### Step 4: Review the Response

Check the `code` field. If `"SUCCESS"`, the merchant has been submitted. The `status` will change to `"REVIEWING"`.

---

### Request Parameters

<ParamTable
  title="Path Parameters"
  rows={[
    { name: "merchantID", type: "String", required: true, description: "The ID of the merchant to submit for review. Pass it in the URL path.", example: "\"1629292083526787883\"" }
  ]}
/>

---

### Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "item", type: "Object", description: "Contains the settlement/merchant details.",
      children: [
        { name: "id", type: "String", description: "Settlement ID", example: "\"1629258558902992793\"" },
        { name: "merchantId", type: "String", description: "Merchant ID", example: "\"1629258448138509563\"" },
        { name: "isDefault", type: "Boolean", description: "Whether this is the default settlement account", example: "true" },
        { name: "companyName", type: "String", description: "Company name of merchant", example: "\"REVENUE MONSTER\"" },
        { name: "companyType", type: "String", description: "Type of company incorporation", example: "\"SOLE PROPRIETOR\"" },
        { name: "registrationNumber", type: "String", description: "Registration number of merchant", example: "\"12344\"" },
        { name: "businessCategory", type: "String", description: "Business category of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "businessScope", type: "String", description: "Business scope of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "sourceOfFunds", type: "String", description: "Source of funds of merchant", example: "\"\"" },
        { name: "customerOrigin", type: "String", description: "Customer origin of merchant", example: "\"\"" },
        { name: "establishedAt", type: "DateTime", description: "Established date time of merchant", example: "\"2018-03-26T04:50:57Z\"" },
        { name: "countryCode", type: "String", description: "Country code of merchant contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of merchant", example: "\"377334080\"" },
        { name: "addressLine1", type: "String", description: "Address 1 of merchant", example: "\"20, JALAN JASA 38, TAMAN MUTIARA RINI\"" },
        { name: "addressLine2", type: "String", description: "Address 2 of merchant", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode of merchant", example: "\"81300\"" },
        { name: "city", type: "String", description: "City of merchant", example: "\"Selangor\"" },
        { name: "state", type: "String", description: "State of merchant", example: "\"Selangor\"" },
        { name: "country", type: "String", description: "Country of merchant", example: "\"Malaysia\"" },
        { name: "isSameBusinessAddress", type: "Boolean", example: "false" },
        { name: "invoiceAddress", type: "Object", example: "null" },
        { name: "inspectList", type: "Object", example: "null" },
        { name: "status", type: "String", description: "Current status of settlement. Changes to \"REVIEWING\" after submission.", example: "\"REVIEWING\"" },
        { name: "document", type: "Object", description: "Uploaded document URLs",
          children: [
            { name: "ctosFileUrl", type: "String", example: "\"\"" },
            { name: "ownerICFileUrl", type: "String", example: "\"\"" },
            { name: "directorICFileUrl", type: "String", example: "\"\"" },
            { name: "shareHolderICFileUrl", type: "String", example: "\"\"" },
            { name: "businessRegistrationFileUrl", type: "String", example: "\"\"" },
            { name: "bankStatementFileUrl", type: "String", example: "\"\"" },
            { name: "moaFileUrl", type: "String", example: "\"\"" },
            { name: "form24FileUrl", type: "String", example: "\"\"" },
            { name: "form49FileUrl", type: "String", example: "\"\"" },
            { name: "section14FileUrl", type: "String", example: "\"\"" },
            { name: "form44FileUrl", type: "String", example: "\"\"" },
            { name: "businessSitePhotoFileUrl", type: "String", example: "\"\"" },
            { name: "essmDocumentFileUrl", type: "String", example: "\"\"" },
            { name: "letterOfConsentFileUrl", type: "String", example: "\"\"" }
          ]
        },
        { name: "documentFile", type: "Object", description: "Uploaded document file URLs",
          children: [
            { name: "CTOSFileURL", type: "String", example: "null" },
            { name: "OwnerICFileURL", type: "String", example: "null" },
            { name: "DirectorICFileURL", type: "String", example: "null" },
            { name: "ShareHolderICFileURL", type: "String", example: "null" },
            { name: "BusinessRegistrationFileURL", type: "String", example: "null" },
            { name: "BankStatementFileURL", type: "String", example: "null" },
            { name: "MOAFileURL", type: "String", example: "null" },
            { name: "Form24FileURL", type: "String", example: "null" },
            { name: "Form49FileURL", type: "String", example: "null" },
            { name: "Section14FileURL", type: "String", example: "null" },
            { name: "Form44FileURL", type: "String", example: "null" },
            { name: "BusinessSitePhotoFileURL", type: "String", example: "null" }
          ]
        },
        { name: "bankAccountNo", type: "String", example: "\"\"" },
        { name: "bankAccountType", type: "String", example: "\"\"" },
        { name: "bankAccountHolderName", type: "String", example: "\"\"" },
        { name: "bankName", type: "String", example: "\"\"" },
        { name: "bankCode", type: "String", example: "\"\"" },
        { name: "averageTicketSize", type: "Integer", example: "0" },
        { name: "averageTurnoverPerMonth", type: "Integer", example: "0" },
        { name: "paymentSubscription", type: "String", example: "\"\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of settlement", example: "\"2021-08-18T14:33:49Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of settlement", example: "\"2021-08-18T14:33:49Z\"" }
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the call succeeded. Otherwise returns an error code object. See Appendix 1: Error Codes.", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
