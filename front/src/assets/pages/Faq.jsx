import React from 'react';
import Acordion from "../components/Acordion"; 
import './Faq.css'; 

function ServicosPage() {
  return (
    <div className="container-pagina">
      <div className="conteudo-central">
        <div className="tag-titulo">
          <p className="tag-texto">PERGUNTAS FREQUENTES</p>
        </div>
        <h1 className="titulo-pagina">Possui alguma dúvida?</h1>
        <p className="descricao-pagina">
          Aqui estão algumas das perguntas mais comuns que recebemos sobre nossos serviços. Se você não encontrar a resposta que procura, não hesite em nos contatar.
        </p>
      </div>

      <div className="lista-acordeoes">
        <Acordion pergunta="Qual o horário de atendimento?">
          Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.
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