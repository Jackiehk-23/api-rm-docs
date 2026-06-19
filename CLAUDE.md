# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Docusaurus 3 documentation site for Revenue Monster's API. The documentation covers payment processing, merchant onboarding, loyalty programs, eKYC, and more.

## Commands

```bash
npm start        # Start dev server with hot reload at http://localhost:3000
npm run build     # Build production bundle
npm run deploy    # Deploy to GitHub Pages
npm run swizzle   # Eject Docusaurus theme components for customization
```

## Architecture

### Documentation Structure
- `docs/` — Public API documentation (MDX format)
- `docs_internal/` — Internal payment API documentation
- `sidebars.js` — Sidebar navigation structure with category definitions

### Custom Components
- `src/components/ApiPlayground/` — Interactive API example component with multi-language code snippets and copy functionality
- `src/components/ParamTable/` — Parameter table component for API documentation
- `src/components/ApiExamples/` — API examples with copy-to-clipboard

### MDX Components & Rendering
Custom components are registered globally in `src/theme/MDXComponents.tsx`, so docs use them without per-file imports: `ApiPlayground`, `ApiExamples`, `ParamTable`, `CodeBlock`, `HttpMethodBadge`, `ApiEndpoint`, and `table` (every markdown pipe table renders through `src/components/MarkdownTable`).

### Endpoint badge (auto-injected — do NOT add it per page)
The `POST /v3/...` method+path badge shown under **How to Use** is **rendered automatically** — you do not (and should not) write an `<ApiEndpoint>` tag in the page. The remark plugin `src/remark/injectApiEndpoint.js` inserts `<ApiEndpoint label="Endpoint" />` right after the `## How to Use` heading on any page whose frontmatter has an `api:` block. `ApiEndpoint` (`src/components/api/ApiEndpoint.tsx`) reads the method + URL from that same frontmatter (`api.method`, `api.url`) — the single source of truth that also drives the interactive playground. So: **to change or add an endpoint, edit frontmatter `api:` only.** The badge sits inside How to Use (the technical section) on purpose, keeping the business-facing "What is this? / When to Use" intro free of API jargon. `ApiEndpoint` still accepts explicit props (`method`/`sandbox`/`prod`) for the few pages without an `api:` block (e.g. `query-checkout.md`) or without a How to Use heading (the `accesstoken/*` token pages), which keep a manual tag.

Build-time transforms wired in `docusaurus.config.js`: the remark plugin above runs first, then the rehype plugins `src/rehype/collapsibleSections.js` (groups body content under each `h2`) and `src/rehype/stepHeadings.js`.

### Sidebar API Method Badges
Docs with `className: "api-get"`, `"api-post"`, etc. in `sidebars.js` display colored HTTP method badges (GET/POST/PUT/DEL/PATCH) next to the link. See `src/css/custom.css` lines 129-187 for styling.

### Theme Customization
- `src/theme/DocSidebar/` — Custom sidebar components
- `src/theme/DocItem/Layout/` — Custom doc layout
- `src/css/custom.css` — Global CSS overrides and API method badge styles (ApiPlayground uses its own `styles.module.css`)

### API Proxy
`rm-api-proxy/` — Cloudflare Workers API proxy (own `package.json` + `wrangler.jsonc`). Holds credentials server-side: encrypts client credentials in KV (`RM_KV`) with AES-GCM, performs RSA request signing in the Worker, and brokers OAuth/proxy calls so the private key never persists in the browser. Deploy with `wrangler deploy` (needs the `ENCRYPTION_KEY` secret).
