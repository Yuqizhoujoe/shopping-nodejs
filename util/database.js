const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('DATABASE_NAME', 'root', 'PASSWORD', {
    dialect: 'mysql',
    host: 'localhost'
});

/*const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'DATABASE_NAME',
    password: 'PASSWORD'
});

module.exports = pool.promise();*/

module.exports = sequelize;
