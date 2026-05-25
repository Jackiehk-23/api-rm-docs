---
title: "DeepLink — Card Payment"
sidebar_label: "Card Payment"
---

Sends a Card Payment intent (`transactionType: 2`) to the RM Merchant App to accept card payments.

<CodeBlock language="kotlin" filename="CardPayment.kt">
{`val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 2)
    putExtra("orderId", System.currentTimeMillis().toString())
    putExtra("orderTitle", "Intent Demo")
    putExtra("amount", 100)
    putExtra("printReceipt", false)
}
startActivity(i)`}
</CodeBlock>

:::note
For terminal MF919, receipt printing cannot be controlled programmatically.
:::

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
