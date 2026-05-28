---
title: "DeepLink — Wallet Settlement"
sidebar_label: "Wallet Settlement"
---

## What is this?

Sends a Wallet Settlement intent (`transactionType: 4`) to the RM Merchant App to settle e-wallet transactions via DeepLink.

## When to Use

Use this DeepLink when:
- End-of-day settlement for e-wallet (QR) transactions
- Closing the daily wallet batch from your custom app

## How to Use

Send an `Intent("REVENUE_MONSTER_PAYMENT")` with `transactionType: 4`. Optionally set `print: false` to suppress receipt printing.

<CodeBlock language="kotlin" filename="WalletSettlement.kt">
{`val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 4)
    putExtra("print", false)
}
startActivity(i)`}
</CodeBlock>

## Response

<CodeBlock language="kotlin" filename="Response.kt" hideLineNumbers>
{`val jsonString = intent?.getStringExtra("result")`}
</CodeBlock>

<ParamTable
  rows={[
    { name: "totalSalesAmount", type: "Integer", description: "Total sales amount" },
    { name: "totalSalesCount", type: "Integer", description: "Total sales count" },
    { name: "totalRefundedAmount", type: "Integer", description: "Total refunded amount" },
    { name: "totalRefundedCount", type: "Integer", description: "Total refunded count" },
    { name: "wallet", type: "Array", description: "Per-wallet breakdown",
      children: [
        { name: "name", type: "String", description: "Wallet name" },
        { name: "method", type: "String", description: "Wallet method" },
        { name: "region", type: "String", description: "Wallet region" },
        { name: "sales", type: "Object", description: "Sales totals",
          children: [
            { name: "count", type: "Integer", description: "Sales count" },
            { name: "amount", type: "Integer", description: "Sales amount" },
          ]
        },
        { name: "refunded", type: "Object", description: "Refund totals",
          children: [
            { name: "count", type: "Integer", description: "Refunded count" },
            { name: "amount", type: "Integer", description: "Refunded amount" },
          ]
        },
      ]
    },
    { name: "range", type: "Array", description: "Range of settlement dates" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
