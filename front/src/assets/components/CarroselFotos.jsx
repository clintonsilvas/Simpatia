import React, { useState, useEffect } from 'react';
import './CarroselFotos.css';
import EclipseGiratoria from './EclipseGiratoria';

function CarroselFotos() {
  const [fotoVisivel, setFotoVisivel] = useState(1);

  // Função para mudar a foto manualmente
  const handleClick = (foto) => {
    setFotoVisivel(foto);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoVisivel(prevFoto => (prevFoto === 1 ? 2 : 1));
    }, 5000);
    
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className='fotos'>
      <div className='fundo'></div>
      <div className={`foto1 ${fotoVisivel === 1 ? 'visible' : ''}`}></div>
      <div className={`foto2 ${fotoVisivel === 2 ? 'visible' : ''}`}></div> 
      <div className='menu'>
        <span onClick={() => handleClick(1)} className={`item-menu ${fotoVisivel === 1 ? 'active' : ''}`}></span>
        <span onClick={() => handleClick(2)} className={`item-menu ${fotoVisivel === 2 ? 'active' : ''}`}></span>
      </div> 
      
      <div className='eclipse-container'>
        <EclipseGiratoria />
      </div> 
            
    </div>
  );
}

export default CarroselFotos;