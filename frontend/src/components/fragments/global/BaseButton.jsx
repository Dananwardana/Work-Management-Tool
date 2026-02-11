import React from "react";
import { Loader2 } from "lucide-react";

/**
 * BaseButton Component
 * Desain fleksibel dengan sentuhan "Expensive Look" (Colored Shadows & Smooth Lift)
 */
export const BaseButton = ({
  children,
  variant = "primary", // 'primary' | 'secondary'
  isLoading = false,
  className = "",
  type = "button",
  ...props
}) => {

  // 1. BASE STYLES
  // Struktur dasar, tipografi, dan animasi transisi
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-2xl active:scale-[0.98] disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none select-none";

  // 2. VARIANTS
  const variants = {
    // PRIMARY: Solid, Deep Blue, Colored Shadow
    primary: `
      bg-brand-components text-white
      shadow-[0_10px_20px_-10px_rgba(5,38,89,0.5)]
      hover:bg-brand-deep hover:-translate-y-1 hover:shadow-[0_14px_28px_-12px_rgba(2,16,36,0.6)]
      border border-transparent
    `,

    // SECONDARY: Outline/Ghost, Clean White, Subtle Border
    secondary: `
      bg-white text-brand-components
      border border-brand-primary/20
      hover:bg-brand-secondary/10 hover:border-brand-primary/50 hover:text-brand-deep
      shadow-sm hover:shadow-md
    `,
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          <span className="opacity-90">Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
