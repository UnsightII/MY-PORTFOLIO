import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
}