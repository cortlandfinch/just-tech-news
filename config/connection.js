// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.DB_PASSWORD, {
    host: 'localhost',
    user: 'root',
    password: 'Stammer#2',
    port: '3306',
    database: 'just_tech_news_db',
    dialect: 'mysql'
});

module.exports = sequelize;