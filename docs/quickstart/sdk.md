---
id: sdk
title: SDK
sidebar_label: SDK
---

import Admonition from '@theme/Admonition';

# SDK

Official language SDKs for the Revenue Monster API. Click any card to visit the repository.

<Admonition type="note">
Not all SDKs fully implement every API function. Pull requests are welcome.
</Admonition>

<div className="sdk-grid">

<a href="https://github.com/RevenueMonster/rm-sdk-go" target="_blank" rel="noopener noreferrer" className="sdk-card">
  <img src={require('/img/sdk/go.png').default} alt="Go" className="sdk-logo" />
  <span>Go</span>
</a>

<a href="https://github.com/RevenueMonster/RM-API-SDK-PHP" target="_blank" rel="noopener noreferrer" className="sdk-card">
  <img src={require('/img/sdk/php.png').default} alt="PHP" className="sdk-logo" />
  <span>PHP</span>
</a>

<a href="https://github.com/RevenueMonster/RM-API-SDK-Nodejs" target="_blank" rel="noopener noreferrer" className="sdk-card">
  <img src={require('/img/sdk/Nodejs.png').default} alt="NodeJS" className="sdk-logo" />
  <span>NodeJS</span>
</a>

<a href="https://github.com/RevenueMonster/RM-API-SDK-JAVA" target="_blank" rel="noopener noreferrer" className="sdk-card">
  <img src={require('/img/sdk/java.png').default} alt="Java" className="sdk-logo" />
  <span>Java</span>
</a>

<a href="https://github.com/RevenueMonster/RM-API-SDK-Python" target="_blank" rel="noopener noreferrer" className="sdk-card">
  <img src={require('/img/sdk/python.png').default} alt="Python" className="sdk-logo" />
  <span>Python</span>
</a>

<a href="https://github.com/RevenueMonster/RM-API-SDK-Csharp" target="_blank" rel="noopener noreferrer" className="sdk-card">
  <img src={require('/img/sdk/c#.png').default} alt="C#" className="sdk-logo" />
  <span>C# (Deprecated)</span>
</a>

</div>

<style>{`
.sdk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.sdk-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.25rem 1rem;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: var(--ifm-alert-border-radius);
  text-align: center;
  font-weight: 600;
  color: var(--ifm-color-primary);
  text-decoration: none;
  transition: all 0.2s ease;
}
.sdk-card:hover {
  border-color: var(--ifm-color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-decoration: none;
}
.sdk-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
`}</style>

<!-- SPDX-License-Identifier: Apache-2.0 -->
