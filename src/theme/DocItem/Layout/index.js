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
  const [playgroundVisible, setPlaygroundVisible] = useState(false);
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);

  useEffect(() => {
    publishTOC(toc ?? []);
  }, [toc]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (playgroundVisible && window.innerWidth <= 996) {
      document.body.classList.add("mobile-playground-open");
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.classList.remove("mobile-playground-open");
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("mobile-playground-open");
      document.documentElement.style.overflow = "";
    };
  }, [playgroundVisible]);

  if (!api) {
    return (
      <div className={styles.docItemWrapper}>
        <div className={styles.articleWrapper}>
          <Layout {...props} />
        </div>
      </div>
    );
  }

  const togglePanel = () => setIsPanelCollapsed((p) => !p);

  return (
    <div className={`${styles.apiLayout} api-page-layout`}>
      <div className={styles.docContent}>
        <Layout {...props} />
      </div>

      {/* Edge strip with collapse handle — desktop only */}
      <div className={styles.playgroundEdge}>
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

      {/* Playground panel — collapses side-to-side on desktop, fixed overlay on mobile */}
      <aside
        className={`${styles.playground} ${isPanelCollapsed ? styles.playgroundPanelCollapsed : ""} ${playgroundVisible ? styles.playgroundVisible : ""}`}
      >
        <ApiPanel api={api} onCollapsePanel={togglePanel} />
      </aside>

      {/* Mobile toggle button */}
      <button
        className={`${styles.mobileToggle} ${playgroundVisible ? styles.mobileToggleActive : ""}`}
        onClick={() => setPlaygroundVisible((v) => !v)}
        aria-label={playgroundVisible ? "Close API Playground" : "Open API Playground"}
      >
        {playgroundVisible ? "✕ Close Playground" : "🔧 Try API"}
      </button>
    </div>
  );
}
