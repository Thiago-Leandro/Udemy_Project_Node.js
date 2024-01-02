const express = require("express");
const app = express();

//No express estou ultilizando o View Engine
app.set('view engine', 'ejs');

//Rotas do site
app.get("/", (req, res) => {
    res.render("princial/perfil"); //renderizando na tela html
});

//Expondo a porta 8080
app.listen(8080,()=>{console.log ("App rodando!")});