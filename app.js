const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/home.html");
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/src/sobre.html");
});

app.get('/contato', (req, res) => {
    res.sendFile(__dirname + "/src/contato.html");
});


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'wbaleco',
    password: 'B@rB@r@1997',
    database: 'gerenciadorfinanceiro'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

//SELECT
connection.query('SELECT * FROM users', function(err, rows, fields) {
    if (!err) {
        console.log("Resultado :", rows);
    } else {
        console.log("Erro ao pesquisar");

    }

});
//INSERT    
connection.query("INSERT INTO users(nome, email) VALUES ('Walter', 'wbaleco@gmail.com')", function(err, result) {


    if (!err) {
        console.log("Cadastro realizado com sucesso");
    } else {
        console.log("Erro ao tentar cadastrar");
    }
});

connection.query("UPDATE users set nome = 'Baleco' where id = 1", function(err, result) {
    if (!err) {
        console.log("Alteração realizada com sucesso");
    } else {
        console.log("Erro ao tentar alterar");
    }
});

connection.query("DELETE FROM users where id = 2", (err, result) => {
    if (!err) {
        console.log("Usuário excluido com sucesso");
    } else {
        console.log("Erro ao tentar excluir usuário");
    }
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});