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

connection.query('SELECT * FROM pagamentos', function(err, rows, fields) {
    if (!err) {
        console.log("Resultado :", rows);
    } else {
        console.log("Erro ao pesquisar");

    }

});

app.listen(3000, () => {
    console.log(`Server started on port`);
});