// 1 - Importar o express
const express = require('express');
const path = require('path');

// 2 - Criar o servidor
const servidor = express();

// Define a pasta public como sendo a pasta arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))

// 3 - Definir de uma rota neste servidor
// endereço, método, função callback (a ação que o servidor vai realizar quando requerimento do usuario chegar)
servidor.get('/', (req, res)=>{
    return res.sendFile(__dirname + "/views/index.html");
});

servidor.get('/carrinho.html',(req, res)=>{
    return res.sendFile(__dirname + "/views/carrinho.html");
});

servidor.get('/produtos.html',(req, res)=>{
    return res.sendFile(__dirname + "/views/produtos.html");
});
servidor.get('/quemSomos.html',(req, res)=>{
    return res.sendFile(__dirname + "/views/quemSomos.html");
});
servidor.get('/entrar.html',(req, res)=>{
    return res.sendFile(__dirname + "/views/entrar.html");
});
servidor.get('/policy.html',(req, res)=>{
    return res.sendFile(__dirname + "/views/policy.html");
});

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);