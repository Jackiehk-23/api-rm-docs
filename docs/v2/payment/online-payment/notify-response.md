---
id: notify-response
title: "Notify Response"
sidebar_label: "Notify Response"
---

import Admonition from '@theme/Admonition';

# Notify Response

<Admonition type="info">
The notify URL informs your server of the transaction status after a successful payment. Notify is only called on success — failure or refund does not trigger a notify. Query the transaction using [Query By Transaction ID](../query/by-transaction-id.md) for full details.
</Admonition>

**Method:** <HttpMethodBadge method="POST" />

<ParamTable
  title="Details"
  rows={[
    { name: "eventType", type: "String", required: true, description: "Notify event type. Always \"PAYMENT_WEB_ONLINE\"." },
    { name: "data", type: "Object", required: true, description: "Request data",
      children: [
      { name: "store", type: "JSON", description: "Store details." },
      { name: "referenceId", type: "String", description: "Reference ID." },
      { name: "transactionId", type: "String", required: true, description: "Transaction ID." },
      { name: "terminalId", type: "String", description: "Terminal ID." },
      { name: "currencyType", type: "String", required: true, description: "Currency type (currently supported MYR only)." },
      { name: "balanceAmount", type: "Integer", required: true, description: "Remaining balance for initiating refund." },
      { name: "finalAmount", type: "Integer", required: true, description: "Amount after deductions (voucher, membership)." },
      { name: "platform", type: "String", required: true, description: "Transaction platform." },
      { name: "type", type: "String", required: true, description: "Transaction type." },
      { name: "method", type: "String", required: true, description: "Transaction payment method." },
      { name: "region", type: "String", required: true, description: "Transaction payment region." },
      { name: "status", type: "String", required: true, description: "Transaction payment status." },
      { name: "transactionAt", type: "String", description: "Transaction date time (present only when status is SUCCESS)." },
      { name: "createdAt", type: "String", required: true, description: "Transaction created date time." },
      { name: "updatedAt", type: "String", required: true, description: "Transaction last updated date time." },
      { name: "order", type: "Object", required: true, description: "Order details",
        children: [
        { name: "id", type: "String", required: true, description: "Order ID." },
        { name: "title", type: "String", required: true, description: "Order title." },
        { name: "currencyType", type: "String", required: true, description: "Order currency type." },
        { name: "amount", type: "Integer", required: true, description: "Order amount." },
        { name: "detail", type: "String", description: "Order detail." },
        { name: "additionalData", type: "String", description: "Order additional data." },
        ]
      },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
