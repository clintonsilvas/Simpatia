import NavBar from '../components/Nav';
import ButtonConhecerModulos from '../components/ButtonConhecerModulos';
import './Hero.css'
import ButtonUnifenas from '../components/ButtonUnifenas';
import EclipseGiratoria from '../components/EclipseGiratoria';

function Hero() {
  return (
    <container className="hero-section">
      <NavBar />
      <div className="hero-container">
        <h1>Uma nova forma de <span>aprender</span> com o poder da IA</h1>
        <p> Ferramentas criadas para apoiar alunos e professores na sala de aula.</p>
        <div className='botoes'>
          <ButtonConhecerModulos texto="Quero conhecer os módulos!" mostrarIcone={true} />
          <ButtonUnifenas />   
        </div>             
      </div>   
      <div className='fotos'>
        <div className='fundo'>        </div>
        <div className='foto1'> </div>
        <div className='foto2'> </div>        
        <EclipseGiratoria />
      </div>

    </container>    
  );
}

export default Hero