import type { APIRoute } from "astro";

import { SITE } from "~/const";

export const GET: APIRoute = () => {
  return new Response(
    `
User-agent: *
Allow: /

Sitemap: ${SITE + "/sitemap-index.xml"}
`.trim(),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
};
