---
id: get-application-clients
title: Get Application Clients
sidebar_label: Get Application Clients
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantId}/applications

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
    Content-Type: application/json

examples:
  request: |
    curl --location --request GET "https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantId}/applications" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9..." \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585"

  response: |
    {
      "items": [
        {
          "clientId": "1647502414730379278",
          "clientSecret": "dtbDsFgbLDzGhMleKjTFZXGxrDKFnMqe",
          "client": {
            "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBsJf/68nKn3WFcmbA4uK45\nYTQJ2M9XRf82COhN6OQpTLs4PEQSFCix9/05DdOfqe4PR64JS+nlA3q54YXLq++b\nuG8aerNM39Ie0VssTq+Wu3antoq9qvSQL0ADSfLPtWxRKirY8ysrFWN8yU2p7ofp\n/byYvo5DZ9i6aclctottecc/1NWaXWFSLzbsceSGjP3O+17+gMXCnwroT87XdGXJ\nY/D11Cly8sD3Ll9OKIT1aDlKkkR9FWcFct0wDYEedutBAMOFjYAW3jvcUbdi7CKy\neX42N7t7dIb1tw+WTFSpx5+tHKqRwLUq5S9eTx4e8+UxJ9LUTyr14O+TkTSL8Fpx\nAgMBAAE=\n-----END PUBLIC KEY-----"
          },
          "server": {
            "publicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3PfCJJSxGIvXNI//SROs\n3RK183bs25NjzJH6iXB3Y3hPmHWzGRckU0IAmCMIpu37p76DgzMJF8jfyZmvVNBv\nftQaQUGsCyUlGb+zkBGhdYC7uNmOfCpx49+ic3GrOnXrX/2x32qSRoLq3Ux1iZWf\nTA03Pb1O7v8ikBI1NN8z8+GR2IY6eWlr53+sSw/nFVKFwgnij3AV7rxmjuQOPdnn\n48tQJfm7uOGWy2HSlg8Mu2GJWhZar3GfEGVEfBLXN2AUTLCQGmVX/MqwWCsE+vjz\n985meEuMAXKe8OiFUlRn2Y/8nX0rT/YCqorTRWURNrYKr34f50G287kIm3s7vVmW\nwwIDAQAB\n-----END RSA PUBLIC KEY-----",
            "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA3PfCJJSxGIvXNI//SROs3RK183bs25NjzJH6iXB3Y3hPmHWz\nGRckU0IAmCMIpu37p76DgzMJF8jfyZmvVNBvftQaQUGsCyUlGb+zkBGhdYC7uNmO\nfCpx49+ic3GrOnXrX/2x32qSRoLq3Ux1iZWfTA03Pb1O7v8ikBI1NN8z8+GR2IY6\neWlr53+sSw/nFVKFwgnij3AV7rxmjuQOPdnn48tQJfm7uOGWy2HSlg8Mu2GJWhZa\nr3GfEGVEfBLXN2AUTLCQGmVX/MqwWCsE+vjz985meEuMAXKe8OiFUlRn2Y/8nX0r\nT/YCqorTRWURNrYKr34f50G287kIm3s7vVmWwwIDAQAB...\n-----END RSA PRIVATE KEY-----"
          },
          "name": "required name",
          "homePageUrl": "https://google.com",
          "logoUrl": "https://google.com",
          "privacyPolicyUrl": "https://google.com",
          "merchantId": "1647501978894816174",
          "userId": "1647501978916382207",
          "oAuthClientProducts": [],
          "isActive": false,
          "redirectUri": ["https://google.com"],
          "createdAt": "2022-03-17T07:33:34Z",
          "updatedAt": "2022-03-17T07:36:10Z"
        }
      ],
      "code": "SUCCESS",
      "meta": {
        "count": 1
      }
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

import Admonition from '@theme/Admonition';

<ApiEndpoint
  method="GET"
  sandbox="/v3/partner/merchant/{merchantId}/applications"
  prod="/v3/partner/merchant/{merchantId}/applications"
/>

<Admonition type="note">
This endpoint is for merchants with a Partner account. To activate a Partner account, [contact us](https://revenuemonster.my/about-us).
</Admonition>

## What is this?

Retrieve a list of all application clients associated with a specific merchant under your Partner account. Each application client contains credentials used for OAuth authentication.

## When to Use

Use this endpoint when:
- You need to view all application clients for a merchant
- Retrieving `clientId` and `clientSecret` for OAuth flows
- Auditing which applications are registered for a merchant

---

## How to Use

### Step 1: Get the Merchant ID

Locate the `merchantId` for the merchant whose applications you want to retrieve. You can get this from the [Get Merchants](../get-merchants) endpoint.

### Step 2: Make the GET Request

Include the `merchantId` as a path parameter in the URL. No request body is required.

### Step 3: Review the Response

The response contains an `items` array with all application clients. Note the `clientId` and `clientSecret` — you will need these for OAuth authentication.

---

### Request Parameters

This is a GET request with no request body. Pass the `merchantId` as a path parameter in the URL.

---

### Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "items", type: "Array", description: "List of application clients associated with the merchant.",
      children: [
        { name: "clientId", type: "String", description: "Unique client identifier for the application.", example: "\"1647502414730379278\"" },
        { name: "clientSecret", type: "String", description: "Client secret. Keep this confidential.", example: "\"dtbDsFgbLDzGhMleKjTFZXGxrDKFnMqe\"" },
        { name: "client", type: "Object", description: "Application client keys",
          children: [
            { name: "publicKey", type: "String", description: "Application's public key.", example: "(PEM format)" }
          ]
        },
        { name: "server", type: "Object", description: "RM server keys",
          children: [
            { name: "publicKey", type: "String", description: "RM's server public key.", example: "(PEM format)" },
            { name: "privateKey", type: "String", description: "RM's server private key (for reference only).", example: "(PEM format)" }
          ]
        },
        { name: "name", type: "String", description: "Application name.", example: "\"required name\"" },
        { name: "homePageUrl", type: "String", description: "Homepage URL.", example: "\"https://google.com\"" },
        { name: "logoUrl", type: "String", description: "Logo URL.", example: "\"https://storage.googleapis.com/rm-sandbox-asset/img/default-application-logo.png\"" },
        { name: "privacyPolicyUrl", type: "String", description: "Privacy policy URL.", example: "\"https://google.com\"" },
        { name: "merchantId", type: "String", description: "Merchant ID this application belongs to.", example: "\"1647501978894816174\"" },
        { name: "userId", type: "String", description: "User ID who created this application.", example: "\"1647501978916382207\"" },
        { name: "oAuthClientProducts", type: "Array", description: "OAuth client products.", example: "[]" },
        { name: "isActive", type: "Boolean", description: "Whether the application is active.", example: "false" },
        { name: "redirectUri", type: "Array", description: "Allowed redirect URIs.", example: "[\"https://google.com\"]" },
        { name: "createdAt", type: "DateTime", description: "Creation date time of the application.", example: "\"2022-03-17T07:33:34Z\"" },
        { name: "updatedAt", type: "DateTime", description: "Last update date time of the application.", example: "\"2022-03-17T07:36:10Z\"" }
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the call succeeded. Otherwise returns an error code object. See Appendix 1: Error Codes.", example: "\"SUCCESS\"" },
    { name: "meta", type: "Object", description: "Pagination metadata.",
      children: [
        { name: "count", type: "Integer", description: "Total count of application clients.", example: "1" }
      ]
    }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
