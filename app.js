const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Para lidar com dados do formulário

// Rota para a página inicial (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para a página de serviços (servicos.html)
app.get('/servicos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'servicos.html'));
});

// Rota para a página sobre (sobre.html)
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sobre.html'));
});

// Rota para processar o formulário de contato
app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;
  res.send(`
    <h1>Contato Recebido</h1>
    <p>Nome: ${nome}</p>
    <p>Email: ${email}</p>
    <p>Mensagem: ${mensagem}</p>
    <a href="/">Voltar à página inicial</a>
  `);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
