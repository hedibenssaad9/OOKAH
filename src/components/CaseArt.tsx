import { CaseVariant } from "@/lib/products";

const VARIANTS: Record<
  CaseVariant,
  { base: string; base2: string; accent: string; accent2: string; glow: string }
> = {
  onyx: {
    base: "#1c1c20",
    base2: "#0a0a0c",
    accent: "#c9a24a",
    accent2: "#e8c979",
    glow: "rgba(201,162,74,0.35)",
  },
  or: {
    base: "#2a2117",
    base2: "#120e09",
    accent: "#e8c979",
    accent2: "#fff3d6",
    glow: "rgba(232,201,121,0.4)",
  },
  ivoire: {
    base: "#232326",
    base2: "#0c0c0e",
    accent: "#c9c4b8",
    accent2: "#f4f0e6",
    glow: "rgba(244,240,230,0.25)",
  },
  ember: {
    base: "#241512",
    base2: "#0a0706",
    accent: "#c66a45",
    accent2: "#e8975f",
    glow: "rgba(198,106,69,0.4)",
  },
};

export function CaseArt({
  variant,
  className,
  animate = true,
}: {
  variant: CaseVariant;
  className?: string;
  animate?: boolean;
}) {
  const c = VARIANTS[variant];
  const gradId = `case-grad-${variant}`;
  const glowId = `case-glow-${variant}`;

  return (
    <div className={className}>
      <svg
        viewBox="0 0 400 320"
        className={`h-full w-full ${animate ? "animate-float" : ""}`}
        role="img"
        aria-label="Rendu stylisé de la mallette OOKAH"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c.base} />
            <stop offset="100%" stopColor={c.base2} />
          </linearGradient>
          <radialGradient id={glowId} cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor={c.glow} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <ellipse cx="200" cy="270" rx="150" ry="18" fill="black" opacity="0.35" />
        <rect x="10" y="30" width="380" height="260" fill={`url(#${glowId})`} />

        <g>
          <rect
            x="45"
            y="55"
            width="310"
            height="200"
            rx="18"
            fill={`url(#${gradId})`}
            stroke={c.accent}
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <rect
            x="45"
            y="55"
            width="310"
            height="200"
            rx="18"
            fill="none"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="1"
          />

          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={90 + i * 70}
              y1="55"
              x2={90 + i * 70}
              y2="255"
              stroke={c.accent}
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          ))}

          <rect
            x="70"
            y="90"
            width="260"
            height="130"
            rx="6"
            fill="none"
            stroke={c.accent}
            strokeOpacity="0.35"
            strokeWidth="1"
          />

          <circle cx="200" cy="155" r="34" fill="none" stroke={c.accent} strokeWidth="1.5" opacity="0.9" />
          <circle cx="200" cy="155" r="24" fill="none" stroke={c.accent2} strokeWidth="1" opacity="0.8" />
          <text
            x="200"
            y="163"
            textAnchor="middle"
            fontSize="22"
            fontFamily="var(--font-display), sans-serif"
            fill={c.accent2}
          >
            O
          </text>

          <rect x="185" y="48" width="30" height="14" rx="4" fill={c.accent} opacity="0.85" />
          <rect x="60" y="60" width="16" height="30" rx="3" fill={c.accent} opacity="0.6" />
          <rect x="324" y="60" width="16" height="30" rx="3" fill={c.accent} opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
