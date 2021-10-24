const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_project_udemy', 'root', 'whan5201314', {
    dialect: 'mysql',
    host: 'localhost'
});

/*const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_project_udemy',
    password: 'whan5201314'
});

module.exports = pool.promise();*/

module.exports = sequelize;
