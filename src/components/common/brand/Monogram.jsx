const Monogram = ({ size = 40, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    role="img"
    aria-label="Abdulrahman Aruna monogram"
    className={className}
  >
    <defs>
      <linearGradient id="monogram-fill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#14a394" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="11" fill="url(#monogram-fill)" />
    <rect
      x="0.5"
      y="0.5"
      width="39"
      height="39"
      rx="10.5"
      fill="none"
      stroke="rgba(255,255,255,0.28)"
    />
    <g
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 27.5 14.75 12.5 20 27.5" />
      <path d="M11.9 22.6h5.7" />
      <path d="M23.5 27.5V13.4h4.2a3.9 3.9 0 0 1 0 7.8h-4.2l6.6 6.3" />
    </g>
  </svg>
);

export default Monogram;
