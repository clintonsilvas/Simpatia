import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import CardModulos from "../components/CardModulo";
import Unifenas from "../pages/Unifenas";

function Ferramentas({ todosModulos }) {
  const { tipo } = useParams();
  const tipoModulo = tipo || "professor";

  const listaModulos = todosModulos[tipoModulo] || [];
  const tituloExibicao = tipoModulo === "professor" ? "Professores" : "Alunos";

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordenacao, setOrdenacao] = useState("asc");
  const MODULOS_POR_PAGINA = 9;

  const modulosOrdenados = useMemo(() => {
    return [...listaModulos].sort((a, b) => {
      if (!a || !a.titulo) return 1;
      if (!b || !b.titulo) return -1;

      const nomeA = a.titulo.toUpperCase();
      const nomeB = b.titulo.toUpperCase();

      if (ordenacao === "asc") {
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
      } else {
        if (nomeA > nomeB) return -1;
        if (nomeA < nomeB) return 1;
        return 0;
      }
    });
  }, [listaModulos, ordenacao]);

  const totalPaginas = Math.ceil(modulosOrdenados.length / MODULOS_POR_PAGINA);
  const indiceInicial = (paginaAtual - 1) * MODULOS_POR_PAGINA;
  const indiceFinal = indiceInicial + MODULOS_POR_PAGINA;
  const modulosExibidos = modulosOrdenados.slice(indiceInicial, indiceFinal);

  const alternarOrdenacao = () => {
    setOrdenacao((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <main className="ferramentas-page-container">
      <h1>Ferramentas de IA para {tituloExibicao}</h1>
      <p>
        Explore os módulos disponíveis e utilize as ferramentas que tornam seu
        ensino mais dinâmico e eficiente.
      </p>

      <div className="modulos-container">
        <div className="cabecalho">
          <p className="contagem">{listaModulos.length} módulos disponíveis</p>
          <button
            onClick={alternarOrdenacao}
            className="btn-ordenar"
            title={`Ordenar por nome ${
              ordenacao === "asc" ? "(Z-A)" : "(A-Z)"
            }`}
          >
            Ordenar por nome ({ordenacao === "asc" ? "A-Z" : "Z-A"})
          </button>
        </div>

        <div className="cards-grid">
          {modulosExibidos.length > 0 ? (
            modulosExibidos.map((modulo, index) => (
              <CardModulos
                key={modulo.id || index}
                nome={modulo.titulo} // Passa 'titulo' como 'nome' para o CardModulos
                descricao={modulo.descricao}
              />
            ))
          ) : (
            <p>Nenhum módulo encontrado para {tituloExibicao}.</p>
          )}
        </div>

        {totalPaginas > 1 && (
          <div className="paginacao-controls">
            <span>
              Página {paginaAtual} de {totalPaginas}
            </span>
            {/* ... (Botões de Paginação) ... */}
          </div>
        )}
      </div>
      <Unifenas />
    </main>
  );
}

export default Ferramentas;
