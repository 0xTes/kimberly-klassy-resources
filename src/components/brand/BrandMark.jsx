export default function BrandMark({ brand, compact = false }) {
  return (
    <span className={`inline-flex items-baseline ${compact ? "text-lg" : "text-2xl"}`} aria-label={brand.name}>
      <span className="font-bold tracking-[-0.04em]">{brand.firstName.toUpperCase()}</span>
      <span className="ml-1 font-medium tracking-[-0.04em]">{brand.lastName}</span>
    </span>
  );
}
