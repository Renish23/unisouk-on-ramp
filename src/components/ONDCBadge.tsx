import ondcLogo from "@/assets/ondc-logo.svg";
import { cn } from "@/lib/utils";

interface ONDCBadgeProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "subtle" | "onDark";
  className?: string;
  label?: string;
}

const sizeClasses = {
  sm: { wrapper: "px-3 py-1 text-xs", img: "h-4" },
  md: { wrapper: "px-3.5 py-1.5 text-sm", img: "h-5" },
  lg: { wrapper: "px-4 py-2 text-base", img: "h-6" },
};

const variantClasses = {
  default: "bg-background text-foreground border-border",
  subtle: "bg-muted text-muted-foreground border-transparent",
  onDark: "bg-white/10 text-white border-white/20 backdrop-blur-sm",
};

const ONDCBadge = ({ size = "sm", variant = "default", className, label = "ONDC Network" }: ONDCBadgeProps) => {
  const s = sizeClasses[size];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border select-none",
        s.wrapper,
        variantClasses[variant],
        className
      )}
      aria-label={`${label} badge`}
    >
      <img
        src={ondcLogo}
        alt="ONDC logo - Open Network for Digital Commerce"
        loading="lazy"
        className={cn("w-auto", s.img)}
      />
      <span className="hidden sm:inline">{label}</span>
    </span>
  );
};

export default ONDCBadge;
