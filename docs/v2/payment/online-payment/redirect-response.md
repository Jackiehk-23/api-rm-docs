---
id: redirect-response
title: "Redirect Response"
sidebar_label: "Redirect Response"
---

import Admonition from '@theme/Admonition';

# Redirect Response

<Admonition type="info">
The redirect URL brings the customer back to your page after payment. It can be any URL type (deep link, browser URL, server URL).
</Admonition>

**Method:** <HttpMethodBadge method="GET" />

<ParamTable
  title="Details"
  rows={[
    { name: "status", type: "String", required: true, description: "Payment status" },
    { name: "orderId", type: "String", required: true, description: "Payment order ID" },
    { name: "reason", type: "String", description: "Payment failure reason" },
  ]}
/>

<!-- SPDX-License-Identifier: Apache-2.0 -->
