import logoImage from "../src/assets/c54d6b1448ed307f810f02384aa2a7250a958461.png";

export function VersiaLoginLogo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const textSizes = {
    sm: "text-3xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-7xl"
  };

  const logoSizes = {
    sm: "h-28 w-28",
    md: "h-40 w-40 md:h-52 md:w-52",
    lg: "h-48 w-48 md:h-60 md:w-60"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={(logoImage as any).src}
        alt="Versia V"
        className={`${logoSizes[size]} object-contain -mr-8 md:-mr-10`}
      />
      <span
        className={`font-bold bg-gradient-to-r from-[#63E3FF] via-[#2FA7FF] to-[#7A2CFF] bg-clip-text text-transparent ${textSizes[size]}`}
      >
        ersia
      </span>
    </div>
  );
}
