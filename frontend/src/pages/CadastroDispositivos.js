import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CadastroDispositivo.css";

function CadastroDispositivo({ dispositivos, adicionarDispositivo, atualizarDispositivo }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    id: "",
    descricao: "",
    preco: "",
    especificacao: "",
    fabricante: "",
    numeroSerie: "",
    imagem: "",
    linkCompra: "",
  });

  useEffect(() => {
    if (id) {
      const dispositivoExistente = dispositivos.find((d) => d.id === id);
      if (dispositivoExistente) {
        setForm(dispositivoExistente);
      }
    }
  }, [id, dispositivos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.descricao || !form.preco) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    if (id) {
      atualizarDispositivo(form);
    } else {
      adicionarDispositivo({ ...form, id: crypto.randomUUID() });
    }

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>{id ? "Editar Dispositivo" : "Cadastrar Novo Dispositivo"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
        <input name="preco" placeholder="Preço" value={form.preco} onChange={handleChange} required />
        <input name="fabricante" placeholder="Fabricante" value={form.fabricante} onChange={handleChange} required />
        <input name="numeroSerie" placeholder="Número de Série" value={form.numeroSerie} onChange={handleChange} />
        <input name="especificacao" placeholder="Especificações" value={form.especificacao} onChange={handleChange} />
        <input name="imagem" placeholder="Link da Imagem" value={form.imagem} onChange={handleChange} />
        <input name="linkCompra" placeholder="Link para compra" value={form.linkCompra} onChange={handleChange} />
        <button type="submit">{id ? "Salvar Alterações" : "Cadastrar"}</button>
      </form>
    </div>
  );
}

export default CadastroDispositivo;
