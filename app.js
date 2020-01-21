const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/home.html");
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/src/sobre.html");
});

app.get('/contato', (req, res) => {
    res.sendFile(__dirname + "/src/contato.html");
});

/* const mysql = require('mysql');
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
}); */

app.listen(3000, () => {
    console.log(`Server started on port`);
});