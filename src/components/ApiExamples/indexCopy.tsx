import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { SNIPPET_LANGS, SnippetLang, generateSnippet } from "../../utils/snippets";
import styles from "./styles.module.css";

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
    return `${curl.trimEnd()} \\\n    --data '${oneLine}'`;
}

export default function ApiExamples() {
    const { frontMatter } = useDoc();
    const examples = (frontMatter as any).examples;

    const rawRequest = toString(examples?.request);
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

    if (isBlank(completeCurl) && isBlank(exampleResponse)) return null;

    const snippet = completeCurl ? generateSnippet(lang, completeCurl) : "";

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
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
                            <span className={styles.chevron}>{openReq ? "▾" : "▸"}</span>
                        </div>
                    </div>

                    {openReq && (
                        <CodeBlock language={langToHighlight(lang)}>
                            {snippet}
                        </CodeBlock>
                    )}
                </div>
            )}

            {/* ── EXAMPLE RESPONSE ── */}
            {!isBlank(exampleResponse) && (
                <div className={styles.card}>
                    <div className={styles.header} onClick={() => setOpenRes(!openRes)}>
                        <span>Example Response</span>
                        <span className={styles.chevron}>{openRes ? "▾" : "▸"}</span>
                    </div>
                    {openRes && (
                        <CodeBlock language="json">{exampleResponse!}</CodeBlock>
                    )}
                </div>
            )}

        </div>
    );
}

function langToHighlight(lang: SnippetLang): string {
    switch (lang) {
        case "cURL": return "bash";
        case "JS Fetch": return "javascript";
        case "Node / Axios": return "javascript";
        case "Python": return "python";
        case "PHP": return "php";
        default: return "bash";
    }
}