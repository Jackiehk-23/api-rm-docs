---
id: create-merchant
title: Create Merchant
sidebar_label: Create Merchant
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/partner/merchant

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "companyName": "Revenue Monster",
      "countryCode": "60",
      "email": "rmtesting@gmail.com",
      "firstName": "Edwin",
      "lastName": "Testing",
      "phoneNumber": "164699177"
    }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/partner/merchant" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SErS6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
    --data-raw '{
        "companyName":"Revenue Monster",
        "countryCode":"60",
        "email":"rmtesting@gmail.com",
        "firstName":"Edwin",
        "lastName":"Testing",
        "phoneNumber":"164699177"
    }'
  response: |
    {
      "item": {
        "merchant": {
          "id": "1629292083526787883",
          "companyName": "Revenue Monster",
          "status": "UNVERIFIED",
          "isActive": true
        },
        "store": {
          "id": "1629292083696729288",
          "name": "Revenue Monster",
          "status": "ACTIVE"
        },
        "user": {
          "id": "1629292083650514742",
          "firstName": "EDWIN",
          "lastName": "TESTING",
          "email": "rmtesting@gmail.com"
        }
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="POST"
  sandbox="/v3/partner/merchant"
  prod="/v3/partner/merchant"
/>

## What is this?

Create a new merchant account under your Partner account. This endpoint submits merchant information for review. Once approved, the merchant can access RM services.

## When to Use

Use this endpoint when:
- A new merchant signs up through your platform
- You need to programmatically create merchant accounts
- You want to onboard merchants in bulk

<Admonition type="note">
This endpoint is for merchants with a Partner account. To activate a Partner account, [contact us](https://revenuemonster.my/about-us).
</Admonition>

## How to Use

### Step 1: Get Your Partner Credentials

Obtain your `clientId` and `clientSecret` from the [RM Merchant Portal](https://merchant.revenuemonster.my/) > **Developer** > **Application**.

### Step 2: Prepare Merchant Information

Collect the required merchant details:
- Company name
- Country code and phone number
- Email address
- Contact person's first and last name

### Step 3: Make the API Request

Send the merchant information to this endpoint with your authenticated headers.

### Step 4: Review the Response

Check the `code` field in the response. If `"SUCCESS"`, the merchant was created. The merchant and store objects will be returned.

---

## Request Parameters

<ParamTable
  title="Request Body"
  rows={[
    { name: "companyName", type: "String", required: true, description: "Registered company name", example: "\"Revenue Monster\"" },
    { name: "countryCode", type: "String", required: true, description: "Country code for phone number (e.g., \"60\" for Malaysia)", example: "\"60\"" },
    { name: "email", type: "String", required: true, description: "Contact email address", example: "\"rmtesting@gmail.com\"" },
    { name: "firstName", type: "String", required: true, description: "Contact person's first name", example: "\"Edwin\"" },
    { name: "lastName", type: "String", required: true, description: "Contact person's last name", example: "\"Testing\"" },
    { name: "phoneNumber", type: "String", required: true, description: "Contact phone number (without country code)", example: "\"164699177\"" }
  ]}
/>

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "item", type: "Object", description: "Contains merchant, store, and user objects",
      children: [
        { name: "merchant", type: "Object", description: "Merchant details",
          children: [
            { name: "id", type: "String", description: "Unique merchant ID", example: "\"1629292083526787883\"" },
            { name: "companyName", type: "String", description: "Registered company name", example: "\"Revenue Monster\"" },
            { name: "brandName", type: "String", description: "Brand name if different from company", example: "\"\"" },
            { name: "companyType", type: "String", description: "Type of company incorporation", example: "\"\"" },
            { name: "companyLogoUrl", type: "String", description: "Public URL for company logo", example: "\"https://storage.googleapis.com/rm-sandbox-asset/img/merchant.png\"" },
            { name: "registrationNumber", type: "String", description: "Company registration number", example: "\"\"" },
            { name: "businessCategory", type: "String", description: "Business category", example: "\"\"" },
            { name: "countryCode", type: "String", description: "Country code for contact", example: "\"60\"" },
            { name: "phoneNumber", type: "String", description: "Contact phone number", example: "\"\"" },
            { name: "addressLine1", type: "String", description: "Street address line 1", example: "\"\"" },
            { name: "city", type: "String", description: "City", example: "\"\"" },
            { name: "state", type: "String", description: "State/Province", example: "\"\"" },
            { name: "postcode", type: "String", description: "Postal/ZIP code", example: "\"\"" },
            { name: "country", type: "String", description: "Country", example: "\"\"" },
            { name: "isActive", type: "Boolean", description: "Whether the merchant account is active", example: "true" },
            { name: "status", type: "String", description: "Merchant status (e.g., \"UNVERIFIED\", \"REVIEWING\", \"ACTIVE\")", example: "\"UNVERIFIED\"" },
            { name: "isPartner", type: "Boolean", description: "Whether this is a partner merchant", example: "true" },
            { name: "partnerId", type: "String", description: "Partner ID if applicable", example: "\"\"" },
            { name: "subscription", type: "Object", description: "Subscription flags",
              children: [
                { name: "terminalOfflineEWallet", type: "Boolean", description: "Offline e-wallet terminal enabled", example: "false" },
                { name: "terminalOfflineCreditCard", type: "Boolean", description: "Offline credit card terminal enabled", example: "false" },
                { name: "onlineCreditCard", type: "Boolean", description: "Online credit card enabled", example: "false" }
              ]
            },
            { name: "createdAt", type: "DateTime", description: "Account creation timestamp", example: "\"2021-08-18T13:08:03.530Z\"" },
            { name: "updatedAt", type: "DateTime", description: "Last update timestamp", example: "\"2021-08-18T13:08:03.530Z\"" }
          ]
        },
        { name: "store", type: "Object", description: "Store details",
          children: [
            { name: "id", type: "String", description: "Unique store ID", example: "\"1629292083696729288\"" },
            { name: "merchantSettlementId", type: "String", description: "Merchant settlement ID", example: "\"\"" },
            { name: "name", type: "String", description: "Store name", example: "\"Revenue Monster\"" },
            { name: "imageUrl", type: "String", description: "Store image URL", example: "\"https://storage.googleapis.com/rm-prod-asset/img/store.png\"" },
            { name: "addressLine1", type: "String", description: "Street address", example: "\"\"" },
            { name: "postCode", type: "String", description: "Postal code", example: "\"\"" },
            { name: "city", type: "String", description: "City", example: "\"\"" },
            { name: "state", type: "String", description: "State", example: "\"\"" },
            { name: "country", type: "String", description: "Country", example: "\"\"" },
            { name: "countryCode", type: "String", description: "Country code", example: "\"\"" },
            { name: "phoneNumber", type: "String", description: "Store phone number", example: "\"\"" },
            { name: "geoLocation", type: "Object", description: "Latitude and longitude",
              children: [
                { name: "latitude", type: "Number", description: "Latitude", example: "0" },
                { name: "longitude", type: "Number", description: "Longitude", example: "0" }
              ]
            },
            { name: "status", type: "String", description: "Store status (\"ACTIVE\", \"INACTIVE\")", example: "\"ACTIVE\"" },
            { name: "createdAt", type: "DateTime", description: "Creation timestamp", example: "\"2021-08-18T13:08:03.535Z\"" },
            { name: "updatedAt", type: "DateTime", description: "Last update timestamp", example: "\"2021-08-18T13:08:03.535Z\"" }
          ]
        },
        { name: "user", type: "Object", description: "User details",
          children: [
            { name: "id", type: "String", description: "Unique user ID", example: "\"1629292083650514742\"" },
            { name: "firstName", type: "String", description: "User's first name", example: "\"EDWIN\"" },
            { name: "lastName", type: "String", description: "User's last name", example: "\"TESTING\"" },
            { name: "countryCode", type: "String", description: "Country code", example: "\"60\"" },
            { name: "phoneNumber", type: "String", description: "Phone number", example: "\"164699177\"" },
            { name: "email", type: "String", description: "Email address", example: "\"rmtesting@gmail.com\"" },
            { name: "avatarUrl", type: "String", description: "Avatar image URL", example: "\"https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png\"" },
            { name: "status", type: "String", description: "User status (\"ACTIVE\", \"INACTIVE\")", example: "\"ACTIVE\"" },
            { name: "isActive", type: "Boolean", description: "Whether user is active", example: "true" },
            { name: "currentStoreId", type: "String", description: "Current store ID", example: "\"\"" },
            { name: "createdAt", type: "DateTime", description: "Creation timestamp", example: "\"2021-08-18T13:08:03.537Z\"" },
            { name: "updatedAt", type: "DateTime", description: "Last update timestamp", example: "\"2021-08-18T13:08:03.537Z\"" }
          ]
        }
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the merchant was created. Otherwise returns an error code.", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->