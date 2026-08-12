const TONES = [
  { from: "#e8e4da", via: "#ded8ca", to: "#cfc7b3" }, // stone
  { from: "#e2e8dc", via: "#d3dbc9", to: "#bdc9a8" }, // olive / forest
  { from: "#ede0d5", via: "#e3cfbd", to: "#d2b79c" }, // rust
  { from: "#dfe3e8", via: "#ccd3db", to: "#b3bdc9" }, // slate
  { from: "#e7e1eb", via: "#d8cee0", to: "#c2b3cd" }, // plum
  { from: "#ede7d6", via: "#e2d8bd", to: "#cec19a" }, // sand
];

type PlaceholderProps = {
  tone?: number;
  label?: string;
  className?: string;
};

export default function Placeholder({
  tone = 0,
  label,
  className = "",
}: PlaceholderProps) {
  const t = TONES[tone % TONES.length];
  const hasPosition = /(?:^|\s)(?:absolute|fixed|sticky|static)(?:\s|$)/.test(
    className,
  );

  return (
    <div
      className={`${hasPosition ? "" : "relative"} overflow-hidden ring-1 ring-inset ring-black/[0.06] ${className}`}
      style={{
        backgroundImage: `radial-gradient(120% 140% at 20% 0%, ${t.from} 0%, ${t.via} 55%, ${t.to} 100%)`,
      }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay">
        <filter id={`grain-${tone}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${tone})`} />
      </svg>
      {label ? (
        <span className="tracked-label absolute bottom-3 left-3 text-[10px] text-fg/50">
          {label}
        </span>
      ) : null}
    </div>
  );
}
