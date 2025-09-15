import React, { useState } from 'react';
import ButtonUnifenas from '../components/ButtonUnifenas';
import './Nav.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
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
        <a href="/">Módulos de IA</a>
        <hr></hr>
        <a href="/about">Sobre o Projeto</a>
        <hr></hr>                
        <ButtonUnifenas />
      </div>
    </nav>
  );
}

export default NavBar;