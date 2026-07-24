import { useEffect } from 'react';

const SITE_NAME = 'Akhilpari Gauswami';

/**
 * Sets document.title (and optionally the meta description) per page.
 *
 * Vite + React Router renders client-side only, so there's no Next.js-style
 * generateMetadata — this is the lightweight equivalent for the <title> tag.
 * It restores the previous title/description on unmount, so navigating
 * between pages doesn't leave a stale title behind.
 *
 * This does NOT solve social-preview (og:) tags, which need the actual HTML
 * response to differ per route — that requires prerendering/SSR (Next.js
 * gets this for free) or a service like react-snap. Out of scope here;
 * flagging it so it isn't mistaken for full SEO parity.
 */
export default function useDocumentTitle(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;

    const metaEl = description ? document.querySelector('meta[name="description"]') : null;
    const previousDescription = metaEl?.content;
    if (metaEl && description) {
      metaEl.content = description;
    }

    return () => {
      document.title = previousTitle;
      if (metaEl && previousDescription !== undefined) {
        metaEl.content = previousDescription;
      }
    };
  }, [title, description]);
}
