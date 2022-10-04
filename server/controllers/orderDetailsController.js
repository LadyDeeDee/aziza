const {OrderDetails} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderDetailsController{
    async create(req, res){
        const{product_id, order_date, quantity, unitPrice, totalAmount } = req.body// название OrderDetails
        const orderDetails = await OrderDetails.create({})// создание orderDetails
        return res.status(201).json(orderDetails)
    }

    async getAll(req, res){
        const orderDetails = await OrderDetails.getAll()
        return res.status(200).json(orderDetails) 
    }

    async getOne(req, res){
        const {id} = req.params
        const orderDetails = await OrderDetails.getOne()
        return res.status(200).json(orderDetails)
    }

    async delete(req, res){
        const {id} = req.params
        const deletedOrderDetails = await OrderDetails.destroy()
        return res.status(200).json("Les détails de cette commande sont bien supprimés")
    }

    async put(req, res){
        const {id} = req.params
        const updatedOrderDetails = await OrderDetails.update()
        return res.status(200).json("Les détails de cette commande sont bien renovés")
    }
}

module.exports = new OrderDetailsController ()