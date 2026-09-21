import { siteConfig } from "@/data/portfolio";

/**
 * Deployment base path, inlined at build time by Next.js.
 * Empty during local development and on hosts that serve from the domain root.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Absolute URL of the deployed site, including any base path. */
export const siteUrl = `${siteConfig.url}${basePath}`;

/**
 * Prefixes an absolute path from `/public` with the deployment base path.
 * Next.js rewrites its own routes and assets, but files you reference yourself
 * (photos, resumes, screenshots) need the prefix added by hand.
 */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
