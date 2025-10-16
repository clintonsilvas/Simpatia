import NavBar from "../components/Nav";
import "./Hero.css";

function HeroAlt({ tagDeContexto, tituloPrincipal, subtitulo }) {
 return (
  <section className="fundo-hero">
   {/* <NavBar /> */}
   <div className="secao-hero-alt">
    <div className="hero-container-alt">
     
     {tagDeContexto && (
      <div className="tag-contexto-hero">
       {tagDeContexto}
      </div>
     )}

     <h1>
      {tituloPrincipal}
     </h1>
     <p>
      {subtitulo}
     </p>
    </div>
   </div>
  </section>
 );
}

export default HeroAlt;