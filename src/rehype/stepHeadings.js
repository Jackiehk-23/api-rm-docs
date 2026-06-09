// Rehype plugin: split "Step N — Title" headings into styled parts so the
// step label, separator, and descriptive title can be visually differentiated.
//
//   ### Step 1 — Sort JSON Alphabetically
//        └ step-label ┘ └sep┘ └─ step-title ─┘
//
// Styling lives in src/css/custom.css (.step-label / .step-sep / .step-title).

const HEADINGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);
// "Step 1", "Step 2A", "Step 10" … followed by — – : or - then the title.
const STEP_RE = /^(Step\s+[0-9]+[A-Za-z]?)(\s*[—–:-]\s*)([\s\S]+)$/;

module.exports = function rehypeStepHeadings() {
  return function (tree) {
    walk(tree);
  };
};

function walk(node) {
  const kids = node && node.children;
  if (!kids || !kids.length) return;
  for (const child of kids) {
    if (child.type === "element" && HEADINGS.has(child.tagName)) {
      transform(child);
    }
    walk(child);
  }
}

function transform(heading) {
  const kids = heading.children || [];
  if (!kids.length || kids[0].type !== "text") return;
  const m = kids[0].value.match(STEP_RE);
  if (!m) return;

  const [, label, sep, restText] = m;
  const titleChildren = [{ type: "text", value: restText }];
  // Keep any inline nodes that followed the first text node (e.g. inline code).
  for (let i = 1; i < kids.length; i++) titleChildren.push(kids[i]);

  heading.children = [
    span("step-label", [{ type: "text", value: label }]),
    span("step-sep", [{ type: "text", value: sep }]),
    span("step-title", titleChildren),
  ];
}

function span(className, children) {
  return {
    type: "element",
    tagName: "span",
    properties: { className: [className] },
    children,
  };
}
