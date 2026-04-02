// Logo component — sailboat + wave motif matching favicon
// Gold accent #C9A96E, works at navbar heights (40-50px)

export const Logo = ({ size = 36, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-label="Aura Afloat"
    role="img"
    {...props}
  >
    {/* Wave base */}
    <path
      d="M4 22 Q8 19 12 22 Q16 25 20 22 Q24 19 28 22 L28 24 Q24 21 20 24 Q16 27 12 24 Q8 21 4 24 Z"
      fill="#C9A96E"
      opacity="0.85"
    />
    {/* Sail mast */}
    <path
      d="M16 8 L16 22"
      stroke="#C9A96E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Left sail (larger, main) */}
    <path
      d="M16 8 Q12 14 16 20"
      fill="#C9A96E"
      opacity="0.95"
    />
    {/* Right sail (smaller, wind-filled) */}
    <path
      d="M16 10 Q20 15 16 20"
      fill="#C9A96E"
      opacity="0.7"
    />
    {/* Hull */}
    <path
      d="M10 22 Q16 25 22 22 L21 24 Q16 26 11 24 Z"
      fill="#C9A96E"
    />
  </svg>
);

export default Logo;
