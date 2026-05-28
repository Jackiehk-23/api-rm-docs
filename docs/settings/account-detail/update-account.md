---
id: update-account
title: Update Account By ID
sidebar_label: Update Account By ID
api:
  method: PUT
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/accounts/{id}

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "brandName": "Revenue Monster",
      "websiteUrl": "https://revenuemonster.my",
      "registrationNumber": "XAS1233123",
      "establishedAt": "2006-01-02T15:04:05Z",
      "addressLine1": "1, Jalan Pertanian 25",
      "addressLine2": "Taman Universiti",
      "postCode": "81302",
      "city": "SKUDAI",
      "state": "JOHOR",
      "country": "MALAYSIA",
      "countryCode": "60",
      "phoneNumber": "167724152",
      "companyName": "Revenue Monster",
      "companyType": "PRIVATE LIMITED COMPANY (SDN BHD)",
      "businessCategory": "COMPUTER AND ELECTRONICS",
      "averageTicketSize": 1000000,
      "averageTurnoverPerMonth": 1000000,
      "businessScope": "some business scope",
      "invoiceAddress": {
        "addressLine1": "1, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postCode": "81302",
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
          "birthday": "2000-07-14T15:59:59Z",
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
      "longitude": 0.0
    }

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/account/{id}" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
    --data-raw "{
        "brandName": "Revenue Monster",
        "websiteUrl": "https://revenuemonster.my",
        "registrationNumber": "XAS1233123",
        "establishedAt": "2006-01-02T15:04:05Z",
        "addressLine1": "1, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postCode": "81302",
        "city": "SKUDAI",
        "state": "JOHOR",
        "country": "MALAYSIA",
        "countryCode": "60",
        "phoneNumber": "167724152",
        "companyName": "Revenue Monster",
        "companyType": "PRIVATE LIMITED COMPANY (SDN BHD)",
        "businessCategory": "COMPUTER AND ELECTRONICS",
        "averageTicketSize": 1000000,
        "averageTurnoverPerMonth": 1000000,
        "businessScope": "some business scope",
        "invoiceAddress": {
            "addressLine1": "1, Jalan Pertanian 25",
            "addressLine2": "Taman Universiti",
            "postCode": "81302",
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
                "birthday": "2000-07-14T15:59:59Z",
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
        "longitude": 0.0
    }"
  body: |
    There is no example body request.
  response: |
    {
      "items": {
        "id": "1596124535165747709",
        "merchantId": "4118165203679668885",
        "isDefault": false,
        "companyName": "Merchant & Testings",
        "companyType": "SOLE PROPRIETORSHIP",
        "registrationNumber": "123455-Test",
        "businessCategory": "BANK, FINANCIAL INSITUTION",
        "businessScope": "Finance industry",
        "sourceOfFunds": "",
        "customerOrigin": "",
        "establishedAt": "2018-05-31T09:06:26Z",
        "countryCode": "60",
        "phoneNumber": "123907657",
        "addressLine1": "1, TEST ROAD 1",
        "addressLine2": "",
        "postcode": "50000",
        "city": "KUALA LUMPUR",
        "state": "KUALA LUMPUR",
        "country": "MALAYSIA",
        "isSameBusinessAddress": false,
        "invoiceAddress": {
          "addressLine1": "1, TEST ROAD 1",
          "addressLine2": "",
          "postcode": "50000",
          "city": "KUALA LUMPUR",
          "state": "KUALA LUMPUR",
          "country": "MALAYSIA"
        },
        "inspectList": [
          {
            "fullName": "DFDSF",
            "email": "",
            "position": "DIRECTOR",
            "countryCode": "",
            "phoneNumber": "",
            "gender": "MALE",
            "birthday": "2018-05-20T23:59:59.000Z",
            "nationality": "ALBANIAN",
            "idType": "IC",
            "idNo": "123456789098",
            "beginAt": "",
            "endAt": ""
          }
        ],
        "status": "UNVERIFIED",
        "document": {
          "ctosFileUrl": "",
          "ownerICFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/T3duZXJJQ0ZpbGVVUkw=.png",
          "directorICFileUrl": "",
          "shareHolderICFileUrl": "",
          "businessRegistrationFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/QnVzaW5lc3NSZWdpc3RyYXRpb25GaWxlVVJM.png",
          "bankStatementFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/YmFua1N0YXRlbWVudEZpbGVVcmw=.png",
          "moaFileUrl": "",
          "form24FileUrl": "",
          "form49FileUrl": "",
          "section14FileUrl": "",
          "form44FileUrl": "",
          "businessSitePhotoFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/YnVzaW5lc3NTaXRlUGhvdG9GaWxlVXJs.png",
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
        "bankAccountNo": "asdsad13123123",
        "bankAccountType": "INDIVIDUAL",
        "bankAccountHolderName": "Revenue Monster Sdn Bhd",
        "bankName": "KUWAIT FINANCE HOUSE",
        "bankCode": "KFHO",
        "averageTicketSize": 0,
        "averageTurnoverPerMonth": 0,
        "paymentSubscription": "",
        "createdAt": "2021-01-13T04:35:32Z",
        "updatedAt": "2021-01-13T04:35:32Z"
      },
      "code": "SUCCESS"
    }
---

import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="PUT"
  sandbox="/v3/accounts/{id}"
  prod="/v3/accounts/{id}"
/>

## What is this?

Update the details of an existing account. Use this to modify company info, addresses, banking details, documents, and inspect list entries for a registered account.

## When to Use

Use this endpoint when:
- An account's company details or registration info changes
- You need to upload or replace document URLs (CTOS, bank statement, etc.)
- Banking details or business addresses require updating
- Directors / shareholders on the `inspectList` need to be amended

## How to Use

### Step 1: Get the Account ID

Locate the account `id` you want to update. Retrieve it from the [Get Accounts](./get-accounts) endpoint.

### Step 2: Prepare the Updated Fields

Include only the fields you want to update. Leave unchanged fields out of the body, or pass their current values.

### Step 3: Send the PUT Request

Pass the account `id` as a path parameter. Include the updated fields in the JSON body.

### Step 4: Review the Response

A `"SUCCESS"` code with the updated account object confirms the change.

---

## Request Parameters

Pass the account `id` as a path parameter in the URL.

<ParamTable
  title="Request Body"
  rows={[
    { name: "brandName", type: "String", description: "Brand name of the company.", example: "\"Revenue Monster\"" },
    { name: "websiteUrl", type: "String", description: "Company website URL.", example: "\"https://revenuemonster.my\"" },
    { name: "registrationNumber", type: "String", description: "Company registration number.", example: "\"XAS1233123\"" },
    { name: "establishedAt", type: "DateTime", description: "Date the company was established (ISO 8601).", example: "\"2006-01-02T15:04:05Z\"" },
    { name: "addressLine1", type: "String", description: "Primary address line.", example: "\"1, Jalan Pertanian 25\"" },
    { name: "addressLine2", type: "String", description: "Secondary address line.", example: "\"Taman Universiti\"" },
    { name: "postCode", type: "String", description: "Postal code.", example: "\"81302\"" },
    { name: "city", type: "String", description: "City.", example: "\"SKUDAI\"" },
    { name: "state", type: "String", description: "State or province.", example: "\"JOHOR\"" },
    { name: "country", type: "String", description: "Country.", example: "\"MALAYSIA\"" },
    { name: "countryCode", type: "String", description: "Country dialing code.", example: "\"60\"" },
    { name: "phoneNumber", type: "String", description: "Contact phone number.", example: "\"167724152\"" },
    { name: "companyName", type: "String", description: "Registered company name.", example: "\"Revenue Monster\"" },
    { name: "companyType", type: "String", description: "Type of company incorporation.", example: "\"PRIVATE LIMITED COMPANY (SDN BHD)\"" },
    { name: "businessCategory", type: "String", description: "Business category.", example: "\"COMPUTER AND ELECTRONICS\"" },
    { name: "averageTicketSize", type: "Integer", description: "Average transaction ticket size.", example: "1000000" },
    { name: "averageTurnoverPerMonth", type: "Integer", description: "Average monthly turnover.", example: "1000000" },
    { name: "businessScope", type: "String", description: "Description of business scope.", example: "\"some business scope\"" },
    { name: "invoiceAddress", type: "Object", description: "Invoice / billing address.",
      children: [
        { name: "addressLine1", type: "String", description: "Address line 1.", example: "\"1, Jalan Pertanian 25\"" },
        { name: "addressLine2", type: "String", description: "Address line 2.", example: "\"Taman Universiti\"" },
        { name: "postCode", type: "String", description: "Postal code.", example: "\"81302\"" },
        { name: "city", type: "String", description: "City.", example: "\"SKUDAI\"" },
        { name: "state", type: "String", description: "State.", example: "\"JOHOR\"" },
        { name: "country", type: "String", description: "Country.", example: "\"MALAYSIA\"" }
      ]
    },
    { name: "document", type: "Object", description: "Document file URLs.",
      children: [
        { name: "ctosFileUrl", type: "String", description: "CTOS report file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "ownerICFileUrl", type: "String", description: "Owner IC file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "directorICFileUrl", type: "String", description: "Director IC file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "shareHolderICFileUrl", type: "String", description: "Shareholder IC file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "businessRegistrationFileUrl", type: "String", description: "Business registration file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "bankStatementFileUrl", type: "String", description: "Bank statement file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "moaFileUrl", type: "String", description: "MOA file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "form24FileUrl", type: "String", description: "Form 24 file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "form49FileUrl", type: "String", description: "Form 49 file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "section14FileUrl", type: "String", description: "Section 14 file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "form44FileUrl", type: "String", description: "Form 44 file URL.", example: "\"https://somefilenedpoint.com\"" },
        { name: "businessSitePhotoFileUrl", type: "String", description: "Business site photo URL.", example: "\"https://somefilenedpoint.com\"" }
      ]
    },
    { name: "inspectList", type: "Array", description: "List of inspected directors / shareholders.",
      children: [
        { name: "fullName", type: "String", description: "Full name.", example: "\"NG SZE CHEN\"" },
        { name: "gender", type: "String", description: "Gender.", example: "\"MALE\"" },
        { name: "birthday", type: "DateTime", description: "Date of birth (ISO 8601).", example: "\"2000-07-14T15:59:59Z\"" },
        { name: "nationality", type: "String", description: "Nationality.", example: "\"MALAYSIAN\"" },
        { name: "idType", type: "String", description: "Identification type.", example: "\"IC\"" },
        { name: "idNo", type: "String", description: "Identification number.", example: "\"2131290134\"" }
      ]
    },
    { name: "bankAccountType", type: "String", description: "Bank account type (`\"CORPORATE\"`, `\"INDIVIDUAL\"`).", example: "\"CORPORATE\"" },
    { name: "bankAccountHolderName", type: "String", description: "Bank account holder name.", example: "\"Revenue Monster\"" },
    { name: "bankAccountNo", type: "String", description: "Bank account number.", example: "\"32312323\"" },
    { name: "bankCode", type: "String", description: "Bank code. See [Bank Code](../../bank-code).", example: "\"HLBB\"" },
    { name: "latitude", type: "Number", description: "Latitude of business address.", example: "0.0" },
    { name: "longitude", type: "Number", description: "Longitude of business address.", example: "0.0" }
  ]}
/>

---

## Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Array",
      children: [
        { name: "id", type: "String", description: "Account ID", example: "\"1653895399283266156\"" },
        { name: "merchantId", type: "String", description: "Merchant ID", example: "\"4118165203679668885\"" },
        { name: "isDefault", type: "Boolean", example: "true" },
        { name: "companyName", type: "String", description: "Company name of merchant", example: "\"REVENUE MONSTER\"" },
        { name: "companyType", type: "String", description: "Type of company incorporation", example: "\"SOLE PROPRIETOR\"" },
        { name: "registrationNumber", type: "String", description: "Registration number of merchant", example: "“12344”" },
        { name: "businessCategory", type: "String", description: "Business category of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "businessScope", type: "String", description: "Business category of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "sourceOfFunds", type: "String", description: "Business category of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "customerOrigin", type: "String", description: "Business category of merchant", example: "\"SOFTWARE AND IT\"" },
        { name: "establishedAt", type: "DateTime", description: "Established date time of merchant", example: "\"2018-03-26T04:50:57Z\"" },
        { name: "countryCode", type: "String", description: "Country code of merchant contact number", example: "\"60\"" },
        { name: "phoneNumber", type: "String", description: "Phone number of merchant", example: "\"377334080\"" },
        { name: "addressLine1", type: "String", description: "Address 1 of merchant", example: "\"20, JALAN JASA 38, TAMAN MUTIARA RINI\"" },
        { name: "addressLine2", type: "String", description: "Address 2 of merchant", example: "\"\"" },
        { name: "postcode", type: "String", description: "Postcode of merchant", example: "“81300”" },
        { name: "city", type: "String", description: "City of merchant", example: "\"Selangor\"" },
        { name: "state", type: "String", description: "State of merchant", example: "\"Selangor\"" },
        { name: "country", type: "String", description: "Country of merchant", example: "\"Malaysia\"" },
        { name: "isSameBusinessAddress", type: "Boolean", example: "false" },
        { name: "invoiceAddress", type: "Object", description: "Object of Invoice Address",
      children: [
        { name: "addressLine1", type: "String", description: "AddressLine1", example: "\"\"" },
        { name: "addressLine2", type: "String", description: "AddressLine2", example: "\"\"" },
        { name: "postCode", type: "String", description: "Customer Remark", example: "\"\"" },
        { name: "city", type: "String", description: "City", example: "\"\"" },
        { name: "state", type: "String", description: "Address State", example: "\"\"" },
        { name: "country", type: "String", description: "Country", example: "\"\"" }
      ]},
        { name: "inspectList", type: "Array", example: "null",
      children: [
        { name: "fullName", type: "String", example: "\"\"" },
        { name: "email", type: "String", example: "\"\"" },
        { name: "position", type: "String", example: "\"\"" },
        { name: "countryCode", type: "String", example: "\"\"" },
        { name: "phoneNumber", type: "String", example: "\"\"" },
        { name: "gender", type: "String", example: "\"\"" },
        { name: "birthday", type: "String", example: "\"\"" },
        { name: "nationality", type: "String", example: "\"\"" },
        { name: "iDType", type: "String", example: "\"\"" },
        { name: "iDNo", type: "String", example: "\"\"" },
        { name: "beginDateTime", type: "String", example: "\"\"" },
        { name: "endDateTime", type: "String", example: "\"\"" }
      ]},
        { name: "status", type: "String", description: "Current status of Account", example: "\"UNVERIFIED\"" },
        { name: "document", type: "Object",
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
      ]},
        { name: "documentFile", type: "Object",
      children: [
        { name: "CtosFileUrl", type: "String", example: "null" },
        { name: "OwnerICFileUrl", type: "String", example: "null" },
        { name: "DirectorICFileUrl", type: "String", example: "null" },
        { name: "ShareHolderICFileUrl", type: "String", example: "null" },
        { name: "BusinessRegistrationFileUrl", type: "String", example: "null" },
        { name: "BankStatementFileUrl", type: "String", example: "null" },
        { name: "MoaFileUrl", type: "String", example: "null" },
        { name: "Form24FileUrl", type: "String", example: "null" },
        { name: "Form49FileUrl", type: "String", example: "null" },
        { name: "Section14FileUrl", type: "String", example: "null" },
        { name: "Form44FileUrl", type: "String", example: "null" },
        { name: "BusinessSitePhotoFileUrl", type: "String", example: "null" }
      ]},
        { name: "bankAccountNo", type: "String", example: "\"\"" },
        { name: "bankAccountType", type: "String", example: "\"\"" },
        { name: "bankAccountHolderName", type: "String", example: "\"\"" },
        { name: "bankName", type: "String", example: "\"\"" },
        { name: "bankCode", type: "String", example: "\"\"" },
        { name: "averageTicketSize", type: "Integer", example: "0" },
        { name: "averageTurnoverPerMonth", type: "Integer", example: "0" },
        { name: "paymentSubscription", type: "String", example: "\"\"" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of merchant", example: "\"2021-01-13T04:35:32Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of merchant", example: "\"2021-01-13T04:35:32Z\"" }
      ]},
    { name: "code", type: "String", description: "Successfully call this endpoint. If fail, will return error code object (Refer Appendix 1: Error Codes)", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
