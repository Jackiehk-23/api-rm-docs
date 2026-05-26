---
id: card-settlement
title: Card Payment Settlement
sidebar_label: Card Payment Settlement
---

**Method :** <HttpMethodBadge method="POST" />
URL : `https://open.revenuemonster.my/v3/event/terminal`
Sandbox URL : `https://sb-open.revenuemonster.my/v3/event/terminal`

### Request Parameters

<ParamTable
  rows={[
    { name: "terminalId", type: "String", required: true, description: "Terminal ID", example: "\"1582107209454501456\"" },
    { name: "type", type: "String", required: true, description: "Request type", example: "\"SETTLEMENT\"" },
    { name: "data", type: "String", required: true, description: "(Refer data )", example: "{}",
      children: [
        { name: "receiptType", type: "Integer", required: true, description: "1 : Print Settlement summary and Settlement detail 3 : Perform settlement in the background without receipt", example: "3" }
      ]}
  ]}
/>

<CodeBlock language="json" filename="Example Request">
{`curl --location --request POST "https://sb-open.revenuemonster.my/v3/event/terminal" \\
--header "Content-Type: application/json" \\
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \\
--header "X-Signature: sha256 GohuT2QTUXJV3MZh2OoEE9qW9wcfakOU9iVLmkTjM12NQuV6IcWMRQDz9NdxAOVIrh5MssfYCLDlafb2illXxgQMpmZkZ38NT6NQsMeMfGbHBS1Kc+BUtU7o1TMLUzk55J1tA6f0Z95oEuBlCeLm6VsgCG30wFm5YmgssJ0weIwMcW355r2sFl7QcKOuRqynoGtmmr/aGfOk1HjiFLoFzSd38O7rRjwGrekYwuYUD1N/Wp5GFXRjtaaPkzAERPbXEmnh/taLME8VeAhky6dAVGZE6gHKnP5WvvVjUE+KLtj3D32YIHzxhzEW9x3JEObqgvm5Q2oRZNxoh6/MvqwkVA==" \\
--header "X-Nonce-Str: bfdgdjgtjhmnbmmjmdfdghghffj" \\
--header "X-Timestamp: 1546850694" \\
--data-raw {
    "terminalId": "1554193032595276913",
    "type": "SETTLEMENT",
     "data": {
        "receiptType": 3
    }
}`}
</CodeBlock>

### Response Parameters

<ParamTable
  rows={[
    { name: "summary", type: "Object", description: "(Refer summary)", example: "{}",
      children: [
        { name: "batchNo", type: "String", required: true, description: "Sequence no. of the terminal settlement", example: "\"000311\"" },
        { name: "currencyType", type: "String", required: true, description: "Current only support Ringgit Malaysia", example: "\"MYR\"" },
        { name: "noOfTransactions", type: "Integer", required: true, description: "Count of settled transactions", example: "2" },
        { name: "settlementAt", type: "DateTime", required: true, description: "Date and time of the settlement", example: "\"2021-02-17T18:06:47Z\"" },
        { name: "totalSalesAmount", type: "Integer", required: true, description: "Balance in cents", example: "0" }
      ]},
    { name: "transactions", type: "Array", description: "(Refer to transaction)", example: "[]" }
  ]}
/>

<strong>Transaction object <code>transaction</code>:</strong>

<ParamTable
  rows={[
    { name: "amount", type: "Integer", required: true, description: "Amount in cent", example: "10" },
    { name: "currencyType", type: "String", required: true, description: "Current only support Ringgit Malaysia", example: "\"MYR\"" },
    { name: "transactionAt", type: "DateTime", required: true, description: "Date time of transaction on terminal", example: "\"2021-02-16T17:44:02Z\"" },
    { name: "transactionId", type: "String", required: true, description: "Transaction ID (from RM server)", example: "\"210217174359100325085446\"" },
    { name: "type", type: "String", required: true, description: "Transaction type SALE or VOID", example: "\"SALE\"" }
  ]}
/>
<CodeBlock language="json" filename="Example Response">
{`{
  "summary": {
    "batchNo": "000311",
    "currencyType": "MYR",
    "id": "001778",
    "noOfTransactions": 2,
    "settlementAt": "2021-02-17T18:06:47Z",
    "totalSalesAmount": 0
  },
  "transactions": [
    {
      "amount": 10,
      "currencyType": "MYR",
      "transactionAt": "2021-02-16T17:44:02Z",
      "transactionId": "210217174359100325085446",
      "type": "SALE"
    },
    {
      "amount": 10,
      "currencyType": "MYR",
      "transactionAt": "2021-02-16T17:44:29Z",
      "transactionId": "210217174359100325085446",
      "type": "VOID"
    }
  ]
}`}
</CodeBlock>

