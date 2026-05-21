module.exports = function rehypeCollapsibleSections() {
  return function (tree) {
    const children = tree.children;
    const output = [];
    let currentGroup = null;

    function closeGroup() {
      if (!currentGroup) return;
      output.push({
        type: "element",
        tagName: "details",
        properties: { open: true, className: ["section-details"] },
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
        currentGroup = { heading: node, body: [] };
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
