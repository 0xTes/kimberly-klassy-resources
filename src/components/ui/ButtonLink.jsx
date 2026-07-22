import Icon from "../icons/Icon";

export default function ButtonLink({ href, children, variant = "primary", external = false, className = "" }) {
  const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200";
  const variants = { primary: "bg-brand text-surface hover:bg-accent-dark", secondary: "border border-brand/25 text-brand hover:border-brand hover:bg-surface", text: "px-0 text-accent hover:text-accent-dark" };
  return <a href={href} className={`${base} ${variants[variant]} ${className}`} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{children}{variant === "text" && <Icon name="arrow" className="size-4" />}</a>;
}
