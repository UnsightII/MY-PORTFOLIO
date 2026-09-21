interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-slate-400">{description}</p>}
    </div>
  );
}