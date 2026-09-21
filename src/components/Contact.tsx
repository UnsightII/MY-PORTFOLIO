import { contact } from "@/data/portfolio";
import { DiscordIcon, ExternalLinkIcon, GitHubIcon, GlobeIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const iconForLabel: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Email: MailIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Portfolio: GlobeIcon,
  Discord: DiscordIcon,
};

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something"
        description="Whether it's a project, an internship, or just a chess game — my inbox is open."
      />

      <div className="mx-auto max-w-3xl text-center">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300"
        >
          <MailIcon />
          Email me
        </a>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contact.links.map((link) => {
          const Icon = iconForLabel[link.label] ?? GlobeIcon;
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex h-full items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-emerald-400/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/60 text-emerald-400">
                  <Icon width={20} height={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-slate-50">{link.label}</span>
                  <span className="block truncate font-mono text-xs text-slate-400">
                    {link.handle}
                  </span>
                </span>
                <ExternalLinkIcon
                  width={14}
                  height={14}
                  className="ml-auto shrink-0 text-slate-500 transition-colors group-hover:text-emerald-400"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}