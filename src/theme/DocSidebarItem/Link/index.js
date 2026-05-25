import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import { useTOCStore } from '@site/src/utils/tocBridge';
import styles from './styles.module.css';

// Tracks which heading is currently in view using IntersectionObserver
// against the actual scroll container (articleWrapper or docContent).
// Detection zone = top 25% of the scroll container, matching "header reaches the top".
// Falls back to the last heading that scrolled above the container when
// the user is deep within a long section.
function useActiveHeadingId(tocItems) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!tocItems.length) return;

    const ids = tocItems.map(h => h.id);
    const scrollRoot =
      document.querySelector('[class*="articleWrapper"]') ||
      document.querySelector('[class*="docContent"]');

    if (!scrollRoot) return;

    const visibleIds = new Set();
    const lastAbove = { current: '' };

    const getActive = () => {
      // At-bottom shortcut: if the scroll container can't scroll further, last heading wins
      const { scrollTop, scrollHeight, clientHeight } = scrollRoot;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        return ids[ids.length - 1];
      }
      // 1. Heading inside detection zone  2. Last one scrolled past  3. First heading
      return ids.find(id => visibleIds.has(id)) || lastAbove.current || ids[0];
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
            // Heading exited from the top → user scrolled past it
            if (entry.rootBounds && entry.boundingClientRect.top < entry.rootBounds.top) {
              lastAbove.current = entry.target.id;
            }
          }
        });
        setActiveId(getActive());
      },
      {
        root: scrollRoot,
        rootMargin: '0px 0px -75% 0px', // top 25% of the scroll container is the trigger zone
        threshold: 0,
      }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Scroll listener handles the at-bottom case (IntersectionObserver alone won't fire
    // when the heading never enters the detection zone because the page is too short)
    const onScroll = () => setActiveId(getActive());
    scrollRoot.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      scrollRoot.removeEventListener('scroll', onScroll);
    };
  }, [tocItems]);

  return activeId;
}

function tocLabel(htmlValue) {
  const text = htmlValue.replace(/<[^>]+>/g, '');
  const match = text.match(/^(Step\s+\d+)/i);
  return match ? match[1] : htmlValue;
}

function SidebarTOC({ toc }) {
  const items = useMemo(() => toc.filter(h => {
    const text = h.value.replace(/<[^>]+>/g, '');
    return /^step\s+\d+/i.test(text.trim());
  }), [toc]);
  const activeId = useActiveHeadingId(items);

  if (!items.length) return null;

  return (
    <ul className={styles.tocList}>
      {items.map(item => {
        const label = tocLabel(item.value);
        const isShortened = label !== item.value;
        return (
          <li
            key={item.id}
            className={clsx(styles.tocItem, item.level === 3 && styles.tocItemH3)}
          >
            <a
              href={`#${item.id}`}
              className={clsx(
                styles.tocLink,
                item.id === activeId && styles.tocLinkActive,
              )}
              title={isShortened ? item.value.replace(/<[^>]+>/g, '') : undefined}
              dangerouslySetInnerHTML={{ __html: label }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  const toc = useTOCStore();
  const filteredToc = useMemo(
    () => toc.filter(h => h.level === 2 || h.level === 3),
    [toc],
  );

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
    >
      <Link
        className={clsx('menu__link', !isInternalLink && styles.menuExternalLink, {
          'menu__link--active': isActive,
        })}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {typeof label === 'string' && label.includes('\n')
          ? label.split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
            ))
          : label}
        {!isInternalLink && <IconExternalLink />}
      </Link>

      {isActive && filteredToc.length > 0 && <SidebarTOC toc={toc} />}
    </li>
  );
}
