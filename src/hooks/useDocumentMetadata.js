import { useEffect } from "react";

function setMeta(selector, attribute, value) { const element = document.head.querySelector(selector); if (element) element.setAttribute("content", value); }

export function useDocumentMetadata(seo) {
  useEffect(() => { document.title = seo.title; setMeta('meta[name="description"]', "content", seo.description); setMeta('meta[property="og:title"]', "content", seo.title); setMeta('meta[property="og:description"]', "content", seo.description); setMeta('meta[property="og:image"]', "content", seo.socialPreviewImage); setMeta('meta[name="twitter:card"]', "content", seo.twitterCard); const canonical = document.head.querySelector('link[rel="canonical"]'); if (canonical) canonical.href = seo.canonicalUrl || window.location.href; }, [seo]);
}
