import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo-name>, so the exported site needs
// a matching basePath. The deploy workflow fills this in from actions/configure-pages;
// leave it unset for local development and for root-domain hosts.
// It must be inlined at build time, hence the NEXT_PUBLIC_ prefix.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // `next build` writes the whole site to ./out as static HTML/CSS/JS.
  output: "export",
  basePath: basePath || undefined,
  // Image Optimization needs a server, which a static export doesn't have.
  images: { unoptimized: true },
};

export default nextConfig;