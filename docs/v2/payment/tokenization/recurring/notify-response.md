---
title: "Recurring — Notify Response"
sidebar_label: "Notify Response"
---

## What is this?

Your `notifyUrl` receives this callback each time a recurring payment is successfully charged. Use it to record charges in your own ledger.

## When to Use

Implement a handler for this notify when:
- You created a recurring customer via [Create Recurring Customer](./create-customer.md)
- You need real-time success notifications for each scheduled charge

:::info
Notify is only called on success — failed payments do not trigger a notify. Use [Query By Transaction ID](../../query/by-transaction-id.md) for full transaction details.
:::

## How to Use

### Step 1: Expose a Public GET Handler

Build an HTTP endpoint at the URL you registered as `notifyUrl`.

### Step 2: Validate and Persist

Parse the `data` payload, persist the order to your ledger, and respond `200 OK` quickly.

---

## Notify Response

**Method:** <HttpMethodBadge method="GET" />

<ParamTable
  title="Details"
  rows={[
    { name: "eventType", type: "String", required: true, description: "Notify event type" },
    { name: "data", type: "Object", required: true, description: "Request data",
      children: [
      { name: "amount", type: "Integer", required: true, description: "Recurring payment amount" },
      { name: "currency", type: "String", required: true, description: "Recurring order currency" },
      { name: "countryCode", type: "String", required: true, description: "Recurring customer country code" },
      { name: "phoneNumber", type: "String", required: true, description: "Recurring customer phone number" },
      { name: "customerId", type: "String", required: true, description: "Recurring customer ID" },
      { name: "email", type: "String", required: true, description: "Recurring customer email" },
      { name: "name", type: "String", required: true, description: "Recurring customer name" },
      { name: "merchantId", type: "String", required: true, description: "Merchant ID" },
      { name: "storeId", type: "String", required: true, description: "Store ID" },
      { name: "orderId", type: "String", required: true, description: "Recurring transaction order ID" },
      { name: "status", type: "String", required: true, description: "Recurring order status" },
      { name: "createdAt", type: "String", required: true, description: "Recurring order created date time" },
      { name: "updatedAt", type: "String", required: true, description: "Recurring order updated date time" },
      ]
    },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
