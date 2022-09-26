const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    process.env.DB_NAME, //titre de BDD
    process.env.DB_USER,//user name
    process.env.DB_PASSWORD,//mot de pass
    {
        dialect: 'mysql',//поля передаваемого здесь объекта
        host: process.env.DB_HOST,//поля передаваемого здесь объекта
        port: process.env.DB_PORT//поля передаваемого здесь объекта
    }
        
)