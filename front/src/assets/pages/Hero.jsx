import NavBar from "../components/Nav";
import ButonConhecerModulos from "../components/ButonConhecerModulos";
import './Hero.css'
function Hero() {
  return (
    <container>
      <NavBar />
      <div>
        <h1>Uma nova forma de aprender com o poder da IA</h1>
        <spam> Ferramentas criadas para apoiar alunos e professores na sala de aula.</spam>
        <ButonConhecerModulos />

      </div>

      <div className="hero-subtitle">
        <h2 className="subtitle-text">Seu assistente virtual de IA para auxiliar no aprendizado e na pesquisa acadêmica.</h2>
      </div>
      

    </container>
    
  );

}

export default Hero