// 1 - Importar o express

const express = require('express');
const path = require('path');

// 2 - Criar o servidor

const servidor = express();

// Define a pasta public como sendo a pasta arquivos estáticos
servidor.use(express.static('public'));

// 3 - Definir de uma rota neste servidor
// endereço, método, função callback (a ação que o servidor vai realizar quando requerimento do usuario chegar)

servidor.get('/', (req, res)=>{
    return res.sendFile(__dirname + "/views/index.html");
});

servidor.get('/carrinho',(req, res)=>{
    return res.sendFile(__dirname + "/views/carrinho.html");
});


// 4 - Por o servidor no modo "aguardando requisição"

servidor.listen(3000);