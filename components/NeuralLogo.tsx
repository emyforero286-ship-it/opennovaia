type NeuralLogoProps = {
  compact?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-56 w-56 sm:h-72 sm:w-72"
};

export function NeuralLogo({ compact = false, size = "md" }: NeuralLogoProps) {
  const gradientId = compact ? "neural-gradient-compact" : `neural-gradient-${size}`;
  const glowId = compact ? "neural-glow-compact" : `neural-glow-${size}`;

  return (
    <div className={`relative ${compact ? "flex items-center gap-3" : ""}`}>
      <svg
        className={`${sizeClass[size]} overflow-visible drop-shadow-[0_0_24px_rgba(255,61,255,0.48)]`}
        viewBox="0 0 240 160"
        role="img"
        aria-label="OpenNovaIA neural infinity logo"
      >
        <defs>
          <linearGradient id={gradientId} x1="20" x2="220" y1="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6A00FF" />
            <stop offset="0.48" stopColor="#B200FF" />
            <stop offset="0.72" stopColor="#FF3DFF" />
            <stop offset="1" stopColor="#FF6CF0" />
          </linearGradient>
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M28 80C52 34 88 34 120 80C152 126 188 126 212 80C188 34 152 34 120 80C88 126 52 126 28 80Z"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9"
          filter={`url(#${glowId})`}
        />
        <path
          d="M40 80C62 48 89 49 120 80C151 111 178 112 200 80"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
        <path
          d="M46 59L72 78L95 52L120 80L146 54L171 79L198 61M47 101L72 78L95 107L120 80L146 108L171 79L198 100"
          fill="none"
          stroke="#C084FC"
          strokeOpacity="0.48"
          strokeWidth="1.4"
        />
        {[
          [40, 80],
          [58, 57],
          [72, 78],
          [88, 47],
          [96, 107],
          [120, 80],
          [144, 54],
          [150, 108],
          [171, 79],
          [188, 51],
          [200, 80],
          [188, 109]
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={cx === 120 ? 6 : 4.2}
            fill="#fff"
            stroke="#FF3DFF"
            strokeWidth="2"
            filter={`url(#${glowId})`}
          />
        ))}
        <circle cx="120" cy="80" r="10" fill="#FBBF24" opacity="0.88" filter={`url(#${glowId})`} />
      </svg>

      {compact && (
        <span>
          <span className="block text-lg font-bold leading-none tracking-wide text-white">
            OpenNova<span className="bg-gradient-to-r from-nova-fuchsia to-nova-pink bg-clip-text text-transparent">IA</span>
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.3em] text-nova-pink/75">
            Neural intelligence
          </span>
        </span>
      )}
    </div>
  );
}
