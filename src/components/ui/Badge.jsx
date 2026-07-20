export default function Badge({
  children,
}) {
  return (
    <span className="rounded-full bg-surface px-4 py-1 text-sm font-medium shadow-sm">
      {children}
    </span>
  );
}