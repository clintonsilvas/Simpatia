import React, { useState } from 'react';
import ButtonUnifenas from '../components/ButtonUnifenas';
import './Nav.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuClick = (e) => {
    e.preventDefault();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open-nav' : ''}`}>
      <div className='navbar-header'>
        <a href="/">
          <img src="/logo-simpatia.svg" alt="Logo" className="logo" />
        </a>
        <div className='hamburger-menu' onClick={handleMenuClick}>
          <span></span>            
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>  
        <div className="links-centrais">
          <div className="nav-item-dropdown">
            <a href="#" onClick={handleSubMenuClick}>Módulos de IA
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#006FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>          
            <div className={`submenu-links ${isSubMenuOpen ? 'open' : ''}`}>
              <a href="/modulo1">Módulo 1</a>
              <a href="/modulo2">Módulo 2</a>
              <a href="/modulo3">Módulo 3</a>
            </div>
          </div>
          <hr></hr>
          <a href="/about">Sobre o Projeto</a>
          <hr></hr>
        </div>                            
        <ButtonUnifenas />
      </div>      
    </nav>
  );
}

export default NavBar;