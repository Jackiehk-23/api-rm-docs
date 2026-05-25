---
title: "DeepLink — Card Settlement"
sidebar_label: "Card Settlement"
---

Sends a Card Settlement intent (`transactionType: 5`) to the RM Merchant App to settle card transactions.

<CodeBlock language="kotlin" filename="CardSettlement.kt">
{`val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 5)
}
startActivity(i)`}
</CodeBlock>

## Response

<CodeBlock language="kotlin" filename="Response.kt" hideLineNumbers>
{`val jsonString = intent?.getStringExtra("result")`}
</CodeBlock>

<ParamTable
  rows={[
    { name: "code", type: "String", description: "\"SUCCESS\" if the settlement succeeded, otherwise an error code." },
    { name: "error", type: "Object", description: "Error details",
      children: [
      { name: "code", type: "String", description: "Error code if the request failed." },
      { name: "message", type: "String", description: "Error message if the request failed." },
      { name: "debug", type: "String", description: "Debug message (sandbox only)." },
      ]
    },
    { name: "summary", type: "Object", description: "Settlement summary",
      children: [
      { name: "batchNo", type: "String", description: "Terminal settlement sequence number" },
      { name: "currencyType", type: "String", description: "Settlement currency type (currently supported MYR only)" },
      { name: "noOfTransactions", type: "Integer", description: "Count of settled transactions" },
      { name: "settlementAt", type: "String", description: "Date and time of settlement" },
      { name: "totalSalesAmount", type: "Integer", description: "Total sales amount in cents" },
      ]
    },
    { name: "transactions[*]", type: "Object", description: "transactions[*] details",
      children: [
      { name: "amount", type: "Integer", description: "Transaction amount in cents" },
      { name: "currencyType", type: "Integer", description: "Transaction currency type" },
      { name: "transactionAt", type: "String", description: "Transaction date and time" },
      { name: "transactionId", type: "String", description: "Transaction ID" },
      { name: "type", type: "String", description: "Transaction type" },
      ]
    },
  ]}
/>
