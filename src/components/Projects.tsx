import { projects } from "@/data/portfolio";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-900/40">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've Built"
        description="Sample placeholder projects while the real ones come in. Click a card to expand the full story."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}