import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/**
 * Luxury Odonto wordmark logo
 * Elegant serif typography with gold accent — emulates the brand identity
 * described in the briefing: gold on petrol backgrounds.
 */
export function Logo({ variant = "light", className, showTagline = false }: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <div className="flex items-baseline gap-[2px]">
        <span
          className="font-display font-semibold tracking-[0.18em] text-[1.05rem] sm:text-[1.15rem]"
          style={{ color: isLight ? "#db9e04" : "#0c5e6b" }}
        >
          LUXURY
        </span>
        <span
          className="font-display italic font-medium tracking-tight text-[1.05rem] sm:text-[1.15rem]"
          style={{ color: isLight ? "#ffffff" : "#1a2932" }}
        >
          Odonto
        </span>
      </div>
      {showTagline && (
        <span
          className="font-sans text-[0.55rem] uppercase tracking-[0.32em] mt-1"
          style={{ color: isLight ? "rgba(255,255,255,0.6)" : "#435963" }}
        >
          Instituto Odontológico
        </span>
      )}
    </div>
  );
}

/**
 * Monogram badge — circle with "L" — used in floating contexts, avatars, etc.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full bg-gold-gradient",
        className,
      )}
    >
      <span className="font-display font-bold text-petrol-deep">
        L
      </span>
    </div>
  );
}
