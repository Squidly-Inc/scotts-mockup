import type { APIRoute } from "astro";

// Plain-text overview for AI engines (llms.txt convention).
// Facts below are limited to what the site itself states.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const abs = (p: string) => new URL(`${base}${p}`, site).href;
  const body = `# Scott's Seafood San Jose

Scott's Seafood San Jose is a seafood restaurant at 200 S First St, Ste 10, San Jose, CA 95113, in downtown San Jose since 1985. It serves fresh, sustainable seafood and chef-driven seasonal dishes, with thoughtfully crafted cocktails and a curated wine selection. Hours: Lunch Mon-Fri 11:30 AM-1:30 PM; Scott's Social Hour (happy hour) Mon-Sat 3-6 PM; Dinner Mon-Sat 5-9 PM; open Sundays for private events and select holidays.

## Key pages

- Home: ${abs("/")}
- Menu: ${abs("/menu/")}
- Reservations: ${abs("/reservations/")}
- Private Dining & Events: ${abs("/private-dining/")}
- Gift Cards: ${abs("/gift-cards/")}
- Contact: ${abs("/contact/")}

## Contact

- Phone: (408) 971-1700
- Email: scotts@scottshospitality.com
- Private events: (669) 347-4389
- Reservations: https://www.opentable.com/scotts-seafood-san-jose
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
