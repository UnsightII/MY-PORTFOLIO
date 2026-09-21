import { hero } from "@/data/portfolio";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "@/components/icons";

const terminalLines = [
  { prompt: "$ whoami", output: "john-andrew" },
  { prompt: "$ cat about.txt", output: "BSIT student · aspiring full-stack dev" },
  { prompt: "$ stack --list", output: "ts · react · tailwind · node" },
  { prompt: "$ status", output: "building cool things", active: true },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.12),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:px-8 md:pt-44 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="font-mono text-sm text-emerald-400">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            {hero.specialization}
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-4 font-mono text-lg text-slate-300 sm:text-xl">
            {hero.title} <span className="text-emerald-400">·</span> {hero.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{hero.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
            >
              <GitHubIcon />
              {hero.secondaryCta.label}
              <ExternalLinkIcon width={14} height={14} />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-emerald-500/5">
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">john@dev: ~</span>
            </div>
            <div className="space-y-3 px-5 py-6 font-mono text-sm">
              {terminalLines.map((line) => (
                <div key={line.prompt}>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">{line.prompt}</span>
                  </p>
                  <p className={line.active ? "text-emerald-300" : "text-slate-500"}>{line.output}</p>
                </div>
              ))}
              <p>
                <span className="text-emerald-400">$</span>
                <span className="ml-2 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-400" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}