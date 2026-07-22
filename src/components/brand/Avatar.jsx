export default function Avatar({ image, alt, initials, className = "" }) {
  if (image) return <img className={`object-cover ${className}`} src={image} alt={alt} loading="lazy" />;
  return <div aria-label={alt} role="img" className={`grid place-items-center bg-accent text-4xl font-semibold tracking-[-0.08em] text-surface ${className}`}>{initials}</div>;
}
