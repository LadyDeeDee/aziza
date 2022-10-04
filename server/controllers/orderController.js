const {Order} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController{
    async create(req, res){
        const{id, user_id, order_id} = req.body// название Order
        const order = await Order.create({})// создание order
        return res.json(id, user_id, order_id)
    }
    async getAll(req, res){
        const order = req.params
        await Order.getAll()
        return res.json(order)
    }
    async getOne(req, res){
        const {id} = req.params
        await Order.getOne()
        return res.json(id)
    }
    async delete(req, res){
        const order = req.params
        await Order.destroy()
        return resres.status(200).json("La commande est bien supprimée")  
    }
    async put(req, res){
        const order = req.params
        await Order.update()
        return res.json(order)  
    }
}
module.exports = new OrderController ()