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
    { name: "error.code", type: "String", description: "Error code if the request failed." },
    { name: "error.message", type: "String", description: "Error message if the request failed." },
    { name: "error.debug", type: "String", description: "Debug message (sandbox only)." },
    { name: "summary.batchNo", type: "String", description: "Terminal settlement sequence number" },
    { name: "summary.currencyType", type: "String", description: "Settlement currency type (currently supported MYR only)" },
    { name: "summary.noOfTransactions", type: "Integer", description: "Count of settled transactions" },
    { name: "summary.settlementAt", type: "String", description: "Date and time of settlement" },
    { name: "summary.totalSalesAmount", type: "Integer", description: "Total sales amount in cents" },
    { name: "transactions[*].amount", type: "Integer", description: "Transaction amount in cents" },
    { name: "transactions[*].currencyType", type: "Integer", description: "Transaction currency type" },
    { name: "transactions[*].transactionAt", type: "String", description: "Transaction date and time" },
    { name: "transactions[*].transactionId", type: "String", description: "Transaction ID" },
    { name: "transactions[*].type", type: "String", description: "Transaction type" }
  ]}
/>
