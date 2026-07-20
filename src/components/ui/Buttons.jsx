import clsx from "clsx";

export default function Button({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full",
        "bg-brand",
        "px-8 py-3",
        "font-medium",
        "text-white",
        "transition",
        "hover:opacity-90",
        "active:scale-[.98]",
        "focus-visible:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}