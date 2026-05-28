---
id: update-merchant
title: Update Merchant
sidebar_label: Update Merchant

api:
  method: PATCH
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantID}

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body:
    type: json
    example: |
      {
        "brandName": "Revenue Monster",
        "websiteUrl": "https://revenuemonster.my",
        "registrationNumber": "XAS1233123",
        "establishedAt": "2006-01-02T15:04:05Z"
      }

examples:
  request: |
    curl --location --request PATCH "https://sb-open.revenuemonster.my/v3/partner/merchant/1629258448138509563" \
      --header "Content-Type: application/json" \
      --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
      --header "X-Signature: sha256 Uf8oEHcq3l5ZkPc/y9eUsRjoKkx0dLUQz5PEFntWUZcR4A0DYdtQ9+VTx5Rq4e4XsRVp+4KZb4cwpDfzPABCZA==" \
      --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
      --header "X-Timestamp: 1527407052" \
      --data-raw '{
        "brandName": "Revenue Monster",
        "websiteUrl": "https://revenuemonster.my",
        "registrationNumber": "XAS1233123",
        "establishedAt": "2006-01-02T15:04:05Z",
        "addressLine1": "1, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postCode": "81300",
        "city": "SKUDAI",
        "state": "JOHOR",
        "country": "MALAYSIA",
        "countryCode": "60",
        "phoneNumber": "187824152",
        "companyName": "Revenue Monster",
        "companyType": "PRIVATE LIMITED COMPANY (SDN BHD)",
        "businessCategory": "COMPUTER AND ELECTRONICS",
        "averageTicketSize": 1000000,
        "averageTurnoverPerMonth": 1000000,
        "businessScope": "some business scope",
        "invoiceAddress": {
            "addressLine1": "1, Jalan Pertanian 25",
            "addressLine2": "Taman Universiti",
            "postCode": "81300",
            "city": "SKUDAI",
            "state": "JOHOR",
            "country": "MALAYSIA"
        },
        "document": {
            "ctosFileUrl": "https://somefilenedpoint.com",
            "ownerICFileUrl": "https://somefilenedpoint.com",
            "directorICFileUrl": "https://somefilenedpoint.com",
            "shareHolderICFileUrl": "https://somefilenedpoint.com",
            "businessRegistrationFileUrl": "https://somefilenedpoint.com",
            "bankStatementFileUrl": "https://somefilenedpoint.com",
            "moaFileUrl": "https://somefilenedpoint.com",
            "form24FileUrl": "https://somefilenedpoint.com",
            "form49FileUrl": "https://somefilenedpoint.com",
            "section14FileUrl": "https://somefilenedpoint.com",
            "form44FileUrl": "https://somefilenedpoint.com",
            "businessSitePhotoFileUrl": "https://somefilenedpoint.com"
        },
        "inspectList": [
            {
                "fullName": "NG SZE CHEN",
                "gender": "MALE",
                "birthday": "1999-07-14T15:59:59Z",
                "nationality": "MALAYSIAN",
                "idType": "IC",
                "idNo": "2131290134"
            }
        ],
        "bankAccountType": "CORPORATE",
        "bankAccountHolderName": "Revenue Monster",
        "bankAccountNo": "32312323",
        "bankCode": "HLBB",
        "latitude": 0.0,
        "longitude": 0.0,
        "paymentSubscription": "BOTH",
        "terminalOfflineEWallet": false,
        "terminalOfflineCreditCard": false,
        "onlineCreditCard": false
    }'
  response: |
    {
      "item": {
        "id": "1622609881925201839",
        "merchantId": "1622608181378590507",
        "isDefault": true,
        "companyName": "Revenue Monster",
        "companyType": "PRIVATE LIMITED COMPANY (SDN BHD)",
        "registrationNumber": "XAS1233123",
        "businessCategory": "COMPUTER AND ELECTRONICS",
        "businessScope": "some business scope",
        "sourceOfFunds": "",
        "customerOrigin": "",
        "establishedAt": "2006-01-02T15:04:05Z",
        "countryCode": "60",
        "phoneNumber": "187824152",
        "addressLine1": "1, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postcode": "81300",
        "city": "SKUDAI",
        "state": "JOHOR",
        "country": "MALAYSIA",
        "isSameBusinessAddress": false,
        "invoiceAddress": {
          "addressLine1": "1, Jalan Pertanian 25",
          "addressLine2": "Taman Universiti",
          "postcode": "81300",
          "city": "SKUDAI",
          "state": "JOHOR",
          "country": "MALAYSIA"
        },
        "inspectList": [
          {
            "fullName": "NG SZE CHEN",
            "email": "",
            "position": "",
            "countryCode": "",
            "phoneNumber": "",
            "gender": "MALE",
            "birthday": "1999-07-14T15:59:59Z",
            "nationality": "MALAYSIAN",
            "idType": "IC",
            "idNo": "2131290134",
            "beginAt": "",
            "endAt": ""
          }
        ],
        "status": "UNVERIFIED",
        "document": {
          "ctosFileUrl": "https://somefilenedpoint.com",
          "ownerICFileUrl": "https://somefilenedpoint.com",
          "directorICFileUrl": "https://somefilenedpoint.com",
          "shareHolderICFileUrl": "https://somefilenedpoint.com",
          "businessRegistrationFileUrl": "https://somefilenedpoint.com",
          "bankStatementFileUrl": "https://somefilenedpoint.com",
          "moaFileUrl": "https://somefilenedpoint.com",
          "form24FileUrl": "https://somefilenedpoint.com",
          "form49FileUrl": "https://somefilenedpoint.com",
          "section14FileUrl": "https://somefilenedpoint.com",
          "form44FileUrl": "https://somefilenedpoint.com",
          "businessSitePhotoFileUrl": "https://somefilenedpoint.com"
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
        "bankAccountNo": "32312323",
        "bankAccountType": "CORPORATE",
        "bankAccountHolderName": "Revenue Monster",
        "bankName": "HONG LEONG BANK",
        "bankCode": "HLBB",
        "averageTicketSize": 0,
        "averageTurnoverPerMonth": 0,
        "paymentSubscription": "",
        "createdAt": "2021-06-02T14:37:25+08:00",
        "updatedAt": "2021-06-02T14:37:25+08:00"
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="PATCH"
  sandbox="/v3/partner/merchant/{merchantID}"
  prod="/v3/partner/merchant/{merchantID}"
/>

<Admonition type="note">
This endpoint is for merchants with a Partner account. To activate a Partner account, [contact us](https://revenuemonster.my/about-us).
</Admonition>

## What is this?

Update an existing merchant's information under your Partner account. Use this to modify company details, address, bank account information, and business details.

## When to Use

Use this endpoint when:
- A merchant needs to update their company information
- Business details such as address or contact information change
- Bank account or settlement information needs to be updated

---

## How to Use

### Step 1: Get the Merchant ID

Locate the `merchantID` for the merchant you want to update. You can get this from the [Get Merchants](./get-merchants) endpoint.

### Step 2: Prepare the Updated Data

Gather the fields you want to update. Only include the fields that need to be changed — all fields are optional.

### Step 3: Make the PATCH Request

Send the updated merchant information with the `merchantID` as a path parameter.

### Step 4: Review the Response

Check the `code` field. If `"SUCCESS"`, the merchant was updated. The full merchant object is returned.

---

### Request Parameters

Pass the merchant ID as a path parameter in the URL.

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "brandName", type: "String", example: "\"Revenue Monster\"" },
    { name: "websiteUrl", type: "String", example: "\"https://revenuemonster.my\"" },
    { name: "registrationNumber", type: "String", example: "\"XAS1233123\"" },
    { name: "establishedAt", type: "DateTime", example: "\"2006-01-02T15:04:05Z\"" },
    { name: "addressLine1", type: "String", example: "\"1, Jalan Pertanian 25\"" },
    { name: "addressLine2", type: "String", example: "\"Taman Universiti\"" },
    { name: "postCode", type: "String", example: "\"81300\"" },
    { name: "city", type: "String", example: "\"SKUDAI\"" },
    { name: "state", type: "String", example: "\"JOHOR\"" },
    { name: "country", type: "String", example: "\"MALAYSIA\"" },
    { name: "countryCode", type: "String", example: "\"60\"" },
    { name: "phoneNumber", type: "String", example: "\"187824152\"" },
    { name: "companyName", type: "String", example: "\"Revenue Monster\"" },
    { name: "companyType", type: "String", example: "\"PRIVATE LIMITED COMPANY (SDN BHD)\"" },
    { name: "businessCategory", type: "String", example: "\"COMPUTER AND ELECTRONICS\"" },
    { name: "averageTicketSize", type: "Integer", example: "1000000" },
    { name: "averageTurnoverPerMonth", type: "Integer", example: "1000000" },
    { name: "businessScope", type: "String", example: "\"some business scope\"" },
    { name: "invoiceAddress", type: "Object", description: "Invoice address",
      children: [
        { name: "addressLine1", type: "String", description: "Address line 1", example: "\"1, Jalan Pertanian 25\"" },
        { name: "addressLine2", type: "String", description: "Address line 2", example: "\"Taman Universiti\"" },
        { name: "postCode", type: "String", description: "Postcode", example: "\"81300\"" },
        { name: "city", type: "String", description: "City", example: "\"SKUDAI\"" },
        { name: "state", type: "String", description: "State", example: "\"JOHOR\"" },
        { name: "country", type: "String", description: "Country", example: "\"MALAYSIA\"" }
      ]
    },
    { name: "document", type: "Object", description: "Supporting document URLs",
      children: [
        { name: "ctosFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "ownerICFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "directorICFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "shareHolderICFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "businessRegistrationFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "bankStatementFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "moaFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "form24FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "form49FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "section14FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "form44FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
        { name: "businessSitePhotoFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" }
      ]
    },
    { name: "inspectList", type: "Array", description: "List of persons to inspect",
      children: [
        { name: "fullName", type: "String", example: "\"NG SZE CHEN\"" },
        { name: "gender", type: "String", example: "\"MALE\"" },
        { name: "birthday", type: "DateTime", example: "\"1999-07-14T15:59:59Z\"" },
        { name: "nationality", type: "String", example: "\"MALAYSIAN\"" },
        { name: "idType", type: "String", example: "\"IC\"" },
        { name: "idNo", type: "String", example: "\"2131290134\"" }
      ]
    },
    { name: "bankAccountType", type: "String", example: "\"CORPORATE\"" },
    { name: "bankAccountHolderName", type: "String", example: "\"Revenue Monster\"" },
    { name: "bankAccountNo", type: "String", example: "\"32312323\"" },
    { name: "bankCode", type: "String", example: "\"HLBB\"" },
    { name: "latitude", type: "Float", example: "0.0" },
    { name: "longitude", type: "Float", example: "0.0" },
    { name: "paymentSubscription", type: "String", example: "\"BOTH\"" },
    { name: "terminalOfflineEWallet", type: "Boolean", example: "false" },
    { name: "terminalOfflineCreditCard", type: "Boolean", example: "false" },
    { name: "onlineCreditCard", type: "Boolean", example: "false" }
  ]}
/>

---

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "The updated settlement record.",
      children: [
        { name: "id", type: "String", description: "Settlement ID", example: "\"1629258558902992793\"" },
        { name: "merchantId", type: "String", description: "Merchant ID", example: "\"1629258448138509563\"" },
        { name: "isDefault", type: "Boolean", description: "Whether this is the default settlement account", example: "true" },
        { name: "companyName", type: "String", description: "Company name of merchant", example: "\"REVENUE MONSTER\"" },
        { name: "companyType", type: "String", description: "Type of company incorporation", example: "\"PRIVATE LIMITED COMPANY (SDN BHD)\"" },
        { name: "registrationNumber", type: "String", description: "Registration number of merchant", example: "\"12344\"" },
        { name: "businessCategory", type: "String", description: "Business category of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "businessScope", type: "String", description: "Business scope of merchant", example: "\"some business scope\"" },
        { name: "sourceOfFunds", type: "String", description: "Source of funds of merchant", example: "\"\"" },
        { name: "customerOrigin", type: "String", description: "Customer origin of merchant", example: "\"\"" },
        { name: "establishedAt", type: "DateTime", description: "Established date time of merchant", example: "\"2006-01-02T15:04:05Z\"" },
        { name: "countryCode", type: "String", description: "Country code of merchant contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of merchant", example: "\"187824152\"" },
        { name: "addressLine1", type: "String", description: "Address 1 of merchant", example: "\"1, Jalan Pertanian 25\"" },
        { name: "addressLine2", type: "String", description: "Address 2 of merchant", example: "\"Taman Universiti\"" },
        { name: "postcode", type: "String", description: "Postcode of merchant", example: "\"81300\"" },
        { name: "city", type: "String", description: "City of merchant", example: "\"SKUDAI\"" },
        { name: "state", type: "String", description: "State of merchant", example: "\"JOHOR\"" },
        { name: "country", type: "String", description: "Country of merchant", example: "\"MALAYSIA\"" },
        { name: "isSameBusinessAddress", type: "Boolean", example: "false" },
        { name: "invoiceAddress", type: "Object", description: "Invoice address",
          children: [
            { name: "addressLine1", type: "String", description: "Address line 1", example: "\"1, Jalan Pertanian 25\"" },
            { name: "addressLine2", type: "String", description: "Address line 2", example: "\"Taman Universiti\"" },
            { name: "postcode", type: "String", description: "Postcode", example: "\"81300\"" },
            { name: "city", type: "String", description: "City", example: "\"SKUDAI\"" },
            { name: "state", type: "String", description: "State", example: "\"JOHOR\"" },
            { name: "country", type: "String", description: "Country", example: "\"MALAYSIA\"" }
          ]
        },
        { name: "inspectList", type: "Array", description: "List of persons to inspect",
          children: [
            { name: "fullName", type: "String", example: "\"NG SZE CHEN\"" },
            { name: "email", type: "String", example: "\"\"" },
            { name: "position", type: "String", example: "\"\"" },
            { name: "countryCode", type: "String", example: "\"60\"" },
            { name: "phoneNumber", type: "String", example: "\"\"" },
            { name: "gender", type: "String", example: "\"MALE\"" },
            { name: "birthday", type: "DateTime", example: "\"1999-07-14T15:59:59Z\"" },
            { name: "nationality", type: "String", example: "\"MALAYSIAN\"" },
            { name: "idType", type: "String", example: "\"IC\"" },
            { name: "idNo", type: "String", example: "\"2131290134\"" },
            { name: "beginAt", type: "String", example: "\"\"" },
            { name: "endAt", type: "String", example: "\"\"" }
          ]
        },
        { name: "status", type: "String", description: "Current status of settlement", example: "\"UNVERIFIED\"" },
        { name: "document", type: "Object", description: "Supporting document URLs",
          children: [
            { name: "ctosFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "ownerICFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "directorICFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "shareHolderICFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "businessRegistrationFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "bankStatementFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "moaFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "form24FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "form49FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "section14FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "form44FileUrl", type: "String", example: "\"https://somefileendpoint.com\"" },
            { name: "businessSitePhotoFileUrl", type: "String", example: "\"https://somefileendpoint.com\"" }
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
        { name: "bankAccountNo", type: "String", example: "\"32312323\"" },
        { name: "bankAccountType", type: "String", example: "\"CORPORATE\"" },
        { name: "bankAccountHolderName", type: "String", example: "\"Revenue Monster\"" },
        { name: "bankName", type: "String", example: "\"HONG LEONG BANK\"" },
        { name: "bankCode", type: "String", example: "\"HLBB\"" },
        { name: "averageTicketSize", type: "Integer", example: "0" },
        { name: "averageTurnoverPerMonth", type: "Integer", example: "0" },
        { name: "paymentSubscription", type: "String", example: "\"\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of settlement", example: "\"2021-06-02T14:37:25+08:00\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of settlement", example: "\"2021-06-02T14:37:25+08:00\"" }
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the call succeeded. Otherwise returns an error code object. See Appendix 1: Error Codes.", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->