import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showWordmark?: boolean;
  variant?: 'light' | 'dark'; // light is for cream bg, dark is for forest-950 bg
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  variant = 'light',
  onClick,
}) => {
  // Dimensions for mark
  const dimensions = {
    sm: { markW: 30, markH: 26, textClass: 'text-lg', subtextClass: 'text-[9px]' },
    md: { markW: 38, markH: 34, textClass: 'text-xl', subtextClass: 'text-[10px]' },
    lg: { markW: 50, markH: 44, textClass: 'text-2xl', subtextClass: 'text-xs' },
    hero: { markW: 68, markH: 60, textClass: 'text-3xl sm:text-4xl', subtextClass: 'text-xs sm:text-sm' },
  }[size];

  const healthyColor = variant === 'dark' ? '#FAF7F0' : '#1B5E3A';
  const zoneColor = '#DB7F1E';
  const tagColor = variant === 'dark' ? '#C9DCC7' : '#5B5A54';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
      aria-label="Healthyzone Home"
    >
      {/* Precision Vector Mark matching Healthyzone identity */}
      <svg
        width={dimensions.markW}
        height={dimensions.markH}
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hz-leaf-left" x1="15" y1="25" x2="48" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8CC63F" />
            <stop offset="60%" stopColor="#2E7D4F" />
            <stop offset="100%" stopColor="#1B5E3A" />
          </linearGradient>
          <linearGradient id="hz-leaf-right" x1="85" y1="25" x2="52" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8CC63F" />
            <stop offset="60%" stopColor="#2E7D4F" />
            <stop offset="100%" stopColor="#1B5E3A" />
          </linearGradient>
          <linearGradient id="hz-torso" x1="50" y1="24" x2="50" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#48A468" />
            <stop offset="100%" stopColor="#1B5E3A" />
          </linearGradient>
          <linearGradient id="hz-amber-swoosh" x1="15" y1="78" x2="85" y2="78" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E99228" />
            <stop offset="100%" stopColor="#DB7F1E" />
          </linearGradient>
        </defs>

        {/* Amber Head/Energy Dot */}
        <circle cx="50" cy="15" r="7.5" fill="#DB7F1E" />

        {/* Human Torso & Raised Reaching Arms */}
        <path
          d="M50 25 C45 35 38 48 44 64 C47 54 48 42 50 30 C52 42 53 54 56 64 C62 48 55 35 50 25 Z"
          fill="url(#hz-torso)"
        />
        {/* Left Arm Sprout */}
        <path
          d="M48 29 C40 23 32 20 28 20 C32 26 38 31 46 33 Z"
          fill="#48A468"
        />
        {/* Right Arm Sprout */}
        <path
          d="M52 29 C60 21 68 13 72 10 C70 18 64 27 54 33 Z"
          fill="#3E985D"
        />

        {/* Left Leaf Body */}
        <path
          d="M45 60 C32 55 18 48 16 32 C26 33 42 43 47 55 Z"
          fill="url(#hz-leaf-left)"
        />
        {/* Left Leaf Center Vein */}
        <path
          d="M19 35 C28 42 38 49 46 57"
          stroke="#FAF7F0"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />

        {/* Right Leaf Body */}
        <path
          d="M55 60 C68 55 82 48 84 32 C74 33 58 43 53 55 Z"
          fill="url(#hz-leaf-right)"
        />
        {/* Right Leaf Center Vein */}
        <path
          d="M81 35 C72 42 62 49 54 57"
          stroke="#FAF7F0"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />

        {/* Base Green Swoosh */}
        <path
          d="M26 69 C40 73 60 72 68 67 C58 70 38 69 26 69 Z"
          fill="#1B5E3A"
        />

        {/* Base Amber Energy Swoosh */}
        <path
          d="M20 74 C38 82 64 81 80 66 C65 77 38 78 20 74 Z"
          fill="url(#hz-amber-swoosh)"
        />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className={`font-serif tracking-tight font-semibold ${dimensions.textClass}`}>
            <span style={{ color: healthyColor }}>Healthy</span>
            <span style={{ color: zoneColor }}>zone</span>
          </div>
          <span
            className={`font-sans tracking-wider uppercase font-medium mt-0.5 ${dimensions.subtextClass}`}
            style={{ color: tagColor }}
          >
            Health • Wellness • Lifestyle
          </span>
        </div>
      )}
    </div>
  );
};
