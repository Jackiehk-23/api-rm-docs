// Remark plugin: auto-insert the <ApiEndpoint label="Endpoint" /> box right
// after the "## How to Use" heading on any page that declares an `api:` block
// in its frontmatter.
//
// Why this exists: the endpoint (method + URL) already lives in frontmatter
// `api:` — the single source of truth that also drives the interactive
// playground. Rather than repeat it as a hand-written <ApiEndpoint> tag on
// every page, this plugin renders it automatically. A new doc only needs the
// frontmatter `api:` block; nothing extra to author, nothing to keep in sync.
//
// The box is inserted under "How to Use" (the technical section) so it stays
// out of the business-facing "What is this? / When to Use" intro. Because this
// runs before the rehype collapsibleSections plugin, the box is grouped into
// the collapsible "How to Use" section.
//
// ApiEndpoint is registered globally in src/theme/MDXComponents.tsx, so the
// injected JSX node resolves without a per-page import.

const yaml = require("js-yaml");

function headingText(node) {
  const collect = (n) =>
    n.type === "text" || n.type === "inlineCode"
      ? n.value
      : (n.children || []).map(collect).join("");
  return collect(node).trim().toLowerCase();
}

function getFrontMatter(tree, vfile) {
  const fromVfile = vfile && vfile.data && vfile.data.frontMatter;
  if (fromVfile) return fromVfile;
  const yamlNode = tree.children.find((n) => n.type === "yaml");
  if (!yamlNode) return null;
  try {
    return yaml.load(yamlNode.value) || null;
  } catch {
    return null;
  }
}

module.exports = function remarkInjectApiEndpoint() {
  return function (tree, vfile) {
    const fm = getFrontMatter(tree, vfile);
    if (!fm || !fm.api) return;

    const idx = tree.children.findIndex(
      (n) =>
        n.type === "heading" &&
        n.depth === 2 &&
        headingText(n) === "how to use"
    );
    if (idx === -1) return;

    // Idempotent: skip if an ApiEndpoint already sits right after the heading.
    const next = tree.children[idx + 1];
    if (
      next &&
      next.type === "mdxJsxFlowElement" &&
      next.name === "ApiEndpoint"
    ) {
      return;
    }

    tree.children.splice(idx + 1, 0, {
      type: "mdxJsxFlowElement",
      name: "ApiEndpoint",
      attributes: [
        { type: "mdxJsxAttribute", name: "label", value: "Endpoint" },
      ],
      children: [],
    });
  };
};
