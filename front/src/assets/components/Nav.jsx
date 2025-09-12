import ButtonUnifenas from '../components/ButtonUnifenas';
import './Nav.css'

function NavBar() {
  
  return (    
    <nav>     
      
      <a href="/">
        <img src="/logo-simpatia.svg" alt="Logo" className="logo" />
      </a>
      <a href="/">Modulos de Ia</a>
      <a href="/about">Sobre o Projeto</a>
      <ButtonUnifenas />
      
    </nav>    
  )
}

export default NavBar