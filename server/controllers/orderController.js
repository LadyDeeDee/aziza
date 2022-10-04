const {Order} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController{
    async create(req, res){
        const{user_id, order_details_id} = req.body// название Order
        const order = await Order.create({})// создание order
        return res.status(201).json(order)
    }
    async getAll(req, res){
        const orders = await Order.getAll()
        return res.status(200).json(orders)
    }
    async getOne(req, res){
        const {id} = req.params
        const order = await Order.getOne()
        return res.status(200).json(order)
    }
    async delete(req, res){
        const {id} = req.params
        const deletedOrder = await Order.destroy()
        return res.status(200).json("La commande est bien supprimée")  
    }
    async put(req, res){
        const {id} = req.params
        const updatedOrder = await Order.update()
        return res.status(200).json("La commande est bien renovée")  
    }
}
module.exports = new OrderController ()