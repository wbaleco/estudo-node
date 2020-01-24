const Sequelize = require('sequelize');
const sequelize = new Sequelize('gerenciadorfinanceiro', 'wbaleco', 'B@rB@r@1997', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}