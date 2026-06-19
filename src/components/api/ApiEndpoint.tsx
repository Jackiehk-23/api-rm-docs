import React from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import HttpMethodBadge from "../HttpMethodBadge";
import styles from "./api.module.css";

type Props = {
  // All optional: when omitted, the endpoint is read from the page's
  // frontmatter `api:` block (single source of truth, shared with the playground).
  method?: string;
  path?: string;
  sandbox?: string;
  prod?: string;
  label?: string;
};

// Show the path only (e.g. "/v3/partner/merchant"), stripping the scheme +
// host from full URLs in frontmatter. Done with a regex (not `new URL`) so
// path-param braces and query strings are preserved literally — `new URL`
// percent-encodes `{` / `}` into `%7B` / `%7D`.
function toPath(raw: string): string {
  const match = raw.match(/^[a-z]+:\/\/[^/]+(\/.*)$/i);
  return match ? match[1] : raw;
}

export default function ApiEndpoint({ method, path, sandbox, prod, label }: Props) {
  const { frontMatter } = useDoc();
  const api = (frontMatter?.api ?? {}) as {
    method?: string;
    url?: string | { sandbox?: string; prod?: string };
  };

  const fmUrl =
    typeof api.url === "string" ? api.url : api.url?.sandbox ?? api.url?.prod;

  const resolvedMethod = method ?? api.method ?? "";
  const resolvedPath = path ?? sandbox ?? prod ?? fmUrl ?? "";
  const displayPath = toPath(resolvedPath);

  return (
    <>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.wrapper}>
        <HttpMethodBadge method={resolvedMethod} />
        <code className={styles.path}>{displayPath}</code>
      </div>
    </>
  );
}
