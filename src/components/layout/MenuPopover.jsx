import { useEffect, useRef } from "react";

export default function MenuPopover({
  isOpen,
  onClose,
  navigation = [],
}) {
  const popoverRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    function handleClickOutside(event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute right-0 top-full z-50 mt-4 w-72 overflow-hidden rounded-3xl border border-brand/10 bg-surface shadow-[var(--shadow-soft)]"
      ref={popoverRef}
      role="menu"
      aria-label="Primary navigation"
    >
      <nav className="py-2">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            role="menuitem"
            className="block px-6 py-4 text-sm font-medium text-brand transition-colors duration-200 hover:bg-canvas focus:bg-canvas focus:outline-none"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}