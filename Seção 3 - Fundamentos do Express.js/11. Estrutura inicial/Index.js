const { error } = require("console");
const express = require ("express"); //importando o Express
const app = express(); //Iniciando o Express

app.get("/",function(req,res){
    res.send("Bem vindo ao guia do Programador")
});

app.get("/blog",function(req,res){
    res.send("Bem vindo ao meu blog")
});

app.get("/canal/youtube",function(req,res){
    res.send("Bem vindo ao meu canal")
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso!");
    }
})