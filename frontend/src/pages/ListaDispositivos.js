import React from "react";
import { useNavigate } from "react-router-dom";
import "./ListaDispositivos.css";

function ListaDispositivos({ dispositivos, excluirDispositivo }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Cadastro de Dispositivos Eletrônicos</h1>
      <button className="botao-add" onClick={() => navigate("/cadastro")}>
        Adicionar Novo Dispositivo
      </button>

      {dispositivos.length === 0 ? (
        <p className="nenhum">Nenhum dispositivo cadastrado.</p>
      ) : (
        <div className="lista-dispositivos">
          {dispositivos.map((d) => (
            <div key={d.id} className="card">
              <img src={d.imagem} alt={d.descricao} className="imagem" />
              <h3>{d.descricao}</h3>
              <p className="preco">R$ {parseFloat(d.preco).toFixed(2).replace('.', ',')}</p>
              <p><strong>Fabricante:</strong> {d.fabricante}</p>
              <p><strong>N° Série:</strong> {d.numeroSerie}</p>
              <p>{d.especificacao}</p>
              <a href={d.linkCompra} target="_blank" rel="noopener noreferrer">Link para compra</a>
              <div className="botoes">
                <button onClick={() => navigate(`/editar/${d.id}`)}>✏️</button>
                <button onClick={() => excluirDispositivo(d.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaDispositivos;
