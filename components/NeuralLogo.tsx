import Image from "next/image";

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
  return (
    <div className={`relative ${compact ? "flex items-center gap-3" : ""}`}>
      <Image
        src="/logo.svg"
        alt="OpenNovaIA Logo"
        aria-label="OpenNovaIA Logo"
        width={240}
        height={160}
        priority={compact}
        unoptimized
        className={`${sizeClass[size]} drop-shadow-[0_0_24px_rgba(255,61,255,0.48)]`}
      />

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
