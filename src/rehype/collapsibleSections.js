module.exports = function rehypeCollapsibleSections() {
  return function (tree) {
    const children = tree.children;
    const output = [];
    let currentGroup = null;

    // Headings that should be wrapped in a collapsible <details> (always start closed).
    // Any h2 NOT matching one of these patterns is rendered as a plain <h2>.
    const COLLAPSED_BY_DEFAULT = [
      /what is this/i,
      /how it works/i,
      /overview/i,
      /introduction/i,
      /\babout\b/i,
      /\bnotes?\b/i,
      /\blimitations?\b/i,
      /\bwarnings?\b/i,
    ];

    function getHeadingText(node) {
      let text = "";
      function walk(n) {
        if (n.type === "text") text += n.value;
        if (n.children) n.children.forEach(walk);
      }
      walk(node);
      return text;
    }

    function shouldStartCollapsed(headingNode) {
      const text = getHeadingText(headingNode);
      return COLLAPSED_BY_DEFAULT.some((re) => re.test(text));
    }

    function closeGroup() {
      if (!currentGroup) return;
      output.push({
        type: "element",
        tagName: "details",
        properties: { open: false, className: ["section-details"] },
        children: [
          {
            type: "element",
            tagName: "summary",
            properties: { className: ["section-summary"] },
            children: [
              currentGroup.heading,
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
            children: currentGroup.body,
          },
        ],
      });
      currentGroup = null;
    }

    for (const node of children) {
      if (node.type === "element" && node.tagName === "h2") {
        closeGroup();
        if (shouldStartCollapsed(node)) {
          // Descriptive heading → start a new collapsible group (always closed).
          currentGroup = { heading: node, body: [] };
        } else {
          // Non-descriptive heading → emit as plain h2; subsequent content
          // until the next h2 also goes straight to plain output.
          output.push(node);
        }
      } else if (currentGroup) {
        currentGroup.body.push(node);
      } else {
        output.push(node);
      }
    }

    closeGroup();
    tree.children = output;
  };
};
