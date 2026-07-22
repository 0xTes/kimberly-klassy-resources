import { useState } from "react";

import BrandMark from "../brand/BrandMark";
import Icon from "../icons/Icon";
import Container from "./Container";
import MenuPopover from "./MenuPopover";

export default function SiteHeader({ brand }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="py-7 sm:py-9">
      <Container>
        <div className="relative flex items-center justify-between">
          <BrandMark brand={brand.identity} />

          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/10 bg-surface text-brand transition-all duration-200 hover:border-accent hover:bg-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>

          <MenuPopover
            isOpen={isMenuOpen}
            onClose={closeMenu}
            navigation={brand.navigation}
          />
        </div>
      </Container>
    </header>
  );
}