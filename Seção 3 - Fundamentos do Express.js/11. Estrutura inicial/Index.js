const { error } = require("console");
const express = require ("express"); //importando o Express
const app = express(); //Iniciando o Express

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso!");
    }
})