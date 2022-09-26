const sequelize = require('../db')
const {DataTypes} = require('sequelize')//класс DataTypes объектаы sequelize, с помощью которого будут описываться типы данных/поля

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, allowNull: false,},
    surname: {type: DataTypes.STRING, allowNull: false,},
    dateOfBirth: {type: DataTypes.DATE, allowNull: false,},
    phone: {type: DataTypes.INTEGER, allowNull: false,},
    email: {type: DataTypes.STRING, unique: true, allowNull: false,},
    password: {type: DataTypes.STRING, allowNull: false,},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
})

const OrderDetails = sequelize.define("orderDetails", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    order_date: {type: DataTypes.DATE, allowNull: false,},
    quantity: {type: DataTypes.INTEGER, allowNull: false,},
    unit_price: {type: DataTypes.INTEGER, allowNull: false,},
    total_amount: {type: DataTypes.INTEGER, allowNull: false,},
})

const Product = sequelize.define("product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,},
    title: {type: DataTypes.STRING, allowNull: false,},
    description: {type: DataTypes.STRING},
    unit_price: {type: DataTypes.INTEGER, allowNull: false,},
    img: {type: DataTypes.BLOB},
})

const Storage = sequelize.define("storage", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,},
    quantity: {type: DataTypes.INTEGER, allowNull: false,},
    color: {type: DataTypes.STRING, allowNull: false,},
    size: {type: DataTypes.STRING},
    img: {type: DataTypes.BLOB},
})

const Category = sequelize.define("category", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,},
    category_name: {type: DataTypes.STRING, allowNull: false,},
})

const Shipment = sequelize.define("shipment", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,},
    shipment_date: {type: DataTypes.DATE, allowNull: false,},
})

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(OrderDetails)
OrderDetails.belongsTo(Order)

OrderDetails.hasMany(Product)
Product.belongsTo(OrderDetails)

Category.hasMany(Product)
Product.belongsTo(Category)

Product.hasOne(Storage)
Storage.belongsTo(Product)

Order.hasOne(Shipment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Shipment.belongsTo(Order)

module.exports = {
    User,
    Order,
    OrderDetails,
    Product,
    Category,
    Shipment,
    Storage
}




