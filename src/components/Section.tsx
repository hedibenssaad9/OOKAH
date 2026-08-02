import clsx from "clsx";
import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold">
      <span className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("px-6 py-24 md:px-10 lg:px-16", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
