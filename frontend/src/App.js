import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListaDispositivos from "./pages/ListaDispositivos";
import CadastroDispositivo from "./pages/CadastroDispositivos";

function App() {
  const [dispositivos, setDispositivos] = useState([]);

  const adicionarDispositivo = (dispositivo) => {
    setDispositivos((prev) => [...prev, dispositivo]);
  };

  const atualizarDispositivo = (dispositivoAtualizado) => {
    setDispositivos((prev) =>
      prev.map((d) => (d.id === dispositivoAtualizado.id ? dispositivoAtualizado : d))
    );
  };

  const excluirDispositivo = (id) => {
    setDispositivos((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ListaDispositivos
            dispositivos={dispositivos}
            excluirDispositivo={excluirDispositivo}
          />
        }
      />
      <Route
        path="/cadastro"
        element={
          <CadastroDispositivo
            dispositivos={dispositivos}
            adicionarDispositivo={adicionarDispositivo}
            atualizarDispositivo={atualizarDispositivo}
          />
        }
      />
      <Route
        path="/editar/:id"
        element={
          <CadastroDispositivo
            dispositivos={dispositivos}
            adicionarDispositivo={adicionarDispositivo}
            atualizarDispositivo={atualizarDispositivo}
          />
        }
      />
    </Routes>
  );
}

export default App;
