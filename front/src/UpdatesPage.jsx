import HeroAlt from './assets/pages/HeroAlt.jsx';
import Faq from './assets/pages/Faq.jsx';
import Footer from './assets/components/Footer.jsx';
import UnifenasAlt from './assets/pages/UnifenasAlt.jsx';
import Atualizacoes from './assets/components/Atualizacoes.jsx';
function UpdatesPage() {

  const linhaDivisoria = {
    width: '100%',
    height: '0',
    margin: '64px 0',
    borderTop: '2px dashed var(--roxo-claro-03)',
  };

  return (
    <>
      <HeroAlt
      tagDeContexto="ATUALIZAÇÕES"
      tituloPrincipal={
      <>
        Conheça mais <br />
        <span className="texto_azul">sobre o Projeto</span>
      </>
      } 
      subtitulo={
      <>
        Ferramentas criadas para apoiar alunos e <br />
        professores na sala de aula.
      </>
      } 
    />
      <UnifenasAlt />
      <Atualizacoes />
      <div style={linhaDivisoria}></div>
      <Faq />
      <Footer/>     
    </>
  )
}

export default UpdatesPage
