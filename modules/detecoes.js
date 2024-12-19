const DB = require('./database');
const sequelize = require('sequelize');

const detecoes = DB.define('detecoes', {

    ID_DETECOES: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },

},
{
    timestamps: false,
    freezeTableName: true,

}
);

detecoes.sync({force:false});
module.exports = detecoes;