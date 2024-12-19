const sequelize = require('sequelize'); 

const guardarDB = new sequelize('SE_TR','postgres','postgres', {
    host: 'localhost'   ,
    dialect: 'postgres',
    port: 5432,

});

guardarDB.sync({force:false});
module.exports = guardarDB;