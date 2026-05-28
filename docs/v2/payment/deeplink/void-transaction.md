---
title: "DeepLink — Void Transaction"
sidebar_label: "Void Transaction"
---

## What is this?

Sends a Void Transaction intent (`transactionType: 3`) to the RM Merchant App to void a card transaction via DeepLink.

## When to Use

Use this DeepLink when:
- Voiding a card transaction before settlement
- Reversing an erroneous charge same-day

## How to Use

Send an `Intent("REVENUE_MONSTER_PAYMENT")` with `transactionType: 3`, the `transactionId` to void, and authentication (`email`, `pin`).

<CodeBlock language="kotlin" filename="VoidTransaction.kt">
{`val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 3)
    putExtra("transactionId", "240620034957010325054813")
    putExtra("reason", "Wrong Order")
    putExtra("email", "test@abc.my")
    putExtra("pin", "456789")
    putExtra("printReceipt", false)
}
startActivity(i)`}
</CodeBlock>

## Response

<CodeBlock language="kotlin" filename="Response.kt" hideLineNumbers>
{`val jsonString = intent?.getStringExtra("result")`}
</CodeBlock>

<ParamTable
  rows={[
    { name: "item", type: "JSON", description: "Transaction response object" },
    { name: "code", type: "String", description: "\"SUCCESS\" if the void succeeded, otherwise an error code." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed." },
      { name: "message", type: "String", description: "Error message if the request failed." },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
