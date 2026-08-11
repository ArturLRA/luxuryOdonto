import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/**
 * Luxury Odonto official logo — uses the brand PNG asset.
 * The logo has a solid navy background (#273c59) which blends
 * seamlessly with the site's dark navy sections.
 */
export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src="/luxury-logo.png"
        alt="Luxury Odonto — Instituto Odontológico"
        width={180}
        height={79}
        priority
        className="h-auto w-auto"
        style={{
          maxWidth: "100%",
          objectFit: "contain",
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
