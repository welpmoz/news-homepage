import { useEffect, useRef, useState } from "react";

import "../scss/navbar.scss";

import CompanyLogo from "../assets/images/logo.svg";
import OpenMenuIcon from "../assets/images/icon-menu.svg";
import CloseMenuIcon from "../assets/images/icon-menu-close.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");

      const focusableElements = linksRef.current?.querySelectorAll("button, a, li[tabIndex='0']");

      const trapFocus = (event) => {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.key === "Tab") {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener("keydown", trapFocus);

      return () => {
        document.body.classList.remove("no-scroll");
        document.removeEventListener("keydown", trapFocus);
      };
    }
  }, [isMenuOpen]);

  return (
    <nav className="Navbar Main-grid__navbar">
      <img tabIndex={0} className="Navbar__logo" src={CompanyLogo} alt="Company Logo" width={44.98} height={28}  />

      <button className="Navbar__open-button" type="button" aria-label="Open Menu" onClick={() => setIsMenuOpen(true)}>
        <img src={OpenMenuIcon} alt="" width={40} height={17} />
      </button>

      <div className={
        isMenuOpen ? "Navbar__offcanvas Navbar__offcanvas--active" : "Navbar__offcanvas"
      } onClick={() => setIsMenuOpen(false)}></div>

      <div className={
        isMenuOpen ? "Navbar__links-wrapper Navbar__links-wrapper--open" : "Navbar__links-wrapper"
      } ref={linksRef}>
        <button className="Navbar__close-button" type="button" aria-label="Close Menu" onClick={() => setIsMenuOpen(false)}>
          <img src={CloseMenuIcon} alt="" width={30} height={30} />
        </button>
        <ul className="Navbar__links">
          <li className="Navbar__link" tabIndex={0}>Home</li>
          <li className="Navbar__link" tabIndex={0}>New</li>
          <li className="Navbar__link" tabIndex={0}>Popular</li>
          <li className="Navbar__link" tabIndex={0}>Trending</li>
          <li className="Navbar__link" tabIndex={0}>Categories</li>
        </ul>
      </div>
    </nav>
  );
}