const express = require('express');
const app = express();
const Pagamento = require('./models/Pagamento');

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Moment = require('moment');

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return Moment(date).format('DD/MM/YYYY');
        }

    }
}));
app.set('view engine', 'handlebars');

//Configuração body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas

app.get('/listar-pagamento', (req, res) => {
    Pagamento.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function(pagamentos) {
        res.render('listar-pagamento', { pagamentos: pagamentos });
    });


});

app.get('/add-pagamento', (req, res) => {
    res.render('add-pagamento');
});

app.get('/contato', (req, res) => {
    res.render("contato");
});

app.post('/cad-pagamento', (req, res) => {

    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(() => {
        res.redirect('/listar-pagamento');
        //res.send("Pagamento cadastrado com sucesso");
    }).catch((err) => {
        res.send("Erro ao tentar cadastrar pagamento" + err);
    });
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>");
});

app.get('/del-pagamento/:id', (req, res) => {
    Pagamento.destroy({
        where: { 'id': req.params.id }
    }).then(() => {
        res.redirect('/listar-pagamento');
        //res.send("Pagamento excluido com sucesso");
    }).catch((err) => {
        res.send("Erro ao tentar excluir pagamento" + err);
    });
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