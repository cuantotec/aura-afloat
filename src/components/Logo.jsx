// Logo — circular gold emblem with mountain/sail + wave motif
// Matches brand gold #C9A96E on navy #0B1F2E
// Icon version works at small sizes; full badge for larger use

export const Logo = ({ size = 48, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    aria-label="Aura Afloat"
    role="img"
    {...props}
  >
    {/* Outer circle — navy */}
    <circle cx="24" cy="24" r="23" fill="#0B1F2E" />
    {/* Inner gold ring */}
    <circle cx="24" cy="24" r="20" fill="none" stroke="#C9A96E" strokeWidth="0.75" opacity="0.5"/>
    {/* Stylized A / mountain / sail — main left stroke */}
    <path
      d="M16 32 L24 14 L32 32"
      stroke="#C9A96E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Inner sail/wave fill */}
    <path
      d="M18 30 L24 16 L30 30"
      stroke="#C9A96E"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.6"
    />
    {/* Wave lines at base */}
    <path
      d="M12 34 Q16 32 20 34 Q24 36 28 34 Q32 32 36 34"
      stroke="#C9A96E"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
      opacity="0.8"
    />
    <path
      d="M10 37 Q15 35 19 37 Q24 39 29 37 Q34 35 38 37"
      stroke="#C9A96E"
      strokeWidth="0.75"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />
  </svg>
);

// FullLogo — circular badge with text (for footer/large use)
export const FullLogo = ({ size = 120, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    aria-label="Aura Afloat"
    role="img"
    {...props}
  >
    {/* Outer circle — navy */}
    <circle cx="100" cy="100" r="96" fill="#0B1F2E" />
    {/* Inner ring */}
    <circle cx="100" cy="100" r="82" fill="none" stroke="#C9A96E" strokeWidth="1" opacity="0.4"/>
    {/* Stylized A / mountain / sail */}
    <path d="M70 140 L100 55 L130 140" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M77 130 L100 65 L123 130" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
    {/* Wave lines */}
    <path d="M50 148 Q70 142 90 148 Q110 154 130 148 Q150 142 160 146" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8"/>
    <path d="M42 158 Q65 152 88 158 Q112 164 138 158 Q155 152 165 156" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
    {/* AURA text */}
    <text x="100" y="175" textAnchor="middle" fill="#C9A96E" fontSize="11" fontFamily="Georgia, serif" letterSpacing="8" opacity="0.9">AURA</text>
  </svg>
);

export default Logo;
