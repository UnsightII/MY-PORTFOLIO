import type { Project } from "@/data/portfolio";
import { asset } from "@/lib/site";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">{label}</dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-slate-300">{children}</dd>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <details className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 transition-colors hover:border-slate-700 open:border-emerald-400/40 open:bg-slate-900">
      <summary className="flex cursor-pointer list-none flex-col [&::-webkit-details-marker]:hidden">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-slate-800 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
          {project.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(project.thumbnail)}
              alt={`${project.name} screenshot`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-mono text-2xl font-bold tracking-tighter text-slate-600">
                {project.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
          <span className="absolute left-3 top-3 rounded-md bg-slate-950/80 px-2.5 py-1 font-mono text-xs text-slate-300 backdrop-blur">
            {project.type}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-slate-50">{project.name}</h3>
            <span
              className={`mt-1 shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                project.aiVisuals
                  ? "bg-violet-400/10 text-violet-300"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              AI visuals: {project.aiVisuals ? "yes" : "no"}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-800 px-2 py-1 font-mono text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400">
            Details
            <span className="transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </span>
        </div>
      </summary>

      <div className="border-t border-slate-800 p-5">
        <dl className="space-y-5">
          <DetailRow label="Problem">{project.problem}</DetailRow>
          <DetailRow label="Solution">{project.solution}</DetailRow>
          <DetailRow label="My role">{project.role}</DetailRow>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              Key features
            </dt>
            <dd className="mt-2">
              <ul className="space-y-1.5">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <DetailRow label="Challenge">{project.challenge}</DetailRow>
          <DetailRow label="What I learned">{project.learned}</DetailRow>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-800 pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300"
            >
              Live demo
              <ExternalLinkIcon width={14} height={14} />
            </a>
          )}
        </div>
      </div>
    </details>
  );
}