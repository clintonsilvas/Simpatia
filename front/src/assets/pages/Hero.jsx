import NavBar from "../components/Nav";
import ButonConhecerModulos from "../components/ButonConhecerModulos";
import './Hero.css'
import ButonUnifenas from "../components/ButtonUnifenas";
import EclipeGiratória from "../components/EclipseGiratoria";
function Hero() {
  return (
    <container>
      <NavBar />
      <div>
        <h1>Uma nova forma de aprender com o poder da IA</h1>
        <spam> Ferramentas criadas para apoiar alunos e professores na sala de aula.</spam>
        <ButonConhecerModulos />
        <ButonUnifenas />
        <EclipeGiratória(#555888) />

      </div>  
    </container>    
  );
}

export default Hero