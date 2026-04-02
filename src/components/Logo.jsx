// Logo — gold sailboat circle emblem
// Matches brand gold #C9A96E on dark background

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
    <circle cx="24" cy="24" r="23" fill="#0B1F2E" stroke="#C9A96E" strokeWidth="1"/>
    {/* Inner gold ring */}
    <circle cx="24" cy="24" r="19" fill="none" stroke="#C9A96E" strokeWidth="0.5" opacity="0.4"/>

    {/* Stylized sailboat — main sail */}
    <path
      d="M24 12 L24 30"
      stroke="#C9A96E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Main sail (left) */}
    <path
      d="M24 12 Q19 20 24 30"
      fill="#C9A96E"
      opacity="0.9"
    />
    {/* Jib sail (right, smaller) */}
    <path
      d="M24 15 Q28 21 24 28"
      fill="#C9A96E"
      opacity="0.65"
    />
    {/* Hull */}
    <path
      d="M18 30 Q24 33 30 30 L29 32 Q24 34 19 32 Z"
      fill="#C9A96E"
    />
    {/* Wave line below hull */}
    <path
      d="M16 33 Q20 31 24 33 Q28 35 32 33"
      stroke="#C9A96E"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />
  </svg>
);

export default Logo;
