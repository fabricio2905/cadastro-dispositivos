const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let dispositivos = [];

// Listar
app.get("/dispositivos", (req, res) => {
  res.json(dispositivos);
});

// Adicionar
app.post("/dispositivos", (req, res) => {
  const novo = req.body;
  novo.id = Date.now();
  dispositivos.push(novo);
  res.status(201).json(novo);
});

// Atualizar
app.put("/dispositivos/:id", (req, res) => {
  const { id } = req.params;
  const index = dispositivos.findIndex((d) => d.id == id);
  if (index !== -1) {
    dispositivos[index] = { ...req.body, id: parseInt(id) };
    return res.json(dispositivos[index]);
  }
  res.status(404).send("Dispositivo não encontrado");
});

// Deletar
app.delete("/dispositivos/:id", (req, res) => {
  const { id } = req.params;
  dispositivos = dispositivos.filter((d) => d.id != id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
