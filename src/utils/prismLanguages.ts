// prism-react-renderer bundles only a subset of languages (go, python, js, json…)
// but NOT bash or php — so cURL and PHP snippets render without color.
// Register the missing languages onto prism-react-renderer's Prism instance.
// This is the officially documented extension method.
import { Prism } from "prism-react-renderer";

(typeof globalThis !== "undefined" ? (globalThis as any) : (window as any)).Prism = Prism;

// bash → used for cURL snippets
require("prismjs/components/prism-bash");
// php requires markup-templating to be loaded first
require("prismjs/components/prism-markup-templating");
require("prismjs/components/prism-php");

export {};
