const {OrderDetails} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderDetailsController{
    
    async create(req, res){
        try{
        const{product_id, order_date, quantity, unitPrice, totalAmount } = req.body// название OrderDetails
        const orderDetails = await OrderDetails.create({})// создание orderDetails
        return res.status(201).json(orderDetails)
    }catch(e) {
        next(ApiError.badRequest(e.message))
    }
}

    async getAll(req, res){
        try{
        const orderDetails = await OrderDetails.getAll()
        return res.status(200).json(orderDetails) 
    }  catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async getOne(req, res){
        try{
        const {id} = req.params
        const orderDetails = await OrderDetails.getOne()
        return res.status(200).json(orderDetails)
    }catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async delete(req, res){
        try{
        const {id} = req.params
        const deletedOrderDetails = await OrderDetails.destroy()
        return res.status(200).json("Les détails de cette commande sont bien supprimés")
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

    async put(req, res){
        try{
        const {id} = req.params
        const updatedOrderDetails = await OrderDetails.update()
        return res.status(200).json("Les détails de cette commande sont bien renovés")
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }
}

module.exports = new OrderDetailsController ()