import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { hero, siteConfig } from "@/data/portfolio";
import { asset, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${hero.name} — ${hero.title}`,
  description: hero.intro,
  keywords: ["portfolio", "full-stack developer", "web developer", "react", "next.js"],
  openGraph: {
    title: `${hero.name} — ${hero.title}`,
    description: hero.intro,
    type: "website",
    url: siteUrl,
    siteName: hero.name,
  },
  alternates: { canonical: siteUrl },
  twitter: {
    card: "summary",
    title: `${hero.name} — ${hero.title}`,
    description: hero.intro,
  },
  icons: {
    // `basePath` isn't applied to metadata URLs, so prefix it ourselves.
    icon: asset("/favicon.ico"),
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased bg-slate-950`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}