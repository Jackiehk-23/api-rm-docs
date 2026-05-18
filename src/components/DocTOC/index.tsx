import React, { useState, useEffect } from 'react';
import { useTOCStore } from '@site/src/utils/tocBridge';
import styles from './styles.module.css';

type TOCItem = {
  id: string;
  value: string;
  level: number;
  children?: readonly TOCItem[];
};

function flatIds(items: readonly TOCItem[]): string[] {
  return items.flatMap(item => [item.id, ...flatIds(item.children ?? [])]);
}

function TOCLinks({
  items,
  activeId,
  depth = 0,
}: {
  items: readonly TOCItem[];
  activeId: string;
  depth?: number;
}) {
  return (
    <ul className={depth === 0 ? styles.tocList : styles.tocNested}>
      {items.map(item => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`${styles.tocLink} ${activeId === item.id ? styles.tocLinkActive : ''}`}
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
          {item.children && item.children.length > 0 && (
            <TOCLinks items={item.children} activeId={activeId} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function DocTOC(): JSX.Element | null {
  const toc = useTOCStore();
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!toc || toc.length === 0) return;

    const ids = flatIds(toc);

    const getActive = () => {
      // The "invisible line": 35% down from the top of the viewport.
      // The last heading whose top edge is above this line is the active one.
      const threshold = window.innerHeight * 0.35;
      const els = ids
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let active = els[0];
      for (const el of els) {
        if (el.getBoundingClientRect().top < threshold) {
          active = el;
        } else {
          break;
        }
      }
      return active?.id ?? '';
    };

    const onScroll = () => setActiveId(getActive());

    // Support both window scroll (non-API pages) and internal container scroll (API pages)
    const containers: (Element | Window)[] = [window];
    const articleWrapper = document.querySelector('[class*="articleWrapper"]');
    const docContent = document.querySelector('[class*="docContent"]');
    if (articleWrapper) containers.push(articleWrapper);
    if (docContent) containers.push(docContent);

    containers.forEach(c => c.addEventListener('scroll', onScroll, { passive: true }));
    onScroll(); // set initial state

    return () => {
      containers.forEach(c => c.removeEventListener('scroll', onScroll));
    };
  }, [toc]);

  if (!toc || toc.length === 0) return null;

  return (
    <div className={styles.docTOC}>
      <div className={styles.tocLabel}>On this page</div>
      <TOCLinks items={toc} activeId={activeId} />
    </div>
  );
}
