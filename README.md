# Revenue Monster Documentation

Our documentation is here: [RM Documentation](https://doc.revenuemonster.my/).

This is a [Docusaurus 3](https://docusaurus.io/) site for Revenue Monster's API documentation.

## Getting Started

### Prerequisites

- **[Git](https://git-scm.com/)**
- **[Node.js](https://nodejs.org/)** version **18 or higher** (LTS 20 recommended)
- **npm** (ships with Node.js)

Check your versions:

```bash
node -v
npm -v
```

### 1. Clone the repository

```bash
git clone https://github.com/aimandanish02/api-rm-docs.git
cd api-rm-docs
```

> Using SSH instead? `git clone git@github.com:aimandanish02/api-rm-docs.git`

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm start
```

This opens the site at **http://localhost:3000** with hot reload — edits to files in `docs/` and `src/` show up instantly.

### 4. Build for production (optional)

```bash
npm run build          # generates static files into build/
npx docusaurus serve   # preview the production build locally
```

## Project Structure

| Path | Description |
|------|-------------|
| `docs/` | Public API documentation (MDX) |
| `docs_internal/` | Internal payment API docs |
| `sidebars.js` | Sidebar navigation structure |
| `src/components/` | Custom React components (ApiPlayground, ParamTable, CodeBlock, …) |
| `src/theme/` | Theme overrides (sidebar, doc layout) |
| `src/css/custom.css` | Global styles + API method badges |
| `docusaurus.config.js` | Site configuration |
| `rm-api-proxy/` | Optional Cloudflare Workers API proxy (see below) |

## Available Scripts

| Command | What it does |
|---------|--------------|
| `npm start` | Start dev server with hot reload |
| `npm run build` | Build the production bundle |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run swizzle` | Eject a Docusaurus theme component for customization |

## Deployment

The site deploys to GitHub Pages. Config in `docusaurus.config.js` points to
`https://aimandanish02.github.io/api-rm-docs/`. To deploy:

```bash
npm run deploy
```

> Update `url`, `baseUrl`, `organizationName`, and `projectName` in `docusaurus.config.js` if you fork this repo to your own account.

## API Proxy (Optional)

`rm-api-proxy/` is a standalone Cloudflare Workers project that powers the interactive
API playground by signing requests server-side. You only need it if you're working on
the live playground.

```bash
cd rm-api-proxy
npm install
npm run dev        # local Worker at http://localhost:8787
```

Deploying the proxy requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/),
a Cloudflare account, a KV namespace (`RM_KV`), and an `ENCRYPTION_KEY` secret:

```bash
npx wrangler secret put ENCRYPTION_KEY
npx wrangler deploy
```

## Troubleshooting

- **Port 3000 already in use** — start on another port: `npm start -- --port 3001`
- **Build fails on broken links** — `onBrokenLinks` is set to `throw`; fix the reported link or use a valid relative path.
- **Node version errors** — make sure you're on Node 18+. Use [nvm](https://github.com/nvm-sh/nvm) to switch: `nvm install 20 && nvm use 20`.
