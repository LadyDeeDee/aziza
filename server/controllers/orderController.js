const {Order} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController{
    
    async create(req, res){
        try{
        const{user_id, order_details_id} = req.body// название Order
        const order = await Order.create({})// создание order
        return res.status(201).json(order)
    }catch (e) {
        next(ApiError.badRequest(e.message))
        } 
    }

    async getAll(req, res){
        try{
        const orders = await Order.getAll()
        return res.status(200).json(orders)
    }catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async getOne(req, res){
        try{
        const {id} = req.params
        const order = await Order.getOne()
        return res.status(200).json(order)
    } catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }
    
    async delete(req, res){
        try{
        const {id} = req.params
        const deletedOrder = await Order.destroy()
        return res.status(200).json("La commande est bien supprimée")  
    } catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

    async put(req, res){
        try{
        const {id} = req.params
        const updatedOrder = await Order.update()
        return res.status(200).json("La commande est bien renovée")  
    } catch (e) {
        next(ApiError.internal(e.message))
        } 
    }
}
module.exports = new OrderController ()