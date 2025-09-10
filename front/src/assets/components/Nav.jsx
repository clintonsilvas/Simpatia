import ButonUnifenas from './ButtonUnifenas'
import './Nav.css'
import ButtonConhecerUnifenas from "../components/ButtonConhecerUnifenas";

function NavBar() {
  
  return (    
    <nav>      
      
      <a href="/">
        <img src="/logo-simpatia.svg" alt="Logo" className="logo" />
      </a>
      <a href="/">Modulos de Ia</a>
      <a href="/about">Sobre o Projeto</a>
      <ButonUnifenas />
      
    </nav>    
  )
}

export default NavBar