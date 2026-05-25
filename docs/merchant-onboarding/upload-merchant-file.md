---
id: upload-merchant-file
title: Upload Merchant File
sidebar_label: Upload Merchant File
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/partner/file/upload

  headers:
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  bodyType: multipart
  body:
    file:
      type: file
      required: true
    fileName:
      type: string
      required: true

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/partner/file/upload" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
    --header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1528450585" \
    --form 'file=@"/Users/RM123/Desktop/example.pdf"' \
    --form 'fileName="testing"'
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "fileName": "testing",
        "fileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/1629257189967895215/dGVzdGluZw==-1629297786.pdf"
      },
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/partner/file/upload"
  prod="/v3/partner/file/upload"
/>

<!-- user cannot send/upload multipart form data for security purposes (aiman) -->
:::note
This endpoint accepts `multipart/form-data` and requires a file upload.

File upload is **not supported in the API Playground**.
Please use the cURL example or a server-side integration to test this endpoint.
:::

## What is this?

Upload a supporting document (such as a business registration document, IC copy, or bank statement) for a merchant under your Partner account.

## When to Use

Use this endpoint when:
- A merchant needs to submit required documents during onboarding
- Updating documents for an existing merchant

---

## How to Use

### Step 1: Prepare the File

Choose the file you need to upload. Common formats include PDF, JPG, or PNG.

### Step 2: Set the File Name

Give the file a descriptive name that indicates its contents.

### Step 3: Make the POST Request

Send the file as `multipart/form-data` with the `file` and `fileName` parameters.

### Step 4: Review the Response

Check the `code` field. If `"SUCCESS"`, the file was uploaded and the `fileUrl` is returned.

---

### Request Parameters

<ParamTable
  title="Request Parameters"
  rows={[
    { name: "file", type: "File", required: true, description: "The file to upload." },
    { name: "fileName", type: "String", required: true, description: "Name of the file.", example: "\"Testing\"" }
  ]}
/>

### Response Parameters

<ParamTable
  title="Response Parameters"
  rows={[
    { name: "item", type: "Object", description: "Contains fileName and fileUrl.",
      children: [
        { name: "fileName", type: "String", description: "Name of the uploaded file.", example: "\"testing\"" },
        { name: "fileUrl", type: "String", description: "URL where the file is stored.", example: "\"https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/...pdf\"" }
      ]
    },
    { name: "code", type: "String", description: "\"SUCCESS\" if the file was uploaded. Otherwise returns an error code.", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
