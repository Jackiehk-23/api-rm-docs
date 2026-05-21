#!/usr/bin/env python3
"""
Convert standalone bold pseudo-header lines (e.g. ``**Request Parameters**``)
into real H2 headings (``## Request Parameters``) in Docusaurus docs.

Why
---
``src/rehype/collapsibleSections.js`` wraps descriptive H2s ("What is this?",
"How it works", "Overview", "Notes", etc.) in a collapsible ``<details>``
element that swallows every node up to the next H2. When a doc uses bold
pseudo-headers instead of real H2s, the collapsible eats the entire rest of
the page. Promoting those pseudo-headers to H2s closes each collapsible at
the right place.

Behaviour
---------
* Walks ``docs/`` and ``docs_internal/`` for ``*.md`` / ``*.mdx`` files.
* Skips YAML frontmatter (between ``---`` markers at the top of a file).
* Skips fenced code blocks (``` and ~~~).
* Matches lines whose entire content is ``**Some Header Words**`` (plus
  optional trailing whitespace). Inline bolds and bolds ending in ``:`` /
  ``` ` ``` are ignored.
* Skips the EXCLUDE set (Note/Notes) so we don't accidentally create a new
  collapsible from a former bold line.
* Idempotent: a second run on the same tree changes nothing.

Usage
-----
``python3 scripts/fix-pseudo-headers.py``
Add ``--dry-run`` to preview without writing.
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from collections import Counter
from typing import Iterable

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DOC_ROOTS = ("docs", "docs_internal")
EXTENSIONS = (".md", ".mdx")

# Words that the rehype plugin already treats as collapsible H2 patterns.
# Converting these to H2s would create a NEW collapsible section in the
# middle of the doc, which is the opposite of what we want.
EXCLUDE = {
    "note",
    "notes",
    "warning",
    "warnings",
    "limitation",
    "limitations",
    "overview",
    "introduction",
    "about",
    "what is this",
    "how it works",
}

# A standalone bold pseudo-header: ``**Some Words**`` and nothing else on
# the line (trailing whitespace allowed). The captured text must start with
# an uppercase letter and contain only letters, spaces, parens, and a few
# punctuation characters that show up in real section names. Bolds ending
# with ``:`` or containing backticks are intentionally NOT matched -- those
# are inline descriptors for the following code/table, not section headers.
PSEUDO_HEADER = re.compile(r"^\*\*([A-Z][A-Za-z0-9 ()/&-]*[A-Za-z0-9)])\*\*\s*$")

# Fenced code-block delimiters. We track open/close to skip lines inside.
CODE_FENCE = re.compile(r"^(\s*)(```+|~~~+)")


def iter_doc_files(roots: Iterable[str]) -> Iterable[str]:
    for root in roots:
        abs_root = os.path.join(REPO_ROOT, root)
        if not os.path.isdir(abs_root):
            continue
        for dirpath, _dirnames, filenames in os.walk(abs_root):
            for name in filenames:
                if name.endswith(EXTENSIONS):
                    yield os.path.join(dirpath, name)


def process_file(path: str, dry_run: bool) -> list[tuple[int, str, str]]:
    """Rewrite pseudo-headers in ``path``. Returns list of (line_no, old, new)."""
    with open(path, "r", encoding="utf-8") as fh:
        original = fh.read()

    lines = original.splitlines(keepends=True)
    out: list[str] = []
    changes: list[tuple[int, str, str]] = []

    in_frontmatter = False
    saw_frontmatter_open = False
    in_code_fence = False
    fence_marker: str | None = None

    for idx, line in enumerate(lines, start=1):
        stripped_nl = line.rstrip("\n").rstrip("\r")

        # Frontmatter: only the FIRST ``---`` block at the top of the file
        # counts. We track ``saw_frontmatter_open`` so a later ``---`` (e.g.
        # a horizontal rule) is not treated as frontmatter.
        if not saw_frontmatter_open and idx == 1 and stripped_nl == "---":
            in_frontmatter = True
            saw_frontmatter_open = True
            out.append(line)
            continue
        if in_frontmatter:
            out.append(line)
            if stripped_nl == "---":
                in_frontmatter = False
            continue

        # Code-fence tracking. We accept ``` and ~~~ with any indent, and
        # close only on a matching fence marker prefix.
        fence_match = CODE_FENCE.match(stripped_nl)
        if fence_match:
            this_marker = fence_match.group(2)
            if not in_code_fence:
                in_code_fence = True
                fence_marker = this_marker[:3]  # ``` or ~~~
            elif this_marker.startswith(fence_marker or ""):
                in_code_fence = False
                fence_marker = None
            out.append(line)
            continue
        if in_code_fence:
            out.append(line)
            continue

        match = PSEUDO_HEADER.match(stripped_nl)
        if match:
            header_text = match.group(1).strip()
            if header_text.lower() in EXCLUDE:
                out.append(line)
                continue
            new_line = f"## {header_text}"
            # Preserve original line ending (LF / CRLF / final-no-newline).
            tail = line[len(stripped_nl):]
            if tail == "":
                tail = ""
            out.append(new_line + tail)
            changes.append((idx, stripped_nl, new_line))
            continue

        out.append(line)

    if changes and not dry_run:
        with open(path, "w", encoding="utf-8") as fh:
            fh.writelines(out)

    return changes


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Report changes without writing files.",
    )
    parser.add_argument(
        "--roots",
        nargs="+",
        default=list(DOC_ROOTS),
        help="Doc roots to walk (relative to repo root). Defaults to docs/ and docs_internal/.",
    )
    args = parser.parse_args(argv)

    total_changes = 0
    files_changed = 0
    header_counter: Counter[str] = Counter()

    for path in sorted(iter_doc_files(args.roots)):
        changes = process_file(path, dry_run=args.dry_run)
        if not changes:
            continue
        files_changed += 1
        rel = os.path.relpath(path, REPO_ROOT)
        for line_no, old, new in changes:
            total_changes += 1
            header_counter[old.strip()] += 1
            print(f"{rel}:{line_no}: {old!r} -> {new!r}")

    print()
    print(f"Files changed: {files_changed}")
    print(f"Total lines rewritten: {total_changes}")
    if header_counter:
        print("Unique pseudo-headers converted (frequency):")
        for header, count in header_counter.most_common():
            print(f"  {count:4d}  {header}")
    if args.dry_run:
        print("(dry-run: no files were modified)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
