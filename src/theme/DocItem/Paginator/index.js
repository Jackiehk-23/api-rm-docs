import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocPaginator from "@theme/DocPaginator";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";

export default function DocItemPaginator() {
  const { metadata } = useDoc();
  const {
    previous,
    next,
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
  } = metadata;

  const hasEditMeta = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  return (
    <>
      <DocPaginator previous={previous} next={next} />
      {hasEditMeta && (
        <div
          className={clsx(
            ThemeClassNames.docs.docFooter,
            ThemeClassNames.docs.docFooterEditMetaRow,
            "row margin-top--sm"
          )}
        >
          <div className="col">
            {editUrl && <EditThisPage editUrl={editUrl} />}
          </div>
          <div className="col text--right" style={{ fontSize: "0.75rem", opacity: 0.6 }}>
            {(lastUpdatedAt || lastUpdatedBy) && (
              <LastUpdated
                lastUpdatedAt={lastUpdatedAt}
                formattedLastUpdatedAt={formattedLastUpdatedAt}
                lastUpdatedBy={lastUpdatedBy}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
