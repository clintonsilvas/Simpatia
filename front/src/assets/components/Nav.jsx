import React, { useState } from "react";
import ButtonUnifenas from "../components/ButtonUnifenas";
import "./Nav.css";
import NavModulos from "./NavModulos";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open-nav" : ""}`}>
      <div className="navbar-header">
        <a href="/">
          <img src="/logo-simpatia.svg" alt="Logo" className="logo" />
        </a>
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <div className="links-centrais">
          <div className="nav-item-dropdown" onMouseEnter={handleSubMenuEnter}>
            <a href="#" className="dropdown-trigger">
              Módulos de IA
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className={`arrow-icon ${isSubMenuOpen ? "rotated" : ""}`}
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#006FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div
              className={`submenu-links ${isSubMenuOpen ? "open" : ""}`}
              onMouseLeave={handleSubMenuLeave}
            >
              <NavModulos />
            </div>
          </div>

          <hr />
          <a href="/about">Sobre o Projeto</a>
          <hr />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
