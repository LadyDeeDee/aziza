const sequelize = require('../db')
const {DataTypes} = require('sequelize')//класс DataTypes объектаы sequelize, с помощью которого будут описываться типы данных/поля

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    firstName: {type: DataTypes.STRING, allowNull: true,},
    lastName: {type: DataTypes.STRING, allowNull: true,},
    gender: {type: DataTypes.STRING, allowNull: true,},
    email: {type: DataTypes.STRING, allowNull: false,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'ADMIN'}    
},{
    indexes: [
        {unique: true, fields: ['email']}
    ]
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
})

const OrderDetails = sequelize.define("orderDetails", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    /*order_date: {type: DataTypes.DATE, allowNull: false,},
    quantity: {type: DataTypes.INTEGER, allowNull: false,},
    unit_price: {type: DataTypes.INTEGER, allowNull: false,},
    total_amount: {type: DataTypes.INTEGER, allowNull: false,},*/
})

const Product = sequelize.define("product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false,},
    price: {type: DataTypes.INTEGER, allowNull: false,},
    img: {type: DataTypes.STRING, allowNull: false,},
    description: {type: DataTypes.STRING, allowNull: false,},
})

const ProductDetails = sequelize.define("productDetails", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false,},
    description: {type: DataTypes.STRING},
})


const Storage = sequelize.define("storage", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER, allowNull: false,},
    color: {type: DataTypes.STRING, allowNull: false,},
    size: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
})

const Category = sequelize.define("category", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    name: {type: DataTypes.STRING, allowNull: false,},
})

/*const Shipment = sequelize.define("shipment", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,},
    shipment_date: {type: DataTypes.DATE, allowNull: false,},
})*/

User.hasOne(Order)
Order.belongsTo(User)

Order.hasMany(OrderDetails)
OrderDetails.belongsTo(Order)

OrderDetails.hasMany(Product)
Product.belongsTo(OrderDetails)

Category.hasMany(Product, { 
    foreignKey: {
        allowNull: true 
    }
})
Product.belongsTo(Category)

OrderDetails.hasMany(Product)
Product.belongsTo(OrderDetails)

Product.hasOne(Storage)
Storage.belongsTo(Product)

Product.hasMany(ProductDetails)
ProductDetails.belongsTo(Product)

/*Order.hasOne(Shipment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Shipment.belongsTo(Order)*/

module.exports = {
    User,
    Order,
    OrderDetails,
    Product,
    Category,
    /*Shipment,*/
    Storage
}




