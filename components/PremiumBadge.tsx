import { Crown, Sparkles } from "lucide-react";

interface PremiumBadgeProps {
  variant?: "small" | "medium" | "large";
  showText?: boolean;
}

export function PremiumBadge({ variant = "medium", showText = true }: PremiumBadgeProps) {
  const sizes = {
    small: "px-2 py-1 text-xs gap-1",
    medium: "px-3 py-1.5 text-sm gap-1.5",
    large: "px-4 py-2 text-base gap-2",
  };

  const iconSizes = {
    small: "w-3 h-3",
    medium: "w-4 h-4",
    large: "w-5 h-5",
  };

  return (
    <div 
      className={`inline-flex items-center ${sizes[variant]} rounded-full font-semibold text-white relative overflow-hidden group`}
      style={{
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      <Crown className={`${iconSizes[variant]} relative z-10`} />
      {showText && <span className="relative z-10">Premium</span>}
      <Sparkles className={`${iconSizes[variant]} relative z-10 animate-pulse`} />
    </div>
  );
}
