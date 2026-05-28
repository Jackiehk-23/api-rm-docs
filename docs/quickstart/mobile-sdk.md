---
id: mobile-sdk
title: Mobile SDK
sidebar_label: Mobile SDK
---

import Admonition from '@theme/Admonition';


# Mobile SDK

Official mobile SDKs for in-app payment integration. Click any card to visit the repository.

<Admonition type="note">
Not all SDKs fully implement every API function. Pull requests are welcome.
</Admonition>

<div className="sdk-grid">

[**Android →**](https://github.com/RevenueMonster/RM-Android)

[**iOS →**](https://github.com/RevenueMonster/RM-IOS)

</div>

<style>{`
.sdk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.sdk-grid a {
  display: block;
  padding: 1rem;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: var(--ifm-alert-border-radius);
  text-align: center;
  font-weight: 600;
  color: var(--ifm-color-primary);
  text-decoration: none;
  transition: all 0.2s ease;
}
.sdk-grid a:hover {
  border-color: var(--ifm-color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-decoration: none;
}
`}</style>

<!-- SPDX-License-Identifier: Apache-2.0 -->
