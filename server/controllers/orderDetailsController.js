const {OrderDetails} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderDetailsController{
    async create(req, res){
        const{id, product_id, order_date, quantity, unitPrice, totalAmount } = req.body// название OrderDetails
        const orderDetails = await OrderrDetails.create({})// создание orderDetails
        return res.json(id, product_id, order_date, quantity, unitPrice, totalAmount)
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

module.exports = new OrderDetailsController ()