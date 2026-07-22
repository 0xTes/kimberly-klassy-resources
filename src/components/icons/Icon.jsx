const paths = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.4"
        cy="6.6"
        r=".7"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),

  threads: (
    <>
      <path d="M7.5 9.5c.6-3.4 2.3-5 4.9-5 3.3 0 4.8 2.1 4.8 4.9 0 4.3-2.8 6.8-6 6.8-2 0-3.4-1-3.4-2.6 0-2 2.1-3.1 5.8-2.3" />
      <path d="M7.2 14.8c-.1 3 1.9 4.7 4.9 4.7 4.1 0 7-3.1 7-7.4" />
    </>
  ),

  bluesky: (
    <path d="M12 11.3C10 7.5 6.1 5.1 4.4 6.4 2.7 7.7 4.2 12 6.1 13.8c1.3 1.2 3.2.8 4.3-.1-1.1 1-2 2.9-.9 4.3 1.7 2.1 4.8 1.3 5.8-.2 1-1.4.7-3.2-1.1-4.4 1.8 1.2 3.9 1.1 5.1-.4 1.6-2.1 2.3-5.7.7-6.8-1.9-1.3-5.8 1.4-8 5.1Z" />
  ),

  x: (
    <path d="M5 4.5 18.8 19.5M19 4.5 5.2 19.5M8.2 4.5H5L15.8 19.5H19" />
  ),

  sparkle: (
    <path d="m12 3 1.5 5.3L19 10l-5.5 1.7L12 17l-1.5-5.3L5 10l5.5-1.7L12 3Zm6.5 12 .6 2.1 2.1.6-2.1.6-.6 2.1-.6-2.1-2.1-.6 2.1-.6.6-2.1Z" />
  ),

  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3.5 19c.5-3.3 2.5-5 5.5-5s5 1.7 5.5 5M14.5 15c3.3-.4 5.3.9 6 4" />
    </>
  ),

  heart: (
    <path d="M20.8 8.7c0 5-8.8 10.2-8.8 10.2S3.2 13.7 3.2 8.7c0-2.8 2.1-4.8 4.7-4.8 1.8 0 3.4 1 4.1 2.4.7-1.4 2.3-2.4 4.1-2.4 2.6 0 4.7 2 4.7 4.8Z" />
  ),

  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </>
  ),

  arrow: (
    <path d="M5 12h14M13 6l6 6-6 6" />
  ),

  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}