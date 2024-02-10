function Navegacao({ alterarPaginaSelecionada }) {
  return (
    <div className="navegacao">
      <button
        className="navegacao"
        onClick={() => alterarPaginaSelecionada(0)}>
        Pratos Principais
      </button>
      <button
        className="navegacao"
        onClick={() => alterarPaginaSelecionada(1)}>
        Sobremesas
      </button>
      <button
        className="navegacao"
        onClick={() => alterarPaginaSelecionada(2)}>
        Bebidas
      </button>
    </div>
  );
}

export default Navegacao;
