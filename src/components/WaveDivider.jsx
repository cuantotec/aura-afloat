import './WaveDivider.css';

const VARIANTS = {
  teal: {
    fill: '#3D7A7C',
    flip: false,
  },
  ivory: {
    fill: '#FAF8F5',
    flip: false,
  },
  navy: {
    fill: '#0B1F2E',
    flip: false,
  },
};

export default function WaveDivider({ variant = 'teal', flip = false }) {
  const { fill } = VARIANTS[variant] || VARIANTS.teal;

  return (
    <div className={`wave-divider ${flip ? 'wave-divider--flip' : ''}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Primary wave */}
        <path
          d="M0,50 C180,80 360,10 540,45 C720,80 900,5 1080,42 C1260,79 1380,22 1440,50 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
