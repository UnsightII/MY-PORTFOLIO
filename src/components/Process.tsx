import { processSteps } from "@/data/portfolio";
import type { ProcessStep } from "@/data/portfolio";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

function StepCard({ index, step }: { index: number; step: ProcessStep }) {
  return (
    <div className="relative">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 font-mono text-lg font-bold text-emerald-300">
        {index + 1}
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-50">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
    </div>
  );
}

export default function Process() {
  return (
    <Section id="process" className="bg-slate-900/40">
      <SectionHeading
        eyebrow="Process"
        title="How I Work"
        description="From a vague idea to a shipped, working thing — this is the loop I follow."
      />

      <ol className="grid gap-10 lg:grid-cols-5 lg:gap-8">
        {processSteps.map((step, index) => (
          <li key={step.title} className="relative">
            <StepCard index={index} step={step} />
            {index < processSteps.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-4 top-6 hidden font-mono text-slate-700 lg:block"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}