import type { Metadata } from "next";
import Link from "next/link";
import { navLinks } from "@/data/portfolio";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page doesn't exist — head back to the portfolio.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-28 md:px-8">
      <div className="w-full max-w-xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">Error 404</p>
        <h1 className="mt-5 font-mono text-6xl font-black tracking-tighter text-slate-50 sm:text-7xl">
          404
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          This page doesn&apos;t exist. It may have moved, or the link might be off by a character.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300"
          >
            Back to home
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
          >
            View projects
          </Link>
        </div>

        <nav aria-label="Sections" className="mt-14">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className="font-mono text-sm text-slate-400 transition-colors hover:text-emerald-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
