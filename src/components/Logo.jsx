const BLUE = '#6ABDE8'

export default function Logo({ onDark = false, className = '' }) {
  const dark = onDark ? '#FFFFFF' : '#111111'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Camera / chat-bubble icon */}
      <svg
        viewBox="0 0 50 58"
        fill="none"
        className="h-9 w-auto flex-shrink-0"
        aria-hidden="true"
      >
        {/* Top flash bar */}
        <rect x="14" y="1" width="14" height="3.5" rx="1.75" fill={BLUE} />
        {/* Camera body */}
        <rect x="1.5" y="8" width="44" height="34" rx="5.5" stroke={BLUE} strokeWidth="2.8" />
        {/* Lens outer ring */}
        <circle cx="23.5" cy="25" r="10.5" stroke={BLUE} strokeWidth="2.8" />
        {/* Lens inner ring */}
        <circle cx="23.5" cy="25" r="4.5" stroke={BLUE} strokeWidth="2.2" />
        {/* Speech-bubble tail bottom-left */}
        <path
          d="M1.5 39 L1.5 52 L14 39"
          stroke={BLUE}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="font-display leading-none select-none">
        <div className="font-black tracking-tight" style={{ fontSize: '1.3rem', lineHeight: 1 }}>
          <span style={{ color: BLUE }}>EVER</span>
          <span style={{ color: dark }}>VISION</span>
        </div>
        <div
          className="font-bold tracking-[0.2em]"
          style={{ fontSize: '0.58rem', color: dark, opacity: 0.8, marginTop: '3px' }}
        >
          MEDIA
        </div>
      </div>
    </div>
  )
}
