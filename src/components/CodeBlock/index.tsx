import React, { useState, useRef, useEffect } from "react";
import { Highlight } from "prism-react-renderer";
import type { Language } from "prism-react-renderer";
import styles from "./styles.module.css";

// Light theme for syntax highlighting
const lightTheme = {
  plain: {
    color: "#475569",
    backgroundColor: "transparent",
  },
  styles: [
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#6a737d", fontStyle: "italic" as const } },
    { types: ["punctuation"], style: { color: "#5e6687" } },
    // JSON keys / object properties → blue
    { types: ["property"], style: { color: "#005cc5", fontWeight: "500" as const } },
    // Strings → green
    { types: ["string", "string-literal", "attr-name", "char", "builtin", "inserted", "selector"], style: { color: "#22863a" } },
    // Numbers → orange
    { types: ["number", "unit"], style: { color: "#e36209" } },
    // Booleans / null / constants → red
    { types: ["boolean", "constant", "symbol", "deleted", "tag"], style: { color: "#d73a49" } },
    { types: ["operator", "entity", "url"], style: { color: "#5e6687" } },
    { types: ["atrule", "attr-value", "keyword"], style: { color: "#d73a49" } },
    { types: ["function", "class-name"], style: { color: "#6f42c1" } },
    { types: ["regex", "important", "variable"], style: { color: "#e36209" } },
  ],
};

// Dark theme for syntax highlighting
const darkTheme = {
  plain: {
    color: "#94a3b8",
    backgroundColor: "transparent",
  },
  styles: [
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#4a5568", fontStyle: "italic" as const } },
    { types: ["punctuation"], style: { color: "#718096" } },
    // JSON keys / object properties → blue
    { types: ["property"], style: { color: "#79b8ff", fontWeight: "500" as const } },
    // Strings → green
    { types: ["string", "attr-name", "char", "builtin", "inserted", "selector"], style: { color: "#68d391" } },
    // Numbers → orange
    { types: ["number", "unit"], style: { color: "#f08d49" } },
    // Booleans / null / constants → red/pink
    { types: ["boolean", "constant", "symbol", "deleted", "tag"], style: { color: "#fc8181" } },
    { types: ["operator", "entity", "url"], style: { color: "#a0aec0" } },
    { types: ["atrule", "attr-value", "keyword"], style: { color: "#76e4f7" } },
    { types: ["function", "class-name"], style: { color: "#f6ad55" } },
    { types: ["regex", "important", "variable"], style: { color: "#faf089" } },
  ],
};

const LANG_META: Record<string, { label: string; color: string; bg: string; colorLight?: string; bgLight?: string }> = {
  json:       { label: "JSON",       color: "#f6ad55", bg: "rgba(246,173,85,0.12)",    colorLight: "#b45309", bgLight: "rgba(180,83,9,0.08)"    },
  bash:       { label: "Bash",       color: "#68d391", bg: "rgba(104,211,145,0.12)",   colorLight: "#15803d", bgLight: "rgba(21,128,61,0.08)"   },
  curl:       { label: "cURL",       color: "#68d391", bg: "rgba(104,211,145,0.12)",   colorLight: "#15803d", bgLight: "rgba(21,128,61,0.08)"   },
  javascript: { label: "JavaScript", color: "#faf089", bg: "rgba(250,240,137,0.12)",   colorLight: "#b45309", bgLight: "rgba(180,83,9,0.08)"    },
  typescript: { label: "TypeScript", color: "#76e4f7", bg: "rgba(118,228,247,0.12)",   colorLight: "#0e7490", bgLight: "rgba(14,116,144,0.08)"  },
  jsx:        { label: "JSX",        color: "#f687b3", bg: "rgba(246,135,179,0.12)",   colorLight: "#be185d", bgLight: "rgba(190,24,93,0.08)"   },
  tsx:        { label: "TSX",        color: "#f687b3", bg: "rgba(246,135,179,0.12)",   colorLight: "#be185d", bgLight: "rgba(190,24,93,0.08)"   },
  plaintext:  { label: "Text",       color: "#a0aec0", bg: "rgba(160,174,192,0.12)" },
  kotlin:     { label: "Kotlin",     color: "#c792ea", bg: "rgba(199,146,234,0.12)",   colorLight: "#7c3aed", bgLight: "rgba(124,58,237,0.08)"  },
  swift:      { label: "Swift",      color: "#fd9168", bg: "rgba(253,145,104,0.12)",   colorLight: "#c2410c", bgLight: "rgba(194,65,12,0.08)"   },
  java:       { label: "Java",       color: "#f07178", bg: "rgba(240,113,120,0.12)",   colorLight: "#b91c1c", bgLight: "rgba(185,28,28,0.08)"   },
  python:     { label: "Python",     color: "#82aaff", bg: "rgba(130,170,255,0.12)",   colorLight: "#1d4ed8", bgLight: "rgba(29,78,216,0.08)"   },
  php:        { label: "PHP",        color: "#c792ea", bg: "rgba(199,146,234,0.12)",   colorLight: "#7c3aed", bgLight: "rgba(124,58,237,0.08)"  },
};

interface Props {
  children: string;
  language?: Language | "curl" | "plaintext" | string;
  filename?: string;
  hideLineNumbers?: boolean;
  defaultCollapsed?: boolean;
}

export default function CodeBlock({
  children,
  language = "plaintext",
  filename,
  hideLineNumbers = false,
  defaultCollapsed = false,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const prismLang = (
    language === "curl" || language === "plaintext" ? "bash" : language
  ) as Language;

  const meta = LANG_META[language] ?? LANG_META["plaintext"];
  const badgeColor = isDark ? meta.color : (meta.colorLight ?? meta.color);
  const badgeBg    = isDark ? meta.bg    : (meta.bgLight    ?? meta.bg);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        {/* Collapse toggle — far left */}
        <button
          className={styles.collapseBtn}
          onClick={() => setCollapsed(c => !c)}
          aria-label={collapsed ? "Expand code" : "Collapse code"}
          type="button"
        >
          <svg
            className={`${styles.collapseIcon} ${collapsed ? "" : styles.collapseIconOpen}`}
            width="12" height="12" viewBox="0 0 12 12" fill="none"
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.headerLeft}>
          {filename && (
            <span className={styles.filename}>{filename}</span>
          )}
        </div>

        <div className={styles.headerRight}>
          <span
            className={styles.langBadge}
            style={{ color: badgeColor, background: badgeBg, borderColor: `${badgeColor}33` }}
          >
            {meta.label}
          </span>

          <button
            className={`${styles.copyBtn} ${copied ? styles.copyBtnSuccess : ""}`}
            onClick={handleCopy}
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <svg className={styles.icon} viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg className={styles.icon} viewBox="0 0 16 16" fill="none">
                  <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code area */}
      <div className={`${styles.collapseBody} ${collapsed ? styles.collapseBodyClosed : styles.collapseBodyOpen}`}>
      <div className={styles.codeWrapper}>
        <Highlight
          code={children.trim()}
          language={prismLang}
          theme={theme}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre ref={codeRef} className={`${className} ${styles.pre}`}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <div
                    key={i}
                    {...lineProps}
                    className={`${styles.line} ${hoveredLine === i ? styles.lineHovered : ""}`}
                    onMouseEnter={() => setHoveredLine(i)}
                    onMouseLeave={() => setHoveredLine(null)}
                  >
                    {!hideLineNumbers && (
                      <span className={`${styles.lineNumber} ${hoveredLine === i ? styles.lineNumberHovered : ""}`}>
                        {i + 1}
                      </span>
                    )}
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
      </div>
      </div>

      {/* Bottom glow line */}
      <div className={styles.bottomAccent} style={{ background: meta.color }} />
    </div>
  );
}