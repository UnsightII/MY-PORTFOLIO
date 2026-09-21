import { contact, navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row md:px-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {contact.name}
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-xs text-slate-600">built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}