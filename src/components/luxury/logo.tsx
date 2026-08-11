import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/**
 * Luxury Odonto official logo — transparent PNG.
 * The wrapper div receives the height className (e.g. h-8 lg:h-10)
 * and the Image fills it with h-full + width auto to keep aspect ratio.
 */
export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <div className={cn("relative flex items-center h-8 lg:h-10", className)}>
      <Image
        src="/luxury-logo.png?v=3"
        alt="Luxury Odonto — Instituto Odontológico"
        width={183}
        height={81}
        priority
        unoptimized
        className="h-full w-auto object-contain"
        style={{
          filter: variant === "dark" ? "none" : "none",
        }}
      />
    </div>
  );
}

/**
 * Compact monogram — for favicon, avatar, etc.
 * Uses a gold "L" on navy background.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full bg-gold-gradient",
        className,
      )}
    >
      <span className="font-display font-bold text-petrol-deep">L</span>
    </div>
  );
}
