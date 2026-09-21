import { about } from "@/data/portfolio";
import { asset } from "@/lib/site";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Who I Am"
        description="A quick look at where I'm from, what I'm studying, and where I'm headed."
      />

      <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[320px]">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-slate-900">
            {about.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={asset(about.photo)}
                alt={`Portrait of ${about.fullName}`}
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="font-mono text-6xl font-black tracking-tighter text-emerald-400/80">
                  {about.initials}
                </span>
              </div>
            )}
          </div>
          {!about.photo && (
            <p className="mt-3 text-center font-mono text-xs text-slate-500">
              [ profile photo placeholder — drop one into /public and set about.photo ]
            </p>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-slate-50">{about.fullName}</h3>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              {about.currentRole}
            </span>
          </div>

          <p className="mt-3 font-mono text-sm text-slate-400">
            {about.degree} <span className="text-emerald-400">·</span> {about.yearLevel}
          </p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              Career goal
            </h4>
            <p className="mt-2 text-lg font-medium text-slate-100">{about.careerGoal}</p>
          </div>

          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              Interests
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-sm text-slate-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
