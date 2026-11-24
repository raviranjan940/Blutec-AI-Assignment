import { useEffect } from 'react';

// Sets the document title and description for a page (replaces Next metadata).
export function usePageMeta(meta) {
  useEffect(() => {
    if (meta.title) document.title = meta.title;
    if (meta.description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = 'description';
        document.head.appendChild(tag);
      }
      tag.content = meta.description;
    }
  }, [meta]);
}
