import HeroAlt from './assets/pages/HeroAlt.jsx';
import Faq from './assets/pages/Faq.jsx';
import Footer from './assets/components/Footer.jsx';
import UnifenasAlt from './assets/pages/UnifenasAlt.jsx';
import Atualizacoes from './assets/components/Atualizacoes.jsx';
import NavBar from "./assets/components/Nav.jsx";
import './UpdatesPage.css'; 

function UpdatesPage() {

 const linhaDivisoria = {
  width: '100%',
  height: '0',
  margin: '64px 0',
  borderTop: '2px dashed var(--roxo-claro-03)',
 };

 return (
  <div className="updates-page-container">
    <NavBar/>
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

      <div className="unifenas-bg-stack"> 
          <div className="bg-azul-ext"></div>
          <div className="bg-branco-ext"></div>
      </div>

   <UnifenasAlt /> 

   <Atualizacoes />
   <div style={linhaDivisoria}></div>
   <Faq />
   <Footer/>   
  </div>
 )
}

export default UpdatesPage
