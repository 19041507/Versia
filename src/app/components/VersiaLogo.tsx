import logoImage from "figma:asset/c54d6b1448ed307f810f02384aa2a7250a958461.png";

export function VersiaLogo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  const sizes = {
    sm: { width: "w-48 md:w-56", height: "h-14 md:h-16" },
    md: { width: "w-64 md:w-80", height: "h-20 md:h-24" },
    lg: { width: "w-80 md:w-96", height: "h-24 md:h-32" },
    xl: { width: "w-96 md:w-[28rem]", height: "h-32 md:h-40" }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Versia" 
        className={`${sizes[size].width} ${sizes[size].height} object-contain`}
      />
    </div>
  );
}