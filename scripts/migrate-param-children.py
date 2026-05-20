#!/usr/bin/env python3
"""
Migrate ParamTable child sections into nested children arrays.

Pattern in files:
  1. Parent ParamTable has rows with Object/Array type and example "(Refer...)"
  2. Below that: <strong>Label <code>fieldName</code>:</strong> or <strong>Label (fieldName):</strong>
  3. Followed by a child <ParamTable rows={[...]} />

This script:
  - Detects those child sections
  - Moves child rows into the parent row as children: [...]
  - Removes the now-redundant child section
  - Processes bottom-up so nested children are handled before outer ones
"""

import re
import os
import sys

FILES = [
    "docs/settings/account-detail/create-account.md",
    "docs/settings/user-profile.md",
    "docs/settings/account-detail/update-account.md",
    "docs/settings/account-detail/get-account.md",
    "docs/settings/account-detail/get-accounts.md",
    "docs/settings/account-detail/submit-account-review.md",
    "docs/settings/store-detail/update-store.md",
    "docs/settings/store-detail/create-store.md",
    "docs/settings/store-detail/store-details.md",
    "docs/settings/store-detail/get-store-by-id.md",
    "docs/settings/merchant-detail/merchant-profile.md",
    "docs/ekyc/face-verification.mdx",
    "docs/ekyc/get-mykad-result.mdx",
    "docs/ekyc/get-ekyc-result.mdx",
    "docs/ekyc/mykad-recognition.mdx",
    "docs/ekyc/liveness-check-with-face-verification.mdx",
    "docs/merchant-onboarding/upload-merchant-file.md",
    "docs/merchant-onboarding/update-merchant.md",
    "docs/merchant-onboarding/create-merchant.md",
    "docs/merchant-onboarding/get-merchant.md",
    "docs/merchant-onboarding/get-merchants.md",
    "docs/merchant-onboarding/review-merchant.md",
    "docs/quickstart/signature-algorithm.mdx",
    "docs/pos/payment.md",
    "docs/pos/card-refund.md",
    "docs/pos/cancellation.md",
    "docs/pos/card-settlement.md",
    "docs/alacarte-open/set-notification.mdx",
    "docs/alacarte-open/inventory/update-item-quantity-by-id.mdx",
    "docs/alacarte-open/inventory/update-item-by-id.mdx",
    "docs/alacarte-open/inventory/get-items-by-category-id.mdx",
    "docs/alacarte-open/inventory/update-category-by-id.mdx",
    "docs/alacarte-open/inventory/create-item.mdx",
    "docs/alacarte-open/inventory/get-categories-by-store-id.mdx",
    "docs/alacarte-open/inventory/get-all-items-by-store-id.mdx",
    "docs/alacarte-open/inventory/create-category-by-store-id.mdx",
    "docs/alacarte-open/orders/get-order-by-id.mdx",
    "docs/alacarte-open/orders/refund-order.mdx",
    "docs/alacarte-open/orders/get-orders-by-store-id.mdx",
    "docs/alacarte-open/orders/update-order-status.mdx",
    "docs/alacarte-open/store/update-store-by-id-availability.mdx",
    "docs/alacarte-open/store/update-store-by-id-types.mdx",
    "docs/alacarte-open/store/update-store-by-id-delivery.mdx",
    "docs/alacarte-open/store/get-store-by-id.mdx",
    "docs/campaign/gourmet-card.md",
    "docs/campaign/chop-stamp.mdx",
    "docs/campaign/member/profile.md",
    "docs/campaign/member/register-loyalty-member.md",
    "docs/campaign/member/check-loyalty-member.md",
    "docs/campaign/member/vouchers/voucher-by-code.md",
    "docs/campaign/member/vouchers/vouchers-detail.md",
    "docs/campaign/member/vouchers/redeem-voucher.md",
    "docs/campaign/member/rewards/rewards-detail.md",
    "docs/campaign/member/rewards/reward-by-id.md",
    "docs/campaign/loyalty/loyalty-balance/spend-loyalty-balance.md",
    "docs/campaign/loyalty/loyalty-balance/get-loyalty-balances.md",
    "docs/campaign/loyalty/loyalty-members/topup-offline.md",
    "docs/campaign/loyalty/loyalty-members/topup-online.md",
    "docs/campaign/loyalty/loyalty-members/member-authorize.md",
    "docs/campaign/loyalty/loyalty-point/calculate-spending-reward.md",
    "docs/campaign/loyalty/loyalty-point/give-loyalty-point.mdx",
    "docs/campaign/loyalty/loyalty-point/deduct-loyalty-point.md",
    "docs/campaign/loyalty/loyalty-point/spending-loyalty-point.md",
    "docs/campaign/loyalty/loyalty-point/cancel-spending-loyalty-point.md",
    "docs/campaign/voucher/voucher-by-code.md",
    "docs/campaign/voucher/void-voucher.md",
    "docs/campaign/voucher/voucher-batch-by-key.md",
    "docs/campaign/voucher/bulk-redeem-voucher.md",
    "docs/campaign/voucher/instate-voucher.md",
    "docs/campaign/voucher/get-voucher-batches.md",
    "docs/campaign/voucher/issue-voucher.md",
    "docs/merchant-wallet/check-balance.md",
    "docs/merchant-wallet/topup-history.md",
    "docs/merchant-wallet/history.md",
    "docs/merchant-wallet/topup-wallet.md",
    "docs_internal/payment_v1/query-status-by-order-id.md",
    "docs_internal/payment_v1/query-status-by-transaction-id.md",
    "docs_internal/payment_v1/refund.mdx",
    "docs_internal/payment_v1/alipay-mini-program.mdx",
    "docs_internal/payment_v1/daily-settlement-report.md",
    "docs_internal/payment_v1/get-all-transaction.mdx",
    "docs_internal/payment_v1/quick-pay.mdx",
    "docs_internal/payment_v1/reverse.mdx",
    "docs_internal/payment_v1/webpayment/qr-code&url-by-checkout-id.md",
    "docs_internal/payment_v1/webpayment/web-payment.md",
    "docs_internal/payment_v1/transactionQR/get-transaction-qr-code-url.mdx",
    "docs_internal/payment_v1/transactionQR/get-transaction-qr-code-url-by-code.mdx",
    "docs_internal/payment_v1/transactionQR/get-transaction-by-code.mdx",
    "docs_internal/payment_v1/transactionQR/transaction-qr.mdx",
    "docs_internal/payment_v1/customer/get-customer-orders.md",
    "docs_internal/payment_v1/customer/create-adhoc-order.md",
    "docs_internal/payment_v1/customer/toggle-customer-status.md",
    "docs_internal/payment_v1/customer/recurringpayment/create-recurring-customer.md",
    "docs_internal/payment_v1/customer/tokenizedpayment/create-tokenized-customer.md",
    "docs_internal/payment_v1/customertoken/delete-customer-token.md",
]

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# ─── Bracket matching ─────────────────────────────────────────────────────────

def find_matching(text, open_pos, open_c, close_c):
    """Return index of the matching close bracket."""
    depth = 0
    i = open_pos
    while i < len(text):
        c = text[i]
        if c == open_c:
            depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1


# ─── ParamTable extraction ────────────────────────────────────────────────────

def get_all_tables(content):
    """
    Find all <ParamTable ... /> blocks.
    Returns list of dicts with keys:
      start, end, rows_inner_start, rows_inner_end, rows_text
    """
    tables = []
    pos = 0
    while True:
        ts = content.find('<ParamTable', pos)
        if ts == -1:
            break

        rows_kw = content.find('rows={[', ts)
        if rows_kw == -1 or rows_kw > ts + 3000:
            pos = ts + 1
            continue

        bracket_open = rows_kw + len('rows={')  # index of '['
        bracket_close = find_matching(content, bracket_open, '[', ']')
        if bracket_close == -1:
            pos = ts + 1
            continue

        tag_close = content.find('/>', bracket_close)
        if tag_close == -1:
            pos = ts + 1
            continue

        tables.append({
            'start': ts,
            'end': tag_close + 2,
            'rows_inner_start': bracket_open + 1,
            'rows_inner_end': bracket_close,
            'rows_text': content[bracket_open + 1:bracket_close],
        })
        pos = tag_close + 2
    return tables


# ─── Row extraction ───────────────────────────────────────────────────────────

def get_rows(rows_text):
    """
    Parse top-level { ... } objects from rows_text.
    Returns list of (start_in_rows_text, end_in_rows_text, row_text).
    end is inclusive (index of closing '}').
    """
    rows = []
    i = 0
    while i < len(rows_text):
        brace = rows_text.find('{', i)
        if brace == -1:
            break
        end = find_matching(rows_text, brace, '{', '}')
        if end == -1:
            break
        rows.append((brace, end, rows_text[brace:end + 1]))
        i = end + 1
    return rows


def get_row_name(row_text):
    m = re.search(r'name:\s*["\']([^"\']+)["\']', row_text)
    return m.group(1).strip() if m else None


# ─── Label → field name heuristic ────────────────────────────────────────────

SKIP_WORDS = {'object', 'array', 'of', 'the', 'a', 'an', 'for', 'in', 'on'}


def label_to_field_name(label):
    """
    Convert a strong label to a camelCase field name.
    E.g. "Invoice Address Object" → "invoiceAddress"
         "Contact Info object"    → "contactInfo"
         "inspectList :"          → "inspectList"
         "Document object :"      → "document"
    """
    # Remove trailing colon/space/dash
    label = re.sub(r'[\s:*\-]+$', '', label).strip()
    # Remove leading/trailing noise
    label = re.sub(r'^[\s:*\-]+', '', label).strip()

    words = label.split()
    filtered = [w for w in words if w.lower() not in SKIP_WORDS and w]
    if not filtered:
        return None

    # Build camelCase
    result = filtered[0][0].lower() + filtered[0][1:]
    for w in filtered[1:]:
        result += w[0].upper() + w[1:]
    return result


# ─── Strong section extraction ────────────────────────────────────────────────

def get_strong_sections(content):
    """
    Find <strong> sections that label child parameter groups.
    Also handles **bold** markdown syntax.

    Returns list of {field_name, match_start, match_end} sorted by position.
    """
    sections = []

    # Pattern 1: <strong>...<code>fieldName</code>...</strong>
    p1 = re.compile(
        r'<strong[^>]*>(?:[^<]|<(?!/?strong))*?<code[^>]*>([^<]+)</code>(?:[^<]|<(?!/?strong))*?</strong>',
        re.DOTALL | re.IGNORECASE,
    )
    for m in p1.finditer(content):
        fn = m.group(1).strip()
        if fn:
            sections.append({'field_name': fn, 'match_start': m.start(), 'match_end': m.end()})

    # Pattern 2: <strong>Label (fieldName):</strong>
    p2 = re.compile(
        r'<strong[^>]*>[^<(]*\(([^)]+)\)[^<]*</strong>',
        re.DOTALL | re.IGNORECASE,
    )
    for m in p2.finditer(content):
        fn = m.group(1).strip()
        if fn and not any(s['match_start'] == m.start() for s in sections):
            sections.append({'field_name': fn, 'match_start': m.start(), 'match_end': m.end()})

    # Pattern 3: <strong>Label without code/parens</strong>
    p3 = re.compile(
        r'<strong[^>]*>([^<(]+)</strong>',
        re.DOTALL | re.IGNORECASE,
    )
    for m in p3.finditer(content):
        if any(s['match_start'] == m.start() for s in sections):
            continue
        label = m.group(1).strip()
        fn = label_to_field_name(label)
        if fn:
            sections.append({'field_name': fn, 'match_start': m.start(), 'match_end': m.end()})

    # Pattern 4: **Bold (fieldName)** markdown style
    p4 = re.compile(r'\*\*[^*]*\(([^)]+)\)[^*]*\*\*')
    for m in p4.finditer(content):
        fn = m.group(1).strip()
        if fn and not any(s['match_start'] == m.start() for s in sections):
            sections.append({'field_name': fn, 'match_start': m.start(), 'match_end': m.end()})

    # Sort by position
    sections.sort(key=lambda s: s['match_start'])
    return sections


# ─── Row modification ─────────────────────────────────────────────────────────

def remove_refer_example(row_text):
    """Remove example: "(Refer...)" or similar from a row."""
    result = re.sub(
        r',?\s*example:\s*["\'][^"\']*[Rr]efer[^"\']*["\']',
        '',
        row_text,
    )
    # Remove trailing comma+space that may be left before closing brace
    result = re.sub(r',\s*}$', ' }', result)
    return result


def add_children_to_row(row_text, child_rows_text):
    """
    Given a row like { name: "foo", type: "Object", ... }
    and child_rows_text (the inner content of children's rows={[...]})
    returns the row with children: [...] added.
    """
    row_text = remove_refer_example(row_text)

    child_rows_list = get_rows(child_rows_text)
    if not child_rows_list:
        return row_text

    # Normalize each child entry (strip leading whitespace, keep structure)
    child_entries = [r.strip() for (_, _, r) in child_rows_list]

    # Format children with consistent 8-space indent inside children: [...]
    pad = '        '  # 8 spaces
    children_inner = (',\n' + pad).join(child_entries)
    children_str = f',\n      children: [\n{pad}{children_inner}\n      ]'

    # Insert before closing }
    base = row_text.rstrip()
    if base.endswith('}'):
        base = base[:-1].rstrip()
    return base + children_str + '}'


# ─── Section removal helpers ──────────────────────────────────────────────────

def remove_section(content, section_start, section_end):
    """
    Remove the child section from content, also stripping preceding <br/> tags
    and blank lines.
    """
    before = content[:section_start]
    after = content[section_end:]

    # Strip trailing <br/> / <br /> and whitespace from before
    stripped_before = before.rstrip()
    for br in ('<br/>', '<br />', '<br>'):
        while stripped_before.endswith(br):
            stripped_before = stripped_before[: -len(br)].rstrip()

    # Strip leading newlines from after
    stripped_after = after.lstrip('\n\r ')

    return stripped_before + '\n\n' + stripped_after


# ─── Main per-file processing ─────────────────────────────────────────────────

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    max_iters = 60

    for iteration in range(max_iters):
        tables = get_all_tables(content)
        strong_sections = get_strong_sections(content)

        # Process bottom-up: last strong section first
        made_change = False

        for section in reversed(strong_sections):
            field_name = section['field_name']
            after_strong = section['match_end']

            # Find the child table: first table after this strong, before any next strong
            next_strong_start = None
            for s2 in strong_sections:
                if s2['match_start'] > section['match_start']:
                    next_strong_start = s2['match_start']
                    break

            child_table = None
            for t in tables:
                if t['start'] > after_strong:
                    if next_strong_start is None or t['start'] < next_strong_start:
                        child_table = t
                    break

            if child_table is None:
                continue

            # Find a parent table (any table before this strong) that has this field
            parent_table = None
            target_row = None

            for t in tables:
                if t['end'] > section['match_start']:
                    break  # Only tables strictly before the strong section

                rows = get_rows(t['rows_text'])
                for rstart, rend, rtext in rows:
                    rname = get_row_name(rtext)
                    if rname == field_name:
                        parent_table = t
                        target_row = (rstart, rend, rtext)
                    elif rname and rname.lower() == field_name.lower():
                        parent_table = t
                        target_row = (rstart, rend, rtext)

            if parent_table is None or target_row is None:
                continue

            rstart, rend, rtext = target_row
            new_row = add_children_to_row(rtext, child_table['rows_text'])

            # Absolute positions
            abs_row_start = parent_table['rows_inner_start'] + rstart
            abs_row_end = parent_table['rows_inner_start'] + rend + 1  # exclusive

            # Apply row replacement
            content = content[:abs_row_start] + new_row + content[abs_row_end:]

            # Compute offset delta for subsequent position adjustments
            delta = len(new_row) - (rend - rstart + 1)

            # Adjust child section positions
            adj_section_start = section['match_start'] + delta
            adj_section_end = child_table['end'] + delta

            # Find actual section start (may include preceding <br/> tags)
            # and extend to end of child table
            content = remove_section(content, adj_section_start, adj_section_end)

            made_change = True
            break  # Restart with fresh positions

        if not made_change:
            break

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False


# ─── Entry point ─────────────────────────────────────────────────────────────

def main():
    changed = []
    skipped = []
    missing = []

    for rel_path in FILES:
        filepath = os.path.join(BASE_DIR, rel_path)
        if not os.path.exists(filepath):
            missing.append(rel_path)
            continue
        try:
            if process_file(filepath):
                changed.append(rel_path)
            else:
                skipped.append(rel_path)
        except Exception as e:
            print(f'ERROR {rel_path}: {e}', file=sys.stderr)
            import traceback; traceback.print_exc()

    print(f'\nChanged : {len(changed)}')
    print(f'Skipped : {len(skipped)}  (no child sections found)')
    print(f'Missing : {len(missing)}')
    if changed:
        print('\nModified files:')
        for p in changed:
            print(f'  {p}')
    if missing:
        print('\nMissing files:')
        for p in missing:
            print(f'  {p}')


if __name__ == '__main__':
    main()
