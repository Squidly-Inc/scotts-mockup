import type { APIRoute } from "astro";

// Allow-all on purpose: search engines AND AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot, Google-Extended) are welcome.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const sitemapUrl = new URL(`${base}/sitemap-index.xml`, site).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
