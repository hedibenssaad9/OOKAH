import clsx from "clsx";

/**
 * Hookah mark with its violet flame — the brand symbol from the OOKAH app.
 */
export function HookahMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ookah-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7c2ecb" />
          <stop offset="55%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#e0b8ff" />
        </linearGradient>
      </defs>

      {/* flame */}
      <path
        d="M24 2c2.6 3.1 3.9 5.7 3.9 7.9 0 2.4-1.6 3.6-1.6 5.6 0 1 .5 1.8 1.2 2.4-2 .5-3.5.2-4.6-.8-1.4-1.3-1.7-3.2-1-5.3-1.5 1.2-2.3 2.7-2.3 4.4 0 .8.2 1.6.5 2.3-1.6-1.2-2.4-2.9-2.4-5 0-3.3 2.1-6.9 6.3-11.5z"
        fill="url(#ookah-flame)"
      />

      {/* bowl */}
      <path
        d="M18.5 20h11l-1.6 5.5h-7.8L18.5 20z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* stem */}
      <path
        d="M24 25.5v12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* plate */}
      <path
        d="M16 30h16"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* vase */}
      <path
        d="M24 37.5c-4.6 0-8 3.6-8 8.6 0 5.7 3.6 9.4 8 9.4s8-3.7 8-9.4c0-5-3.4-8.6-8-8.6z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      {/* hose */}
      <path
        d="M24 33.5c4.5 0 8.5 1.6 10.5 4.6 2 3 1.6 6.4-.8 8.4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

/** Thin ornamental rule with a curl at its inner end. */
function Flourish({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 12"
      className={clsx("h-2.5 w-full text-gold", flip && "-scale-x-100")}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 6h94"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M94 6c4-4 9-4 11 0 1.6 3.2-1.4 5.4-4 4.2-2-1-2.2-3.6.4-4.6 2.6-1 6.2.4 8.6 2.4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Full brand lockup: flanking rules, hookah mark, spaced wordmark.
 * `compact` drops the rules for tight spots such as the navbar.
 */
export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <span className={clsx("inline-flex items-center gap-2.5", className)}>
        <HookahMark className="h-7 w-auto text-gold" />
        <span className="font-display text-xl font-semibold tracking-[0.34em] text-cream">
          OOKAH
        </span>
      </span>
    );
  }

  return (
    <span
      className={clsx("inline-flex flex-col items-center gap-1.5", className)}
    >
      <HookahMark className="h-10 w-auto text-gold" />
      <span className="flex w-full items-center gap-3">
        <span className="hidden w-24 sm:block">
          <Flourish />
        </span>
        <span className="font-display text-2xl font-semibold tracking-[0.36em] text-gold">
          OOKAH
        </span>
        <span className="hidden w-24 sm:block">
          <Flourish flip />
        </span>
      </span>
    </span>
  );
}
