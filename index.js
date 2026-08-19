// Atividade Cap. 3 — Servidor HTTP com a biblioteca padrão (node:http).
//
// Implemente aqui um servidor que atenda às 10 rotas descritas no README.md.
//
// Regras essenciais:
//   - Use o módulo nativo `node:http` (NÃO use Express — o objetivo é sentir "na mão").
//   - O servidor deve ouvir em `process.env.PORT || 3000`.
//   - Resolva UMA rota por commit, seguindo o padrão de mensagens em COMMITS.md.
//   - A cada push, o autograder roda sozinho e mostra o resultado na aba "Actions".
//
// Ponto de partida (descomente e desenvolva):

import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const urlParts = req.url.split('/');

    if (req.method === "GET" && req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('<h1>Sobre</h1>');
        return;
    }
    else if (req.method === "GET" && req.url.split('/')[1] === "saudacao") {
        if (urlParts[2]) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`Olá, ${urlParts[2]}!`);
            return;
        }
    } else {
        res.writeHead(404);
        res.end("Recurso não encontrado.")
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Olá, Mundo!');
});

server.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));
