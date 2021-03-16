import React, { useEffect, useState } from 'react';

// This function returns an array of IDs
function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });
  }, [itemIds]);
  return activeId;
}

function renderItems(items, activeId) {
  return (
    <ul style={{ paddingLeft: `15px` }}>
      {items.map((item) => (
        <li key={item.url} style={{ listStyleType: `none`, marginTop: `.5em` }}>
          <a
            href={item.url}
            style={{
              color: activeId === item.url.slice(1) ? 'blue' : 'grey',
            }}
          >
            {item.title}
          </a>
          {item.items && renderItems(item.items, activeId)}
        </li>
      ))}
    </ul>
  );
}

function TableOfContents({ items }) {
  const idList = getIds(items);
  const activeId = useActiveId(idList);
  return (
    <details open>
      <summary>Table of Contents</summary>
      {renderItems(items, activeId)}
    </details>
  );
}

export default TableOfContents;
