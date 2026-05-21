#!/usr/bin/env python3
"""
beautify-json.py

Pretty-prints minified JSON in Docusaurus documentation files:
  1. In `examples.response:` frontmatter (YAML literal block)
  2. In ```json code blocks in the document body

Skips:
  - JSON that is already multi-line (already pretty-printed)
  - JSON containing placeholder values like {{token}} or "..."
  - CodeBlock/code-block sections with filename="Sorted Compact JSON" or similar
  - Code blocks that contain curl commands or non-JSON content

Usage:
    python3 scripts/beautify-json.py [--dry-run]
"""

import os
import re
import json
import glob
import sys
import argparse
from typing import Optional

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

DOCS_DIRS = [
    "/Users/rm8024-aiman-mbp21/Documents/GitHub/doc-v3/docs",
    "/Users/rm8024-aiman-mbp21/Documents/GitHub/doc-v3/docs_internal",
]

# Labels / filenames that explicitly mark intentionally-compact JSON.
# Match is case-insensitive substring.
SKIP_COMPACT_LABELS = [
    "sorted compact json",
    "compact json",
    "minified json",
    "sorted compact",
]

# If JSON content contains any of these substrings it's a placeholder/template
# and should not be touched.
SKIP_PLACEHOLDER_PATTERNS = [
    "{{",
    "}}",
    '"..."',
    "'...'",
]


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def is_placeholder(text: str) -> bool:
    """Return True if text looks like a placeholder/template value."""
    for pat in SKIP_PLACEHOLDER_PATTERNS:
        if pat in text:
            return True
    return False


def is_minified(text: str) -> bool:
    """
    Return True if the JSON text looks minified (all on one line with multiple
    keys, or very few newlines relative to its length).
    """
    stripped = text.strip()
    # Must start with { or [
    if not (stripped.startswith("{") or stripped.startswith("[")):
        return False
    # If it fits on a single line (no internal newlines) and has at least one key
    lines = stripped.split("\n")
    if len(lines) == 1 and ('"' in stripped or stripped in ("[]", "{}")):
        return True
    return False


def has_non_standard_indent(text: str) -> bool:
    """
    Return True if multi-line JSON uses anything other than 2-space indentation
    (e.g. tabs, 1-space, 3-space, 4-space). Used to catch JSON that's already
    multi-line but improperly formatted.
    """
    stripped = text.strip()
    if not (stripped.startswith("{") or stripped.startswith("[")):
        return False
    lines = stripped.split("\n")
    if len(lines) < 2:
        return False
    # Check the first non-empty, indented line after the opening brace
    for line in lines[1:]:
        if not line.strip():
            continue
        # Get leading whitespace
        leading = line[: len(line) - len(line.lstrip(" \t"))]
        if not leading:
            # First inner line has no indent — that's malformed, treat as needs reformat
            return True
        # Tab indent is non-standard
        if "\t" in leading:
            return True
        # Anything other than exactly 2 spaces at the first level is non-standard
        if leading != "  ":
            return True
        return False
    return False


def needs_reformat(text: str) -> bool:
    """Return True if JSON should be pretty-printed (minified OR bad indent)."""
    return is_minified(text) or has_non_standard_indent(text)


def try_pretty_print(text: str, indent: int = 2) -> Optional[str]:
    """
    Parse text as JSON and return pretty-printed version.
    Returns None if parsing fails or the JSON shouldn't be reformatted.
    Idempotent: returns None if already in canonical 2-space form.
    """
    stripped = text.strip()
    if not stripped:
        return None
    if is_placeholder(stripped):
        return None
    if not needs_reformat(stripped):
        return None

    try:
        parsed = json.loads(stripped)
    except json.JSONDecodeError:
        return None

    pretty = json.dumps(parsed, indent=indent, ensure_ascii=False)
    # Idempotency guard: don't return identical content
    if pretty == stripped:
        return None
    return pretty


def is_compact_label(label: str) -> bool:
    """Return True if the label indicates intentionally compact JSON."""
    label_lower = label.lower()
    for skip in SKIP_COMPACT_LABELS:
        if skip in label_lower:
            return True
    return False


def looks_like_json(text: str) -> bool:
    """Quick check: does the text look like it might be JSON (not a curl command etc.)."""
    stripped = text.strip()
    return stripped.startswith("{") or stripped.startswith("[")


# ---------------------------------------------------------------------------
# Frontmatter: examples.response processing
# ---------------------------------------------------------------------------

def process_frontmatter_response(content: str) -> tuple[str, int]:
    """
    Find `examples.response: |` blocks in YAML frontmatter and pretty-print
    their JSON content if minified.

    Returns (new_content, changes_count).
    """
    changes = 0

    # Match the frontmatter block (between first --- delimiters)
    fm_match = re.match(r"^(---\n)(.*?)(\n---)", content, re.DOTALL)
    if not fm_match:
        return content, 0

    fm_start = fm_match.start(2)
    fm_end = fm_match.end(2)
    frontmatter = content[fm_start:fm_end]

    # Find `  response: |` (indented under examples:)
    # The literal block scalar's content is indented with extra spaces.
    # Pattern: response: | followed by newline, then indented lines
    response_pattern = re.compile(
        r"([ \t]*response: \|\n)((?:[ \t]+[^\n]*\n?)*)",
        re.MULTILINE
    )

    def replace_response(m: re.Match) -> str:
        nonlocal changes
        key_line = m.group(1)       # e.g. "  response: |\n"
        block = m.group(2)          # indented JSON content

        if not block.strip():
            return m.group(0)

        # Determine indentation of first content line
        first_content_line = block.split("\n")[0]
        indent_match = re.match(r"^([ \t]+)", first_content_line)
        base_indent = indent_match.group(1) if indent_match else "    "

        # Strip the base YAML indent from EVERY line so we see the raw JSON
        # the way the JSON parser / indent-checker expects it (no leading column).
        raw_lines = []
        for line in block.split("\n"):
            if line.startswith(base_indent):
                raw_lines.append(line[len(base_indent):])
            else:
                raw_lines.append(line)
        raw_json = "\n".join(raw_lines).strip()

        if is_placeholder(raw_json):
            return m.group(0)
        if not needs_reformat(raw_json):
            return m.group(0)

        pretty = try_pretty_print(raw_json)
        if pretty is None:
            return m.group(0)

        # Re-indent each line of the pretty-printed JSON with base_indent
        indented_lines = "\n".join(base_indent + line for line in pretty.split("\n"))
        changes += 1
        return key_line + indented_lines + "\n"

    new_frontmatter = response_pattern.sub(replace_response, frontmatter)

    if new_frontmatter != frontmatter:
        new_content = content[:fm_start] + new_frontmatter + content[fm_end:]
        return new_content, changes

    return content, changes


# ---------------------------------------------------------------------------
# Body: ```json code block processing
# ---------------------------------------------------------------------------

def process_json_code_blocks(content: str) -> tuple[str, int]:
    """
    Find ```json ... ``` code blocks in the document body and pretty-print
    their content if minified.

    Skips blocks labeled as intentionally compact.
    Returns (new_content, changes_count).
    """
    changes = 0

    # Match the body after frontmatter
    body_start = 0
    fm_match = re.match(r"^---\n.*?\n---\n", content, re.DOTALL)
    if fm_match:
        body_start = fm_match.end()

    body = content[body_start:]

    # Pattern: ```json (optional trailing text on same line) ... ```
    # We capture the optional trailing text on the opening fence (e.g. language hint)
    code_block_pattern = re.compile(
        r"(```json([^\n]*)\n)(.*?)(```)",
        re.DOTALL
    )

    def replace_code_block(m: re.Match) -> str:
        nonlocal changes
        open_fence = m.group(1)     # "```json...\n"
        trailing = m.group(2)       # text after ```json on same line
        block_content = m.group(3)  # content inside the block
        close_fence = m.group(4)    # "```"

        # Skip if content doesn't look like JSON
        if not looks_like_json(block_content):
            return m.group(0)

        if is_placeholder(block_content):
            return m.group(0)

        if not needs_reformat(block_content):
            return m.group(0)

        pretty = try_pretty_print(block_content)
        if pretty is None:
            return m.group(0)

        changes += 1
        return open_fence + pretty + "\n" + close_fence

    new_body = code_block_pattern.sub(replace_code_block, body)

    if new_body != body:
        return content[:body_start] + new_body, changes

    return content, changes


# ---------------------------------------------------------------------------
# Body: CodeBlock JSX component processing
# ---------------------------------------------------------------------------

def process_codeblock_jsx(content: str) -> tuple[str, int]:
    """
    Find <CodeBlock language="json" ...>{`...`}</CodeBlock> or similar JSX
    components and pretty-print minified JSON content.

    Skips blocks with filename attributes matching SKIP_COMPACT_LABELS.
    Returns (new_content, changes_count).
    """
    changes = 0

    body_start = 0
    fm_match = re.match(r"^---\n.*?\n---\n", content, re.DOTALL)
    if fm_match:
        body_start = fm_match.end()

    body = content[body_start:]

    # Match CodeBlock opening tag with attributes
    # <CodeBlock language="json" filename="..." ...>
    codeblock_pattern = re.compile(
        r'(<CodeBlock\b[^>]*language=["\']json["\'][^>]*>)'
        r'\s*\{`(.*?)`\}\s*'
        r'(</CodeBlock>)',
        re.DOTALL
    )

    def replace_codeblock_jsx(m: re.Match) -> str:
        nonlocal changes
        opening_tag = m.group(1)
        json_content = m.group(2)
        closing_tag = m.group(3)

        # Check filename attribute for compact labels
        filename_match = re.search(r'filename=["\']([^"\']*)["\']', opening_tag)
        if filename_match:
            filename = filename_match.group(1)
            if is_compact_label(filename):
                return m.group(0)

        if is_placeholder(json_content):
            return m.group(0)
        if not needs_reformat(json_content):
            return m.group(0)

        pretty = try_pretty_print(json_content)
        if pretty is None:
            return m.group(0)

        changes += 1
        return opening_tag + "\n{`" + pretty + "`}\n" + closing_tag

    new_body = codeblock_pattern.sub(replace_codeblock_jsx, body)

    if new_body != body:
        return content[:body_start] + new_body, changes

    return content, changes


# ---------------------------------------------------------------------------
# Main processing
# ---------------------------------------------------------------------------

def process_file(filepath: str, dry_run: bool = False) -> int:
    """
    Process a single file. Returns the number of changes made.
    """
    with open(filepath, "r", encoding="utf-8") as f:
        original = f.read()

    content = original
    total_changes = 0

    # 1. Process frontmatter response field
    content, n = process_frontmatter_response(content)
    total_changes += n

    # 2. Process ```json code blocks in body
    content, n = process_json_code_blocks(content)
    total_changes += n

    # 3. Process <CodeBlock language="json"> JSX components in body
    content, n = process_codeblock_jsx(content)
    total_changes += n

    if total_changes > 0 and content != original:
        if not dry_run:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
        return total_changes

    return 0


def collect_files() -> list[str]:
    """Collect all .md and .mdx files from the configured docs directories."""
    files = []
    for docs_dir in DOCS_DIRS:
        for pattern in ("**/*.md", "**/*.mdx"):
            files.extend(glob.glob(os.path.join(docs_dir, pattern), recursive=True))
    return sorted(files)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true",
                        help="Show what would change without writing files")
    args = parser.parse_args()

    files = collect_files()
    print(f"Scanning {len(files)} files...")

    changed_files = 0
    total_changes = 0
    errors = []

    for filepath in files:
        try:
            n = process_file(filepath, dry_run=args.dry_run)
            if n > 0:
                changed_files += 1
                total_changes += n
                rel = os.path.relpath(
                    filepath,
                    "/Users/rm8024-aiman-mbp21/Documents/GitHub/doc-v3"
                )
                action = "Would update" if args.dry_run else "Updated"
                print(f"  {action}: {rel} ({n} change{'s' if n != 1 else ''})")
        except Exception as e:
            errors.append((filepath, str(e)))

    print()
    if args.dry_run:
        print(f"Dry run complete. Would change {changed_files} files ({total_changes} JSON blocks).")
    else:
        print(f"Done. Changed {changed_files} files ({total_changes} JSON blocks).")

    if errors:
        print(f"\nErrors ({len(errors)}):")
        for path, err in errors:
            rel = os.path.relpath(path, "/Users/rm8024-aiman-mbp21/Documents/GitHub/doc-v3")
            print(f"  {rel}: {err}")

    return 0 if not errors else 1


if __name__ == "__main__":
    sys.exit(main())
