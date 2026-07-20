export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <header className="space-y-3">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-neutral-600">
          {description}
        </p>
      )}
    </header>
  );
}