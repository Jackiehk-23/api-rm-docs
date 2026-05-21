export type SnippetInput = {
  method: string;
  url: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
};

/* ─── Parse a raw cURL string into SnippetInput ───────────────────── */

export function parseCurl(curl: string): SnippetInput {
  // method
  const methodMatch = curl.match(/--request\s+([A-Z]+)/i) ||
                      curl.match(/-X\s+([A-Z]+)/i);
  const method = methodMatch ? methodMatch[1].toUpperCase() : "POST";

  // url — first quoted string after curl / --location, or unquoted url
  const urlMatch = curl.match(/curl\s+(?:--location\s+)?(?:--request\s+[A-Z]+\s+)?"([^"]+)"/i) ||
                   curl.match(/curl\s+(?:--location\s+)?"([^"]+)"/i);
  const url = urlMatch ? urlMatch[1] : "";

  // headers
  const headers: Record<string, string> = {};
  const headerMatches = curl.matchAll(/--header\s+"([^:]+):\s*([^"]+)"/gi);
  for (const m of headerMatches) {
    headers[m[1].trim()] = m[2].trim();
  }

  // body — --data or -d
  let body: Record<string, any> | undefined;
  const dataMatch = curl.match(/(?:--data|-d)\s+'([\s\S]+?)'/) ||
                    curl.match(/(?:--data|-d)\s+"([\s\S]+?)"(?:\s|$)/);
  if (dataMatch) {
    try {
      const raw = dataMatch[1].replace(/\\"/g, '"');
      body = JSON.parse(raw);
    } catch {
      body = undefined;
    }
  }

  return { method, url, headers, body };
}

/* ─── helpers ─────────────────────────────────────────────────────── */

const bodyStr = (body?: Record<string, any>) =>
  body && Object.keys(body).length > 0 ? JSON.stringify(body, null, 2) : null;

/* ─── generators ──────────────────────────────────────────────────── */

export function generateCurl(raw: string): string {
  // Return the original cURL verbatim — it already has real values
  return raw.trim();
}

export function generateFetch({ method, url, headers = {}, body }: SnippetInput): string {
  const b = bodyStr(body);
  const bodyProp = b ? `\n  body: JSON.stringify(${b}),` : "";
  return `const response = await fetch("${url}", {
  method: "${method}",
  headers: ${JSON.stringify(headers, null, 2)},${bodyProp}
});

const data = await response.json();
console.log(data);`;
}

export function generateAxios({ method, url, headers = {}, body }: SnippetInput): string {
  const b = bodyStr(body);
  const dataProp = b ? `\n  data: ${b},` : "";
  return `import axios from "axios";

const { data } = await axios({
  method: "${method.toLowerCase()}",
  url: "${url}",
  headers: ${JSON.stringify(headers, null, 2)},${dataProp}
});

console.log(data);`;
}

export function generatePython({ method, url, headers = {}, body }: SnippetInput): string {
  const b = bodyStr(body);
  const jsonArg = b ? `\n  json=${b},` : "";
  return `import requests

response = requests.${method.toLowerCase()}(
  "${url}",
  headers=${JSON.stringify(headers, null, 4)},${jsonArg}
)

print(response.json())`;
}

export function generateGo({ method, url, headers = {}, body }: SnippetInput): string {
  const b = bodyStr(body);
  const hasBody = !!b;
  const imports = ['"fmt"', '"io"', '"net/http"', ...(hasBody ? ['"strings"'] : ['"bytes"'])].join("\n\t");
  // Indent every line of the JSON body by one tab so it visually aligns with
  // the surrounding func body. Extra leading whitespace inside JSON is valid
  // and is ignored by the server's JSON parser.
  const indentedBody = b ? b.split("\n").map((l, i) => (i === 0 ? l : `\t${l}`)).join("\n") : "";
  const payloadBlock = hasBody
    ? `payload := strings.NewReader(\`${indentedBody}\`)`
    : `payload := bytes.NewReader([]byte{})`;
  const headerLines = Object.entries(headers)
    .map(([k, v]) => `\treq.Header.Add("${k}", "${v}")`)
    .join("\n");

  return `package main

import (
\t${imports}
)

func main() {
\turl := "${url}"
\t${payloadBlock}

\treq, _ := http.NewRequest("${method}", url, payload)
${headerLines}

\tres, _ := http.DefaultClient.Do(req)
\tdefer res.Body.Close()

\tbody, _ := io.ReadAll(res.Body)
\tfmt.Println(string(body))
}`;
}

export function generatePhp({ method, url, headers = {}, body }: SnippetInput): string {
  const headerLines = Object.entries(headers)
    .map(([k, v]) => `  "${k}: ${v}",`)
    .join("\n");
  const b = bodyStr(body);
  const bodyBlock = b
    ? `\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${b}));`
    : "";
  return `<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "${url}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
${headerLines}
]);${bodyBlock}

$response = curl_exec($ch);
curl_close($ch);

echo $response;`;
}

/* ─── registry ────────────────────────────────────────────────────── */

export type SnippetLang = "cURL" | "Go" | "JS Fetch" | "Node / Axios" | "Python" | "PHP";

export const SNIPPET_LANGS: SnippetLang[] = [
  "cURL", "Go", "JS Fetch", "Node / Axios", "Python", "PHP",
];

export function generateSnippet(lang: SnippetLang, rawCurl: string): string {
  if (lang === "cURL") return generateCurl(rawCurl);

  const parsed = parseCurl(rawCurl);
  switch (lang) {
    case "Go":           return generateGo(parsed);
    case "JS Fetch":     return generateFetch(parsed);
    case "Node / Axios": return generateAxios(parsed);
    case "Python":       return generatePython(parsed);
    case "PHP":          return generatePhp(parsed);
  }
}