import { skillGroups } from "@/data/portfolio";
import type { SkillGroup } from "@/data/portfolio";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-colors hover:border-slate-700">
      <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
        {group.label}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-slate-700/80 bg-slate-950/60 px-3 py-1.5 text-sm text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & Technologies"
        description="The languages and tools I'm learning and using to build things end-to-end."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.label} group={group} />
        ))}
      </div>
    </Section>
  );
}