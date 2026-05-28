---
title: "Recurring — Redirect Response"
sidebar_label: "Redirect Response"
---

## What is this?

After the recurring customer completes card binding on the RM-hosted page, RM redirects them back to your `redirectUrl` with the parameters below.

## When to Use

Implement a handler for this redirect when:
- You sent a customer through [Create Recurring Customer](./create-customer.md)
- You need to surface bind success/failure on your UI

:::info
The redirect URL can be any URL type — deep link, browser URL, or server URL.
:::

## How to Use

### Step 1: Expose a GET Handler

Build an endpoint that reads `status`, `customerId`, and `reason` query params.

### Step 2: Persist the Customer ID

Store `customerId` so you can query [Get Info](../customer/get-info.md), [Get Orders](../customer/get-orders.md), or [Toggle Status](../customer/toggle-status.md) later.

---

## Redirect Response

**Method:** <HttpMethodBadge method="GET" />

<ParamTable
  title="Query Parameters"
  rows={[
    { name: "status", type: "String", required: true, description: "Card bind status" },
    { name: "customerId", type: "String", required: true, description: "Card bind customer ID. Use this for subsequent API calls." },
    { name: "reason", type: "String", description: "Card bind failure reason" }
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
