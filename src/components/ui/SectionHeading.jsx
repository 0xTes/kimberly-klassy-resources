export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return <header className={`max-w-2xl ${alignment}`}><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>{description && <p className="mt-5 text-base leading-7 text-brand/70">{description}</p>}</header>;
}
