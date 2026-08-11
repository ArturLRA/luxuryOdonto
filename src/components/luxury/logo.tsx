import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/**
 * Luxury Odonto official logo — uses the brand PNG asset (transparent).
 * The `className` prop controls the displayed height (e.g. "h-8 w-auto").
 */
export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src="/luxury-logo.png?v=2"
        alt="Luxury Odonto — Instituto Odontológico"
        width={183}
        height={81}
        priority
        unoptimized
        className="h-full w-auto max-w-none"
        style={{
          objectFit: "contain",
          display: "block",
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
