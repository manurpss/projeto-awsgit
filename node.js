// Importamos o módulo nativo HTTP do Node.js
const http = require('http');

// Configuramos o servidor
const server = http.createServer((req, res) => {
    // Definimos que a resposta será em HTML e usará acentuação (UTF-8)
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Lógica das 3 Rotas Diferentes
    if (req.url === '/' || req.url === '/home') {
        // ROTA 1: Home
        res.statusCode = 200;
        res.end('<h1>Bem-vindo à Home!</h1><p>Esta é a página principal da aplicação.</p><a href="/sobre">Ir para Sobre</a>');
        
    } else if (req.url === '/sobre') {
        // ROTA 2: Sobre
        res.statusCode = 200;
        res.end('<h1>Sobre Nós</h1><p>Aplicação Node.js criada para o trabalho de Git.</p><a href="/contato">Ir para Contato</a>');
        
    } else if (req.url === '/contato') {
        // ROTA 3: Contato
        res.statusCode = 200;
        res.end('<h1>Contato</h1><p>Mande um e-mail para: dev@exemplo.com</p><a href="/">Voltar para Home</a>');
        
    } else {
        // ROTA DE ERRO (Caso o usuário digite algo que não existe)
        res.statusCode = 404;
        res.end('<h1>404 - Página Não Encontrada</h1><p>Ops! Esse caminho não existe.</p>');
    }
});

// Definimos em qual porta o servidor vai rodar (ex: 3000)
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});