---
title: "DeepLink — Quick Pay"
sidebar_label: "Quick Pay"
---

## What is this?

Sends a Quick Pay intent (`transactionType: 1`) to the RM Merchant App to accept e-wallet QR payments via DeepLink.

## When to Use

Use this DeepLink when:
- Your Android app needs to delegate QR payment to the RM Merchant App
- Accepting in-store e-wallet payments from a custom terminal app

## How to Use

Send an `Intent("REVENUE_MONSTER_PAYMENT")` with `transactionType: 1` and the order details. The RM Merchant App handles the payment and returns the result.

<CodeBlock language="kotlin" filename="QuickPay.kt">
{`val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 1)
    putExtra("orderId", System.currentTimeMillis().toString())
    putExtra("orderTitle", "Intent Demo")
    putExtra("amount", 10)
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
    { name: "code", type: "String", description: "\"SUCCESS\" if the payment succeeded, otherwise an error code." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed." },
      { name: "message", type: "String", description: "Error message if the request failed." },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
