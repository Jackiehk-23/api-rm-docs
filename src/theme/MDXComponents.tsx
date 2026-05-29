import MDXComponentsDefault from '@theme-original/MDXComponents';
import ApiPlayground from "../components/ApiPlayground";
import ApiExamples from "../components/ApiExamples";
import ParamTable from "../components/ParamTable";
import CodeBlock from "../components/CodeBlock";
import MarkdownTable from "../components/MarkdownTable";
import HttpMethodBadge from "../components/HttpMethodBadge";

export default {
  ...MDXComponentsDefault,
  ApiPlayground,
  ApiExamples,
  ParamTable,
  CodeBlock,
  table: MarkdownTable,
  HttpMethodBadge,
};
