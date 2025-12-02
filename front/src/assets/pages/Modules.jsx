import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import CardModulos from "../components/CardModulo";
import Unifenas from "../components/Unifenas";
import HeroAlt from "../components/HeroAlt";
import "./Modules.css";

function Ferramentas({ todosModulos }) {
  const { tipo } = useParams();
  const tipoModulo = tipo || "professor";

  const listaModulos = todosModulos[tipoModulo] || [];
  const tituloExibicao = tipoModulo === "professor" ? "Professores" : "Alunos";
  const verboExibicao = tipoModulo === "professor" ? "ensino" : "aprendizado";

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
      <HeroAlt
        tagDeContexto="MÓDULOS DE IA"
        tituloPrincipal={
          <>
            Ferramentas de IA para <br />
            <span className="texto_azul">{tituloExibicao}</span>
          </>
        }
        subtitulo={
          <>
            Explore os módulos disponíveis e utilize as ferramentas que tornam
            seu {verboExibicao} mais dinâmico e eficiente.
          </>
        }
      />

      <div className="modulos-container">
        <div className="cabecalho">
          <p>{listaModulos.length} módulos</p>
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
                nome={modulo.titulo}
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
            <button
              onClick={() => setPaginaAtual((prev) => Math.max(1, prev - 1))}
              disabled={paginaAtual === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
              (numero) => (
                <button
                  key={numero}
                  onClick={() => setPaginaAtual(numero)}
                  className={numero === paginaAtual ? "active" : ""}
                >
                  {numero}
                </button>
              )
            )}
            <button
              onClick={() =>
                setPaginaAtual((prev) => Math.min(totalPaginas, prev + 1))
              }
              disabled={paginaAtual === totalPaginas}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
      <Unifenas />
    </main>
  );
}

export default Ferramentas;
