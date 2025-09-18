import { useState } from 'react';
import CardModulo from '../components/CardModulo';
import './Descubra.css';

function Descubra() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Aluno');

  const modulosAlunos = [
    { icon: 'icone-aluno-1.svg', nome: 'Módulo Aluno 1', descricao: 'Descrição do módulo para alunos.' },
    { icon: 'icone-aluno-2.svg', nome: 'Módulo Aluno 2', descricao: 'Outra descrição para o aluno.' }
  ];

  const modulosProfessores = [
    { icon: 'icone-professor-1.svg', nome: 'Módulo Professor 1', descricao: 'Descrição do módulo para professores.' },
    { icon: 'icone-professor-2.svg', nome: 'Módulo Professor 2', descricao: 'Outra descrição para o professor.' }
  ];

  const modulosExibidos = categoriaSelecionada === 'Aluno' ? modulosAlunos : modulosProfessores;

  return (
    <div className="container-pagina">
      <div className="conteudo-textual">
        <h2>DESCUBRA</h2>
        <h3>Conheça todos os módulos</h3>
        <p>Explore as ferramentas criadas para facilitar o dia a dia de professores e tornar o aprendizado dos alunos mais envolvente.</p>
      </div>

      <div className="mudavel-lateral">
        <div className="botoes-flex">
          <button
            className={categoriaSelecionada === 'Aluno' ? 'ativo' : ''}
            onClick={() => setCategoriaSelecionada('Aluno')}
          >
            Aluno
          </button>
          <button
            className={categoriaSelecionada === 'Professor' ? 'ativo' : ''}
            onClick={() => setCategoriaSelecionada('Professor')}
          >
            Professores
          </button>
        </div>

        <div className="container-card">
          {modulosExibidos.map((modulo, index) => (
            <CardModulo
              key={index}
              icon={modulo.icon}
              nome={modulo.nome}
              descricao={modulo.descricao}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Descubra;