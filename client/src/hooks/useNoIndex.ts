import { useEffect } from 'react';

export function useNoIndex() {
  useEffect(() => {
    let metaTag = document.querySelector('meta[name="robots"]');
    let previousContent: string | null = null;
    let created = false;

    if (metaTag) {
      previousContent = metaTag.getAttribute('content');
      if (previousContent !== 'noindex') {
        metaTag.setAttribute('content', 'noindex');
      }
    } else {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'robots');
      metaTag.setAttribute('content', 'noindex');
      document.head.appendChild(metaTag);
      created = true;
    }

    return () => {
      // Restore the exact previous content when the component unmounts
      if (created) {
        // If we created it, safely remove it if it still exists
        if (metaTag && document.head.contains(metaTag)) {
          document.head.removeChild(metaTag);
        }
      } else if (metaTag && previousContent !== null) {
        // Otherwise, revert to the original value (e.g., 'index, follow')
        metaTag.setAttribute('content', previousContent);
      }
    };
  }, []);
}
