"use client";

import { useEffect, useState } from "react";
import { about, navLinks } from "@/data/portfolio";
import { CloseIcon, MenuIcon } from "@/components/icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...navLinks.map((link) => link.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Once there is room for the full row again, drop the mobile menu.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-slate-800/80 bg-slate-950/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#hero"
          aria-label="Back to top"
          className="font-mono text-sm font-bold tracking-widest text-emerald-400 transition-colors hover:text-emerald-300"
        >
          {about.initials}
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 text-slate-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-300 md:hidden"
        >
          {menuOpen ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
        </button>
      </nav>

      {menuOpen && (
        <ul id="mobile-nav" className="border-t border-slate-800/80 px-6 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
