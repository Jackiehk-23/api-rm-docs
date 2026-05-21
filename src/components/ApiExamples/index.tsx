//example request/response component for API reference pages. Expects frontMatter.
import React, { useState, useEffect } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import type { Language } from "prism-react-renderer";
import { useDoc } from "@docusaurus/theme-common/internal";
import { SNIPPET_LANGS, SnippetLang, generateSnippet } from "../../utils/snippets";
import styles from "./styles.module.css";

// ── Extend prism-react-renderer's bundled Prism with the languages we need.
// The bundled Prism only ships markup/css/clike/js/jsx/ts/bash/yaml/etc.
// PHP, Python, Go, and JSON must be registered manually or they render as plain text.
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
// markup-templating MUST be registered before php (php depends on it).
require("prismjs/components/prism-markup-templating");
require("prismjs/components/prism-json");
require("prismjs/components/prism-php");
require("prismjs/components/prism-python");
require("prismjs/components/prism-go");

// ── Color palette (shared between light/dark for consistent semantics) ──
// Keywords / property keys / tags / constants / variables-in-keyword-role → red/pink
// Strings → green
// Numbers / builtins → blue (light) / cyan (dark)
// Functions / class-names / decorators → purple
// Variables ($var, @var) → orange (distinguishes from keywords)
// Regex / important → orange (light) / yellow (dark)
// Comments → gray italic
// Operators / punctuation → neutral

// Light theme
const lightTheme = {
  plain: { color: "#24292e", backgroundColor: "transparent" },
  styles: [
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#6a737d", fontStyle: "italic" as const } },
    { types: ["punctuation"], style: { color: "#24292e" } },
    { types: ["operator"], style: { color: "#24292e" } },
    { types: ["namespace"], style: { opacity: 0.7 } },
    { types: ["property", "tag", "constant", "symbol", "deleted"], style: { color: "#d73a49" } },
    { types: ["boolean"], style: { color: "#005cc5" } },
    { types: ["number"], style: { color: "#005cc5" } },
    { types: ["builtin"], style: { color: "#005cc5" } },
    { types: ["string", "char", "attr-name", "inserted"], style: { color: "#22863a" } },
    { types: ["selector"], style: { color: "#22863a" } },
    { types: ["variable"], style: { color: "#e36209" } },
    { types: ["entity", "url"], style: { color: "#d73a49" } },
    { types: ["atrule", "attr-value", "keyword"], style: { color: "#d73a49" } },
    { types: ["function", "class-name", "decorator"], style: { color: "#6f42c1" } },
    { types: ["regex", "important"], style: { color: "#e36209" } },
    { types: ["important", "bold"], style: { fontWeight: "bold" as const } },
    { types: ["italic"], style: { fontStyle: "italic" as const } },
    { types: ["entity"], style: { cursor: "help" } },
  ],
};

// Dark theme
const darkTheme = {
  plain: { color: "#e2e8f0", backgroundColor: "transparent" },
  styles: [
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#4a5568", fontStyle: "italic" as const } },
    { types: ["punctuation"], style: { color: "#a0aec0" } },
    { types: ["operator"], style: { color: "#a0aec0" } },
    { types: ["namespace"], style: { opacity: 0.7 } },
    { types: ["property", "tag", "constant", "symbol", "deleted"], style: { color: "#fc8181" } },
    { types: ["boolean"], style: { color: "#76e4f7" } },
    { types: ["number"], style: { color: "#76e4f7" } },
    { types: ["builtin"], style: { color: "#76e4f7" } },
    { types: ["string", "char", "attr-name", "inserted"], style: { color: "#68d391" } },
    { types: ["selector"], style: { color: "#68d391" } },
    { types: ["variable"], style: { color: "#f6ad55" } },
    { types: ["entity", "url"], style: { color: "#fc8181" } },
    { types: ["atrule", "attr-value", "keyword"], style: { color: "#fc8181" } },
    { types: ["function", "class-name", "decorator"], style: { color: "#d6bcfa" } },
    { types: ["regex", "important"], style: { color: "#faf089" } },
    { types: ["important", "bold"], style: { fontWeight: "bold" as const } },
    { types: ["italic"], style: { fontStyle: "italic" as const } },
  ],
};

function normalizeCurl(curl: string): string {
  // 1. Convert literal \n sequences → real newlines
  const raw = curl.replace(/\\n/g, "\n").trim();

  // 2. Strip line-continuation backslashes and flatten to one line
  const flat = raw
    .split("\n")
    .map((l) => l.replace(/\\\s*$/, "").trim())
    .filter(Boolean)
    .join(" ");

  // 3. Re-split before each flag (-X / --flag), respecting quoted strings
  const segments: string[] = [];
  let current = "";
  let i = 0;

  while (i < flat.length) {
    const ch = flat[i];

    // Inside a quoted section — never split here
    if (ch === '"' || ch === "'") {
      const q = ch;
      let j = i + 1;
      while (j < flat.length && flat[j] !== q) j++;
      current += flat.slice(i, j + 1);
      i = j + 1;
      continue;
    }

    // Boundary: space immediately before a dash → new flag starts
    if (ch === " " && i + 1 < flat.length && flat[i + 1] === "-") {
      segments.push(current);
      current = "";
      i++; // skip the space; '-' is picked up next iteration
      continue;
    }

    current += ch;
    i++;
  }
  if (current) segments.push(current);

  if (segments.length <= 1) return flat;
  return segments
    .map((s, i) => {
      const line = i === 0 ? s.trim() : `  ${s.trim()}`;
      return i < segments.length - 1 ? `${line} \\` : line;
    })
    .join("\n");
}

function toString(val: any): string | undefined {
  if (!val) return undefined;
  if (typeof val === "string") return val.trim();
  if (typeof val === "object") return JSON.stringify(val, null, 2);
  return String(val).trim();
}

function isBlank(val: any): boolean {
  const str = toString(val);
  if (!str) return true;
  return str.toLowerCase().startsWith("there is no");
}

/**
 * If the cURL string has no --data / -d flag but a body exists separately,
 * append it so all generated snippets include the request body.
 */
function mergeBodyIntoCurl(curl: string, body?: string): string {
  if (!body || isBlank(body)) return curl;
  const hasData = /--data|-d\s+['{]/.test(curl);
  if (hasData) return curl;

  // Collapse the body to a single line for --data
  const oneLine = body.trim().replace(/\n\s*/g, " ");
  return `${curl.trimEnd()}\n    --data \\\n-raw '${oneLine}'`;
}

function CodeHighlight({ code, language }: { code: string; language: Language }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    
    return () => observer.disconnect();
  }, []);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language={language}
      theme={theme}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles.codeBlock}`}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            return (
              <div key={i} {...lineProps} className={styles.codeLine}>
                <span className={styles.lineNumber}>{i + 1}</span>
                <span className={styles.lineContent}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}

export default function ApiExamples() {
  const { frontMatter } = useDoc();
  const examples = (frontMatter as any).examples;

  const rawRequest = toString(examples?.request)
    ? normalizeCurl(toString(examples.request)!)
    : undefined;
  const rawBody = toString(examples?.body);
  const exampleResponse = toString(examples?.response);

  // Produce a complete cURL that always includes the body
  const completeCurl = rawRequest
    ? mergeBodyIntoCurl(rawRequest, rawBody)
    : undefined;

  const [openReq, setOpenReq] = useState(true);
  const [openRes, setOpenRes] = useState(true);
  const [lang, setLang] = useState<SnippetLang>("cURL");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  if (isBlank(completeCurl) && isBlank(exampleResponse)) return null;

  const snippet = completeCurl ? generateSnippet(lang, completeCurl) : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCopyRes = () => {
    navigator.clipboard.writeText(exampleResponse!).then(() => {
      setCopiedRes(true);
      setTimeout(() => setCopiedRes(false), 2000);
    });
  };

  return (
    <div className={styles.wrapper}>

      {/* ── EXAMPLE REQUEST ── */}
      {!isBlank(completeCurl) && (
        <div className={styles.card}>
          <div className={styles.header} onClick={() => setOpenReq(!openReq)}>
            <span>Example Request</span>
            <div className={styles.headerRight} onClick={(e) => e.stopPropagation()}>
              <select
                className={styles.langDropdown}
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value as SnippetLang);
                  if (!openReq) setOpenReq(true);
                }}
              >
                {SNIPPET_LANGS.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              <button
                className={`${styles.copyBtn} ${copied ? styles.copyBtnCopied : ""}`}
                onClick={handleCopy}
              >
                {copied ? "✓" : "Copy"}
              </button>
              <span className={`${styles.chevron} ${!openReq ? styles.chevronCollapsed : ""}`}>▾</span>
            </div>
          </div>
          <div className={`${styles.codeWrapper} ${!openReq ? styles.codeWrapperCollapsed : ""}`}>
            <CodeHighlight code={snippet} language={langToHighlight(lang)} />
          </div>
        </div>
      )}

      {/* ── EXAMPLE RESPONSE ── */}
      {!isBlank(exampleResponse) && (
        <div className={styles.card}>
          <div className={styles.header} onClick={() => setOpenRes(!openRes)}>
            <span>Example Response</span>
            <div className={styles.headerRight} onClick={(e) => e.stopPropagation()}>
              <span className={styles.jsonBadge}>JSON</span>
              <button
                className={`${styles.copyBtn} ${copiedRes ? styles.copyBtnCopied : ""}`}
                onClick={handleCopyRes}
              >
                {copiedRes ? "✓" : "Copy"}
              </button>
              <span className={`${styles.chevron} ${!openRes ? styles.chevronCollapsed : ""}`}>▾</span>
            </div>
          </div>
          <div className={`${styles.codeWrapper} ${!openRes ? styles.codeWrapperCollapsed : ""}`}>
            <CodeHighlight code={exampleResponse!} language="json" />
          </div>
        </div>
      )}

    </div>
  );
}

function langToHighlight(lang: SnippetLang): Language {
  switch (lang) {
    case "cURL": return "bash";
    case "Go": return "go" as Language;
    case "JS Fetch": return "javascript";
    case "Node / Axios": return "javascript";
    case "Python": return "python";
    case "PHP": return "php";
    default: return "bash";
  }
}