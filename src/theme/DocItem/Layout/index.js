import React, { useState, useEffect } from "react";
import Layout from "@theme-original/DocItem/Layout";
import { useDoc } from "@docusaurus/theme-common/internal";
import ApiPlayground from "@site/src/components/ApiPlayground";
import ApiExamples from "@site/src/components/ApiExamples";
import { useApiSharedState } from "@site/src/components/ApiPlayground/UseApiSharedState";
import { publishTOC } from "@site/src/utils/tocBridge";
import styles from "./styles.module.css";

function ApiPanel({ api, onCollapsePanel }) {
  const shared = useApiSharedState({
    method: api.method,
    url: api.url?.sandbox ?? api.url ?? "",
    body: api.body,
    requiresSignature: api.requiresSignature ?? true,
    requiresAccessToken: api.requiresAccessToken ?? true,
    useServerSigning: true,
  });

  return (
    <ApiPlayground shared={shared} onCollapsePanel={onCollapsePanel}>
      <ApiExamples />
    </ApiPlayground>
  );
}

export default function LayoutWrapper(props) {
  const { frontMatter, toc } = useDoc();
  const api = frontMatter?.api;
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [mobilePlaygroundOpen, setMobilePlaygroundOpen] = useState(false);

  useEffect(() => {
    publishTOC(frontMatter?.hide_table_of_contents ? [] : (toc ?? []));
  }, [toc, frontMatter?.hide_table_of_contents]);

  if (!api) {
    return (
      <div className={`${styles.docItemWrapper} non-api-layout`}>
        <div className={styles.articleWrapper}>
          <Layout {...props} />
        </div>
      </div>
    );
  }

  const togglePanel = () => setIsPanelCollapsed((p) => !p);
  const openPlayground = () => setMobilePlaygroundOpen(true);
  const closePlayground = () => setMobilePlaygroundOpen(false);

  return (
    <div className={`${styles.apiLayout} api-page-layout ${mobilePlaygroundOpen ? styles.mobilePlaygroundOpen : ""}`}>
      <div className={styles.docContent}>
        <Layout {...props} />
      </div>

      {/* Edge strip with collapse handle — desktop only */}
      <div className={`${styles.playgroundEdge} ${isPanelCollapsed ? styles.playgroundEdgeCollapsed : ""}`}>
        <button
          className={`${styles.collapseHandle} ${isPanelCollapsed ? styles.collapseHandleCollapsed : ""}`}
          onClick={togglePanel}
          title={isPanelCollapsed ? "Expand playground" : "Collapse playground"}
          aria-label={isPanelCollapsed ? "Expand playground" : "Collapse playground"}
        >
          <svg
            className={styles.collapseHandleIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6.5 2L3.5 5L6.5 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Playground — split-pane on desktop, full page on mobile when open */}
      <aside
        className={`${styles.playground} ${isPanelCollapsed ? styles.playgroundPanelCollapsed : ""}`}
      >
        {/* Mobile sticky back bar — only shows on mobile when playground is open */}
        <div className={styles.mobileBackBar}>
          <button
            type="button"
            className={styles.mobileBackBtn}
            onClick={closePlayground}
            aria-label="Back to docs"
          >
            ← Back to Docs
          </button>
        </div>
        <ApiPanel api={api} onCollapsePanel={togglePanel} />
      </aside>

      {/* Mobile FAB — opens playground as full page */}
      <button
        type="button"
        className={styles.mobileToggle}
        onClick={openPlayground}
        aria-label="Open API Playground"
      >
        🔧 Try API
      </button>
    </div>
  );
}
