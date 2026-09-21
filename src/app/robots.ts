import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Required for `output: "export"` — tells Next.js to prerender this route handler.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
