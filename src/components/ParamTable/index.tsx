import React, { useState } from "react";
import styles from "./styles.module.css";

export interface ParamRow {
  name: string;
  type?: string;
  required?: boolean;
  description?: string;
  example?: string;
  /**
   * Override the anchor href used when `example` matches a "Refer to …" or
   * "See Step N" pattern. When omitted the component falls back to:
   *   - "Refer to …"  → `#<name-slug>` (or `#<name>` if slug is the same)
   *   - "See Step N"  → `#step-N`
   */
  anchor?: string;
  children?: ParamRow[];
}

interface ParamTableProps {
  title?: string;
  rows?: ParamRow[];
}

export default function ParamTable({
  title = "Parameters",
  rows = [],
}: ParamTableProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        type="button"
      >
        <svg
          className={`${styles.toggleIcon} ${open ? styles.toggleIconOpen : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{open ? `Hide ${title}` : `Show ${title}`}</span>
      </button>

      <div className={`${styles.body} ${open ? styles.bodyOpen : styles.bodyClose}`}>
        <div className={styles.inner}>
          {rows.map((row, i) => (
            <ParamRowItem key={i} row={row} last={i === rows.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ParamRowItem({ row, last }: { row: ParamRow; last: boolean }) {
  const [childOpen, setChildOpen] = useState(false);
  const hasChildren = row.children && row.children.length > 0;
  const typeKey = `type_${(row.type ?? "").toLowerCase()}` as keyof typeof styles;

  return (
    <div className={`${styles.row} ${last ? styles.rowLast : ""}`}>
      <div className={styles.meta}>
        <code className={styles.paramName}>{row.name}</code>
        {row.type && (
          <span className={`${styles.typeLabel} ${styles[typeKey] ?? ""}`}>
            {row.type.toUpperCase()}
          </span>
        )}
        {row.required && (
          <span className={styles.requiredLabel}>required</span>
        )}
      </div>

      {row.description && (
        <p className={styles.description}>{row.description}</p>
      )}

      {row.example && (
        <p className={styles.example}>
          <span className={styles.exampleLabel}>Example: </span>
          {/\(Refer to explanation below\)|Refer to explanation below/i.test(row.example) ? (
            <a
              href={`#${row.anchor ?? row.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={styles.exampleRef}
            >
              {row.example}
            </a>
          ) : /\(See Step\s+\d+[^)]*\)|See Step\s+\d+/i.test(row.example) ? (
            (() => {
              const stepMatch = row.example.match(/Step\s+(\d+)/i);
              const stepNum = stepMatch ? stepMatch[1] : "1";
              const href = row.anchor ?? `#step-${stepNum}`;
              return (
                <a href={href} className={styles.exampleRef}>
                  {row.example}
                </a>
              );
            })()
          ) : (
            <code className={styles.exampleValue}>{row.example}</code>
          )}
        </p>
      )}

      {hasChildren && (
        <div className={styles.childSection}>
          <button
            className={`${styles.childToggle} ${childOpen ? styles.childToggleOpen : ""}`}
            onClick={() => setChildOpen((o) => !o)}
            type="button"
          >
            <svg
              className={styles.childToggleX}
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ display: childOpen ? "block" : "none" }}
            >
              <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg
              className={styles.childToggleChevron}
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ display: childOpen ? "none" : "block" }}
            >
              <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{childOpen ? "Hide child parameters" : "Show child parameters"}</span>
          </button>

          <div className={`${styles.childBody} ${childOpen ? styles.childBodyOpen : styles.childBodyClose}`}>
            <div className={styles.childInner}>
              {row.children!.map((child, ci) => (
                <ParamRowItem
                  key={ci}
                  row={child}
                  last={ci === row.children!.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
