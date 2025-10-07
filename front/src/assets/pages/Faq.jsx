import Acordion from "../components/Acordion"; 
import './Faq.css'; 

function ServicosPage() {
  return (
    <div className="container-pagina">      
      <div className="conteudo-textual">
        <h2>PERGUNTAS FREQUENTES</h2>
        <h3>Possui alguma dúvida?</h3>
        <p>Aqui estão algumas das perguntas mais comuns que recebemos sobre nossos serviços. Se você não encontrar a resposta que procura, não hesite em nos contatar.</p>
      </div>  

      <div className="lista-acordeoes">
        <Acordion pergunta="O que é o SIMPATIA?">
          É um sistema de mídias pedagógicas com ferramentas de Inteligência Artificial para apoiar professores e alunos em atividades educacionais.
        </Acordion>
        <Acordion pergunta="Quais serviços vocês oferecem?">
          Oferecemos uma variedade de serviços, incluindo desenvolvimento de websites, aplicativos móveis e consultoria em tecnologia.
        </Acordion>
        <Acordion pergunta="Posso solicitar um orçamento?">
          Sim! Você pode entrar em contato conosco através do nosso site para solicitar um orçamento personalizado para o seu projeto.
        </Acordion>
      </div>
    </div>
  );
}

export default ServicosPage;