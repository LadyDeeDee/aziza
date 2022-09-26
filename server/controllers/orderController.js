const {Order} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController{
    async create(req, res){
        const{id, user_id, order_id} = req.body// название Order
        const order = await Order.create({})// создание order
        return res.json(id, user_id, order_id)
    }
    async getAll(req, res){
        
    }
    async getOne(req, res){
        
    }
    async delete(req, res){
        
    }
    async put(req, res){
        
    }
}
module.exports = new OrderController ()