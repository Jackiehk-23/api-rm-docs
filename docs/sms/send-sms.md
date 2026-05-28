---
id: send-sms
title: Send SMS
sidebar_label: Send SMS
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/sms

  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "countryCode": "60",
      "phoneNumber": "163877652",
      "message": "test",
      "type": "VERIFY_CODE"
    }

examples:
  request: |
    curl --location --request POST 'https://sb-open.revenuemonster.my/v3/sms' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVKTE42dFdBMG82MEx3Il0sImV4cCI6MTYwMzI1NDU2OSwiaWF0IjoxNjAwNjYyNTY5LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTZNenR5b1RFckpzVyIsIm5iZiI6MTYwMDY2MjU2OSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.H3G6UDX7sR9EXtTMNs4Q2OHdhUGIhhCfdlAeOpywH4rDuVOcWXXwzF4Imbx8E7I10vFAJpwYZrEkCWCdCCw-WV11y9VT5kP6k75CeS-ZPMOLcKnC5iFT7vEi07r6ovwty9erlcZeXrtrmEIn3rnLva-dxSg3vZ2MyymoNDk-kV7ltXnkoWW4jtXRls6siLhxeY__8kXn2qa0ojVX4Nm6HmzN_vgi-RKSmToMgsdzTF94Y61QVBWhZfolD2-JpHx4qNlklcUdv8HOJ1QHHWpyoJytaJmvr3GJ5G399LbcTLwxB1p2qPg7z4hpoGNu4AP-ybRJVC3P9q9OscQYDNX-dA' \
    --header 'X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==' \
    --header 'X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN' \
    --header 'X-Timestamp: 1528450585' \
    --data-raw '{
        "countryCode":"60",
        "phoneNumber": "163877652",
        "message": "test",
        "type": "VERIFY_CODE"
    }'
  body: |
    There is no example body request.
  response: |
    {
      "code": "SUCCESS"
    }
---


import ApiEndpoint from "@site/src/components/api/ApiEndpoint";

<ApiEndpoint
  method="POST"
  sandbox="/v3/sms"
  prod="/v3/sms"
/>

## What is this?

Send an SMS verification code (TAC) to a user's mobile phone. Useful for two-factor authentication, account verification, and transaction confirmation flows.

## When to Use

Use this endpoint when you:
- Need to verify a user's phone number during signup
- Want to send a one-time password (TAC) for authentication
- Require SMS-based confirmation for sensitive transactions

:::note
Currently supports the `VERIFY_CODE` type for sending verification codes.
:::

## How to Use

### Step 1: Get the User's Phone Details

Collect the recipient's `countryCode` and `phoneNumber`. The country code is the international dialing code without the `+` sign (e.g., `"60"` for Malaysia).

### Step 2: Prepare the Message

Construct the SMS content in the `message` field. Keep it concise — typical TAC messages include the verification code and your app name.

### Step 3: Send the Request

POST the payload to the endpoint with authenticated headers (signature, nonce, timestamp).

### Step 4: Check the Response

A `"SUCCESS"` code confirms the SMS was queued for delivery. Errors return a code object — see [Error Codes](../error-codes).

---

## Request Parameters

<ParamTable
  title="Request Body"
  rows={[
    { name: "countryCode", type: "String", required: true, description: "International dialing code without `+` (e.g., `\"60\"` for Malaysia).", example: "\"60\"" },
    { name: "phoneNumber", type: "String", required: true, description: "Recipient mobile number without country code.", example: "\"163877652\"" },
    { name: "message", type: "String", required: true, description: "SMS message body to send to the user.", example: "\"test\"" },
    { name: "type", type: "String", required: true, description: "SMS type. Use `\"VERIFY_CODE\"` for verification codes.", example: "\"VERIFY_CODE\"" }
  ]}
/>

---

## Response Parameters

<ParamTable
  title="Response"
  rows={[
    { name: "code", type: "String", description: "`\"SUCCESS\"` if the SMS was queued. Otherwise returns an error code. See [Error Codes](../error-codes).", example: "\"SUCCESS\"" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->