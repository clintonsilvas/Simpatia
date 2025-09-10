// Footer.jsx
import React from 'react';
import './Footer.css';
import ButtonUnifenas from './ButtonUnifenas';
import ButtonConhecerModulos from './ButtonConhecerModulos';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Divisão Esquerda */}
        <div className="footer-left">
          <img src="/logo-simpatia.svg" alt="Logo Simpatia" className="footer-logo-simpatia" />
          <div className="footer-text-box">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio expedita optio impedit suscipit quos illo sint ea sed?
            </p>
          </div>
            <ButtonConhecerModulos/>
        </div>

        {/* Divisão Meio/Direita */}
        <div className="footer-right">
          {/* Divisão de cima */}
          <div className="footer-right-top">
            {/* Coluna 1 (links) */}
            <div className="footer-column">
              <h3>Para Professores</h3>
              <ul>
                <li><a href="/">Gerador de Plano de Aulas</a></li>
                <li><a href="/">Corretor de Questões Descritivas</a></li>
              </ul>
            </div>
            {/* Coluna 2 (links) */}
            <div className="footer-column">
              <h3>Para Alunos</h3>
              <ul>
                <li><a href="/">Simpático</a></li>
              </ul>
            </div>
          </div>
          {/* Divisão de baixo */}
          <div className="footer-right-bottom">
            <div className="footer-text-know-more">
              Conheça mais sobre o projeto
            </div>
            <ButtonUnifenas></ButtonUnifenas>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;