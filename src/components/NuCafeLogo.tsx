import React from 'react';

interface NuCafeLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  customSize?: number;
  variant?: 'full' | 'emblem' | 'horizontal';
  theme?: 'original' | 'light' | 'dark' | 'gold';
  showSubtitle?: boolean;
}

export const NuCafeLogo: React.FC<NuCafeLogoProps> = ({
  className = '',
  size = 'md',
  customSize,
  variant = 'full',
  theme = 'original',
  showSubtitle = false,
}) => {
  // Dimensions
  const getDimensions = () => {
    if (customSize) return customSize;
    switch (size) {
      case 'xs': return 28;
      case 'sm': return 36;
      case 'md': return 48;
      case 'lg': return 64;
      case 'xl': return 96;
      case '2xl': return 140;
      default: return 48;
    }
  };

  const dim = getDimensions();

  // Colors
  const getColors = () => {
    switch (theme) {
      case 'dark': // For dark backgrounds (like navbar, hero, footer)
        return {
          green: '#34D399', // vibrant emerald
          greenDark: '#10B981',
          brown: '#F5E6D3', // warm cream
          brownDark: '#D4B895',
          steam: '#C5A059', // gold
          text: '#FDFBF7',
          subtext: '#C5A059',
          circleBg: 'rgba(255, 255, 255, 0.05)',
        };
      case 'gold':
        return {
          green: '#C5A059',
          greenDark: '#9E7E38',
          brown: '#D4C3A1',
          brownDark: '#A6926D',
          steam: '#C5A059',
          text: '#C5A059',
          subtext: '#D4C3A1',
          circleBg: 'transparent',
        };
      case 'light':
        return {
          green: '#208B48',
          greenDark: '#146332',
          brown: '#4A2A18',
          brownDark: '#2D1B0D',
          steam: '#9E7E38',
          text: '#2D1B0D',
          subtext: '#6B4E38',
          circleBg: '#FFFFFF',
        };
      case 'original':
      default:
        return {
          green: '#279847', // Ethiopian coffee leaf green (from reference image)
          greenDark: '#1B7535',
          brown: '#5E3821', // Rich roasted coffee bean brown
          brownDark: '#422413',
          steam: '#A88B72', // Aromatic steam tone
          text: '#432616', // Bold brand typography color
          subtext: '#7A543A',
          circleBg: '#FFFFFF',
        };
    }
  };

  const colors = getColors();

  // Pure SVG Emblem recreating the authentic Nu Cafe mark:
  // - Left handle shaped as Amharic 'ኑ' in green
  // - Coffee cup bowl & lip in warm coffee brown
  // - Delicate steam swirls rising
  // - Saucer crescent below
  const EmblemSvg = (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 drop-shadow-xs"
      aria-label="Nu Café Coffee Cup Logo"
    >
      <defs>
        {/* Soft radial glow */}
        <radialGradient id="cupGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0" />
        </radialGradient>
        {/* Green gradient */}
        <linearGradient id="greenNuGrad" x1="20" y1="30" x2="80" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.green} />
          <stop offset="100%" stopColor={colors.greenDark} />
        </linearGradient>
        {/* Mocha brown gradient */}
        <linearGradient id="mochaGrad" x1="60" y1="50" x2="160" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.brown} />
          <stop offset="100%" stopColor={colors.brownDark} />
        </linearGradient>
      </defs>

      {/* Background circular emblem backing */}
      <circle cx="100" cy="100" r="94" fill={colors.circleBg} stroke={colors.brown} strokeWidth="1.5" strokeOpacity="0.12" />

      {/* Aromatic Steam Wisps above the cup */}
      <g stroke={colors.steam} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <path d="M92 24 C 95 32, 88 40, 94 48 C 96 51, 98 54, 98 57" />
        <path d="M102 20 C 108 30, 96 38, 104 50 C 107 54, 108 58, 107 62" />
        <path d="M112 28 C 114 34, 108 40, 112 48" strokeWidth="2" opacity="0.6" />
      </g>

      {/* THE AMHARIC "ኑ" (Nu) LETTER forming the stylized handle & left curve */}
      {/* Top loop & horizontal stroke of ኑ */}
      <path
        d="M 52 48
           C 44 48, 38 54, 38 64
           C 38 73, 46 80, 56 80
           L 78 80
           C 66 94, 60 112, 60 132
           C 60 148, 66 162, 78 172"
        stroke="url(#greenNuGrad)"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Middle horizontal connecting bar of ኑ */}
      <path
        d="M 54 116 L 88 126"
        stroke="url(#greenNuGrad)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* COFFEE CUP BOWL (Mocha Brown Curves) */}
      {/* Inner crescent layer */}
      <path
        d="M 72 82
           C 66 96, 64 114, 67 132
           C 71 152, 85 168, 102 172
           C 124 176, 148 160, 154 136
           C 158 118, 152 98, 142 84
           C 126 104, 98 108, 78 92"
        stroke="url(#mochaGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Outer rim & right curve of the cup */}
      <path
        d="M 86 68
           L 72 82
           C 66 98, 66 122, 74 142
           C 84 164, 104 174, 126 172
           C 146 168, 158 150, 162 130
           C 165 110, 158 88, 146 72"
        stroke="url(#mochaGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Coffee liquid surface arc inside the cup */}
      <path
        d="M 80 88
           C 98 106, 130 102, 144 82"
        stroke={colors.steam}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      {/* SAUCER BASE (Bottom curves) */}
      <path
        d="M 38 152
           C 48 174, 68 184, 80 186"
        stroke="url(#mochaGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 152 152
           C 168 158, 182 170, 186 182"
        stroke="url(#mochaGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 86 184
           C 106 188, 132 184, 150 178"
        stroke="url(#mochaGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {EmblemSvg}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {EmblemSvg}
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-serif font-black tracking-tight uppercase leading-none"
              style={{
                color: colors.text,
                fontSize: `${Math.max(16, Math.round(dim * 0.42))}px`,
                letterSpacing: '0.04em',
              }}
            >
              NU CAFÉ
            </span>
            <span
              className="font-serif font-bold leading-none opacity-90"
              style={{
                color: colors.green,
                fontSize: `${Math.max(12, Math.round(dim * 0.32))}px`,
              }}
            >
              (ኑ ካፌ)
            </span>
          </div>
          {showSubtitle && (
            <span
              className="font-sans-ui uppercase tracking-[0.25em] font-semibold mt-1"
              style={{
                color: colors.subtext,
                fontSize: `${Math.max(8, Math.round(dim * 0.18))}px`,
              }}
            >
              Addis Ababa · Ethiopia
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default 'full' vertical brand badge
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      {EmblemSvg}
      <div className="mt-2 flex flex-col items-center">
        <div className="flex items-center gap-1.5">
          <span
            className="font-serif font-black uppercase tracking-wider leading-none"
            style={{
              color: colors.text,
              fontSize: `${Math.max(14, Math.round(dim * 0.32))}px`,
              letterSpacing: '0.08em',
            }}
          >
            NU CAFÉ
          </span>
        </div>
        {showSubtitle && (
          <span
            className="font-sans-ui uppercase tracking-[0.25em] font-bold mt-1"
            style={{
              color: colors.green,
              fontSize: `${Math.max(8, Math.round(dim * 0.14))}px`,
            }}
          >
            ኑ ካፌ · ADDIS ABABA
          </span>
        )}
      </div>
    </div>
  );
};
