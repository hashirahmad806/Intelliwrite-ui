 export const ArcadeLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 200 200"
    className="drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
  >
    <rect
      x="20"
      y="20"
      width="160"
      height="160"
      rx="40"
      fill="url(#grad)"
      stroke="#A855F7"
      strokeWidth="6"
    />
    <circle cx="90" cy="95" r="12" fill="white" />
    <circle cx="130" cy="95" r="12" fill="white" opacity="0.9" />
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6D28D9" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);
