import React from 'react';

// Hero Botanical & Human Line-Art Visual
export const HeroLineArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[540px] aspect-[1/1] mx-auto flex items-center justify-center ${className}`}>
      {/* Soft warm background glow circle */}
      <div 
        className="absolute inset-4 rounded-full bg-cream-100/70 -z-10 border border-sage-200/50"
        style={{ boxShadow: '0 20px 48px rgba(11, 46, 31, 0.05)' }}
      />

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Abstract botanical line art representing vitality, lifestyle, and preventive wellness"
        role="img"
      >
        <defs>
          <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0B2E1F" floodOpacity="0.04" />
          </filter>
        </defs>

        {/* Outer concentric rhythm rings (health balance & cycles) */}
        <circle
          cx="250"
          cy="250"
          r="220"
          stroke="#C9DCC7"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
        />
        <circle
          cx="250"
          cy="250"
          r="185"
          stroke="#C9DCC7"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />

        {/* Ambient Amber Sun/Vitality Arc */}
        <circle
          cx="250"
          cy="120"
          r="20"
          fill="#DB7F1E"
          fillOpacity="0.12"
          stroke="#DB7F1E"
          strokeWidth="1.75"
        />
        <circle cx="250" cy="120" r="6" fill="#DB7F1E" />

        {/* Central Figure - Organic human silhouette rising into vitality */}
        {/* Torso & Head gesture */}
        <path
          d="M250 148 C248 165 240 185 240 220 C240 270 250 320 250 370"
          stroke="#1B5E3A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M250 148 C252 165 260 185 260 220 C260 270 250 320 250 370"
          stroke="#1B5E3A"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Upward Reaching Arms transforming into botanical branches */}
        <path
          d="M246 195 C220 180 185 170 150 180 C130 186 115 198 105 215 C125 210 160 215 185 230 C205 242 225 260 242 275"
          stroke="#1B5E3A"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M254 195 C280 180 315 170 350 180 C370 186 385 198 395 215 C375 210 340 215 315 230 C295 242 275 260 258 275"
          stroke="#1B5E3A"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Primary Left Leaf Structure (Single-stroke organic precision) */}
        <path
          d="M170 200 C130 180 90 230 110 280 C130 330 190 310 225 270"
          stroke="#1B5E3A"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Left Leaf interior veins */}
        <path d="M125 240 C145 250 170 260 195 265" stroke="#C9DCC7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M135 270 C155 275 175 278 190 275" stroke="#C9DCC7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M150 295 C165 295 180 290 195 285" stroke="#C9DCC7" strokeWidth="1.5" strokeLinecap="round" />

        {/* Primary Right Leaf Structure */}
        <path
          d="M330 200 C370 180 410 230 390 280 C370 330 310 310 275 270"
          stroke="#1B5E3A"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Right Leaf interior veins */}
        <path d="M375 240 C355 250 330 260 305 265" stroke="#C9DCC7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M365 270 C345 275 325 278 310 275" stroke="#C9DCC7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M350 295 C335 295 320 290 305 285" stroke="#C9DCC7" strokeWidth="1.5" strokeLinecap="round" />

        {/* Subtle Upper Leaf Sprouts */}
        <path
          d="M244 165 C220 135 200 110 180 115 C180 135 210 155 238 175"
          stroke="#2E7D4F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M256 165 C280 135 300 110 320 115 C320 135 290 155 262 175"
          stroke="#2E7D4F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Flowing Ground / Base Swoosh Motif (grounding life, health stability) */}
        <path
          d="M100 375 C180 415 320 415 400 375"
          stroke="#1B5E3A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Secondary Lower Amber Accent Swoosh */}
        <path
          d="M130 395 C200 430 300 430 370 395"
          stroke="#DB7F1E"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Subtle Tertiary Wave */}
        <path
          d="M165 412 C215 435 285 435 335 412"
          stroke="#C9DCC7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Tiny delicate botanical nodes (balance points) */}
        <circle cx="105" cy="215" r="3" fill="#1B5E3A" />
        <circle cx="395" cy="215" r="3" fill="#1B5E3A" />
        <circle cx="180" cy="115" r="2.5" fill="#2E7D4F" />
        <circle cx="320" cy="115" r="2.5" fill="#2E7D4F" />
      </svg>
    </div>
  );
};

// Trailing Swoosh Divider line
export const SwooshDivider: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = '',
  inverted = false,
}) => {
  return (
    <div className={`w-full overflow-hidden flex justify-center py-4 select-none ${className}`}>
      <svg
        width="340"
        height="24"
        viewBox="0 0 340 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-48 sm:w-80 h-auto opacity-70 ${inverted ? 'scale-x-[-1]' : ''}`}
        aria-hidden="true"
      >
        <path
          d="M10 12 C80 20 140 4 210 14 C270 22 300 12 330 10"
          stroke="#C9DCC7"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="210" cy="14" r="2.5" fill="#1B5E3A" />
      </svg>
    </div>
  );
};

// Line-art Botanical Emblem for feature cards or headers
export const LeafAccent: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 32,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 34 C20 25 15 18 10 14 C18 12 28 17 31 25 C32 28 31 31 29 33 C26 31 23 28 20 22"
        stroke="#1B5E3A"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="8" r="2.5" fill="#DB7F1E" />
    </svg>
  );
};
