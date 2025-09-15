import NavBar from '../components/Nav';
import ButtonConhecerModulos from '../components/ButtonConhecerModulos';
import './Hero.css'
import ButtonUnifenas from '../components/ButtonUnifenas';
import CarroselFotos from '../components/CarroselFotos';
import React, { useState, useEffect } from 'react';

function Hero() {

  const textos = ['aprender', 'ensinar'];
  const [currentIndex, setCurrentIndex] = useState(1);

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textos.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="container">      
      <NavBar />
      <div className="content">
        <div className="hero-container">
          <h1>Uma nova forma de <span>{textos[currentIndex]}</span> com o poder da IA</h1>
          <p> Ferramentas criadas para apoiar alunos e professores na sala de aula.</p>
          <div className='botoes'>
            <ButtonConhecerModulos texto="Quero conhecer os módulos!" mostrarIcone={true} />
            <ButtonUnifenas />   
          </div>
        </div> 
        <CarroselFotos currentIndex={currentIndex} handleNext={handleNext} />
      </div> 
    </section>    
  );
}

export default Hero