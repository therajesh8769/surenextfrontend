export function LogoMark({ size = 34, tone = 'dark' }) {
  const bg = tone === 'light' ? '#FBFAF8' : '#1E3A5F';
  const glyph = tone === 'light' ? '#1E3A5F' : '#FBFAF8';

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill={bg} />
      <path
        d="M43 20C43 20 24 20 24 26.5C24 33 41 29 41 37C41 44.5 20 44.5 20 44.5"
        stroke={glyph}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="43" cy="20" r="4" fill="#D97706" />
    </svg>
  );
}

export default function Logo({ size = 34, textClassName = '', tone = 'dark' }) {
  return (
    <>
      <LogoMark size={size} tone={tone} />
      <span className={textClassName}>Surenext</span>
    </>
  );
}
