module.exports = function rehypeCollapsibleSections() {
  return function (tree, vfile) {
    const fm = (vfile && vfile.data && vfile.data.frontMatter) || {};
    // Pages can set `expand_all_sections: true` to keep every section open by
    // default (the collapse toggle still works, nothing starts collapsed).
    const forceOpen = fm.expand_all_sections === true;
    tree.children = groupByTag(tree.children, "h2", true, forceOpen);
  };
};

function headingText(node) {
  const collect = (n) =>
    n.type === "text"
      ? n.value
      : (n.children || []).map(collect).join("");
  return collect(node).trim().toLowerCase();
}

function isCollapsedByDefault(heading) {
  const text = headingText(heading);
  return /^what/.test(text) || /^when/.test(text);
}

const ICONS = {
  what: {
    // Info circle
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a1 1 0 110 2 1 1 0 010-2zm-1 4h2v6h-2v-6z",
    color: "#6b7280",
  },
  when: {
    // Clock
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 100 16A8 8 0 0012 4zm.5 3v5.25l3.6 2.1-.75 1.29L11 13V7h1.5z",
    color: "#6b7280",
  },
  how: {
    // Code brackets
    d: "M8.293 6.293L2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293-1.414-1.414zm7.414 0l-1.414 1.414L18.586 12l-4.293 4.293 1.414 1.414L21.414 12l-5.707-5.707z",
    color: "#6b7280",
  },
};

function makeIcon(type) {
  const icon = ICONS[type];
  if (!icon) return null;
  return {
    type: "element",
    tagName: "svg",
    properties: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: icon.color,
      style: "display:inline-block;vertical-align:-0.15em;margin-right:0.4em;flex-shrink:0",
      "aria-hidden": "true",
    },
    children: [
      {
        type: "element",
        tagName: "path",
        properties: { d: icon.d },
        children: [],
      },
    ],
  };
}

function injectIcon(heading) {
  const text = headingText(heading);
  let type = null;
  if (/^what/.test(text)) type = "what";
  else if (/^when/.test(text)) type = "when";
  else if (/^how/.test(text)) type = "how";
  if (!type) return heading;
  const icon = makeIcon(type);
  return {
    ...heading,
    children: [icon, ...heading.children],
  };
}

function makeDetails(heading, body, forceOpen) {
  // Icons removed: section headers (What is this / When to Use / How to Use)
  // render without a leading icon. (injectIcon kept but unused.)
  const headingWithIcon = heading;
  const open = forceOpen ? true : (isCollapsedByDefault(heading) ? undefined : true);
  return {
    type: "element",
    tagName: "details",
    properties: { open, className: ["section-details"] },
    children: [
      {
        type: "element",
        tagName: "summary",
        properties: { className: ["section-summary"] },
        children: [
          headingWithIcon,
          {
            type: "element",
            tagName: "span",
            properties: { className: ["section-toggle"] },
            children: [{ type: "text", value: "▾" }],
          },
        ],
      },
      {
        type: "element",
        tagName: "div",
        properties: { className: ["section-body"] },
        children: body,
      },
    ],
  };
}

function groupByTag(children, tag, nestH3, forceOpen) {
  const output = [];
  let currentGroup = null;

  function closeGroup() {
    if (!currentGroup) return;
    const body = nestH3
      ? groupByTag(currentGroup.body, "h3", false, forceOpen)
      : currentGroup.body;
    output.push(makeDetails(currentGroup.heading, body, forceOpen));
    currentGroup = null;
  }

  for (const node of children) {
    if (node.type === "element" && node.tagName === tag) {
      closeGroup();
      currentGroup = { heading: node, body: [] };
    } else if (currentGroup) {
      currentGroup.body.push(node);
    } else {
      output.push(node);
    }
  }

  closeGroup();
  return output;
}
