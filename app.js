const express = require('express');
const app = express();

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Configuração body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas

app.get('/listar-pagamento', (req, res) => {
    res.render('listar-pagamento');
});

app.get('/add-pagamento', (req, res) => {
    res.render('add-pagamento');
});

app.get('/contato', (req, res) => {
    res.render("contato");
});

app.post('/cad-pagamento', (req, res) => {
    res.send("Nome: " + req.body.nome + "Valor: " + req.body.valor);
});

/* const sequelize = new Sequelize('gerenciadorfinanceiro', 'wbaleco', 'B@rB@r@1997', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(err) {
    console.log('Conexão realizada com sucesso.');

}).catch(function(error) {
    console.error('Erro ao tentar conectar com banco:', error);
});
 */

app.listen(3000, () => {
    console.log(`Server started on port`);
});