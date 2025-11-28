import React from "react";
import { useParams } from "react-router-dom";
import FEATURES from "../../data/atualizacoesData";
import "./Features.css";
import Scrollspy from "../components/Scrollpsy";

function Feature() {
  const { id } = useParams();

  const featureAtual = FEATURES.find((item) => String(item.id) === String(id));

  const listaDeTopicos = Object.keys(featureAtual.topicos).map((chave) => ({
    id: chave,
    label: chave.charAt(0).toUpperCase() + chave.slice(1),
  }));

  const informacoesDosTopicos = Object.fromEntries(
    Object.entries(featureAtual.topicos).map(([chave, valor]) => {
      if (typeof valor === "string") {
        return [
          chave,
          {
            descricao: valor,
            fotos: [],
          },
        ];
      }

      return [
        chave,
        {
          descricao: valor?.descricao ?? "",
          fotos: valor?.fotos ?? [],
        },
      ];
    })
  );

  return (
    <div>
      <section className="apresentacao">
        <div className="titulo-data">
          <p className="data-topico">{featureAtual.data}</p>
          <h1 className="titulo-feature-detail">{featureAtual.titulo}</h1>
        </div>

        <div className="lateral">
          <p className="texto-feature-detail">{featureAtual.descricao}</p>

          <div className="integrantes">
            <h3 className="titulo-integrantes">
              Equipe que trabalhou no Projeto:
            </h3>
            <ul className="lista-integrantes">
              {featureAtual.equipe.map((membro, index) => (
                <li key={index} className="item-integrante">
                  {membro}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="infor">
        <Scrollspy
          topicos={listaDeTopicos}
          informacoes={informacoesDosTopicos}
        />
      </section>
    </div>
  );
}

export default Feature;
