import './CardModulo.css';

function CardModulo({ icon, nome, descricao }) {
  return (
    <div className="card-modulo">
      <img src={icon} alt={`Ícone do módulo ${nome}`} />
      <h4>{nome}</h4>
      <p>{descricao}</p>
    </div>
  );
}

export default CardModulo;