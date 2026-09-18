import React from 'react';
import { AppIcon } from './Icons';

export type ButtonVariant = 'primary' | 'secondary' | 'amber' | 'text' | 'secondary-dark' | 'glass';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: string;
  trailingIcon?: string;
  className?: string;
  pill?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  trailingIcon,
  className = '',
  disabled,
  pill = false,
  ...props
}) => {
  // Size specifications with calculated padding math
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm gap-2.5',
    lg: 'px-7 py-3.5 sm:px-8 sm:py-4 text-base gap-3',
  }[size];

  // Base classes: premium tactile feedback, spring-like ease curve, accessibility
  const baseClasses = `group relative inline-flex items-center justify-center font-medium font-sans select-none overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] active:translate-y-0 ${
    pill ? 'rounded-full' : 'rounded-xl'
  }`;

  // Premium variants with layered shadows, borders, and light reflection highlights
  const variantClasses = {
    primary:
      'bg-forest-700 text-cream-50 border border-forest-500/30 shadow-[0_2px_8px_rgba(11,46,31,0.12),inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-forest-950 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(11,46,31,0.22),inset_0_1px_0_rgba(255,255,255,0.2)] focus-visible:ring-forest-700 focus-visible:ring-offset-cream-50',
    amber:
      'bg-[#DB7F1E] text-white font-semibold border border-[#E99738]/40 shadow-[0_3px_12px_rgba(219,127,30,0.25),inset_0_1px_0_rgba(255,255,255,0.28)] hover:bg-[#C26E17] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(219,127,30,0.38),inset_0_1px_0_rgba(255,255,255,0.35)] focus-visible:ring-amber-500 focus-visible:ring-offset-cream-50',
    secondary:
      'border border-forest-700/60 text-forest-700 bg-cream-50/70 backdrop-blur-xs shadow-[0_1px_3px_rgba(11,46,31,0.04)] hover:bg-sage-200/50 hover:border-forest-700 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(11,46,31,0.08)] focus-visible:ring-forest-700 focus-visible:ring-offset-cream-50',
    'secondary-dark':
      'border border-sage-200/80 text-cream-50 bg-forest-950/40 backdrop-blur-xs shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:bg-forest-700/60 hover:border-cream-50 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] focus-visible:ring-cream-50 focus-visible:ring-offset-forest-950',
    glass:
      'border border-sage-200/90 text-forest-950 bg-cream-50/90 backdrop-blur-md shadow-[0_2px_10px_rgba(11,46,31,0.06)] hover:bg-cream-100 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(11,46,31,0.1)] focus-visible:ring-forest-700',
    text:
      'text-forest-700 bg-transparent px-0 py-1 hover:text-forest-950 focus-visible:ring-forest-700 gap-1.5 font-semibold text-xs sm:text-sm !overflow-visible shadow-none border-none active:scale-100',
  }[variant];

  // Icon color determination
  const iconColor =
    variant === 'primary' || variant === 'amber' || variant === 'secondary-dark'
      ? '#FAF7F0'
      : '#1B5E3A';

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

  return (
    <button
      className={`${baseClasses} ${variant === 'text' ? '' : sizeClasses} ${variantClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {/* Subtle light sweep shimmer overlay for primary & amber buttons */}
      {(variant === 'primary' || variant === 'amber') && (
        <span
          className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          <span className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer" />
        </span>
      )}

      {/* Leading Icon with subtle micro-scale on hover */}
      {icon && (
        <span className="relative z-10 shrink-0 transition-transform duration-200 ease-out group-hover:scale-110">
          <AppIcon name={icon} size={iconSize} color={iconColor} />
        </span>
      )}

      {/* Text Label */}
      <span className="relative z-10 tracking-tight whitespace-nowrap">{children}</span>

      {/* Trailing Icon with smooth micro-shift on hover */}
      {trailingIcon && (
        <span className="relative z-10 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1.5">
          <AppIcon name={trailingIcon} size={iconSize} color={iconColor} />
        </span>
      )}
    </button>
  );
};
