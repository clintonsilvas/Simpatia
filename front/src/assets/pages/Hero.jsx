import NavBar from '../components/Nav';
import ButtonConhecerModulos from '../components/ButtonConhecerModulos';
import './Hero.css'
import ButtonUnifenas from '../components/ButtonUnifenas';
import EclipseGiratoria from '../components/EclipseGiratoria';

function Hero() {
  return (
    <container>
      <NavBar />
      <div>
        <h1>Uma nova forma de aprender com o poder da IA</h1>
        <spam> Ferramentas criadas para apoiar alunos e professores na sala de aula.</spam>
        <ButtonConhecerModulos />
        <ButtonUnifenas />
        <EclipseGiratoria />
      </div>  
    </container>    
  );
}

export default Hero