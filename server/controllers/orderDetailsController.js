const {OrderDetails} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderDetailsController{
    
    async create(req, res){
        try{
        const{product_id, order_date, quantity, unitPrice, totalAmount } = req.body// название OrderDetails
        const orderDetails = await OrderDetails.create({product_id, order_date, quantity, unitPrice, totalAmount})// создание orderDetails
        return res.status(201).json(orderDetails)
    }catch(e) {
        next(ApiError.badRequest(e.message))
    }
}

    async getAll(req, res){
        try{
        const orderDetails = await OrderDetails.findAll()
        return res.status(200).json(orderDetails) 
    }  catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async getOne(req, res){
        try{
        const {id} = req.params
        const orderDetails = await OrderDetails.findOne({id})
        return res.status(200).json(orderDetails)
    }catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async delete(req, res){
        try{
        const {id} = req.params
        const deletedOrderDetails = await OrderDetails.destroy({id})
        return res.status(200).json("Les détails de cette commande sont bien supprimés")
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

    async put(req, res){
        try{
        const {id} = req.params
        const updatedOrderDetails = await OrderDetails.update({id})
        return res.status(200).json("Les détails de cette commande sont bien renovés")
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }
}

module.exports = new OrderDetailsController ()