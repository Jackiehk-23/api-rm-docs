---
title: "DeepLink — Wallet Settlement"
sidebar_label: "Wallet Settlement"
---

Sends a Wallet Settlement intent (`transactionType: 4`) to the RM Merchant App to settle e-wallet transactions.

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
    { name: "wallet[*].name", type: "String", description: "Wallet name" },
    { name: "wallet[*].method", type: "String", description: "Wallet method" },
    { name: "wallet[*].region", type: "String", description: "Wallet region" },
    { name: "wallet[*].sales.count", type: "Integer", description: "Wallet sales count" },
    { name: "wallet[*].sales.amount", type: "Integer", description: "Wallet sales amount" },
    { name: "wallet[*].refunded.count", type: "Integer", description: "Wallet refunded count" },
    { name: "wallet[*].refunded.amount", type: "Integer", description: "Wallet refunded amount" },
    { name: "range[*]", type: "String", description: "Range of settlement dates" }
  ]}
/>
