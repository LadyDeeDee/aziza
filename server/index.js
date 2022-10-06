require('dotenv').config()

const express = require ('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require ('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')


const app = express()

app.use(cors())// 
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок - всегда идёт последней (последний Middlware), т.к. он замыкающий, поэтому нигде не вызвали ф-цию next, и на нём работа прекращается и на клиента возвращаем ответ об ошибке 
app.use(errorHandler)

const start = async () => { //функция для подключения к базе данных; она асихронна, так как все операции с БД - асинхронны
 try{ //функцию оборачиваем в блок try-catch для отлова потенциально возможных ошибок
   await sequelize.authenticate()//функция, с помощью к. б. устанавливаться подключение к БД
   await sequelize.sync({alter: false, force: true})//функция, к. б. сверять состояние БД со описанной нами схемой
    app.listen(3001, () => console.log(`Server started on port 3001`))
} catch (e) {
    console.log(e)
}
}
start()//вызов функции для подключения к базе данных
