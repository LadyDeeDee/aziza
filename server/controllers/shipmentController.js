const {Shipment} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShipmentController{
    
    async create(req, res){
        try{
            const{order_id, shipment_date} = req.body// название Shipment
            const shipment = await Shipment.create({})// создание shipment
            return res.status(201).json(shipment)
        }catch (e) {
            next(ApiError.badRequest(e.message))
            } 
        }

    async getAll(req, res){
        try{
        const shipments = await Shipment.getAll()
        return res.status(200).json(shipments)
       }catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async getOne(req, res){
        try{
        const {id} = req.params
        const shipment = await Shipment.getOne()
        return res.status(200).json(shipment)
    }catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async delete(req, res){
        try{
        const {id} = req.params
        const deletedShipment = await Shipment.destroy()
        return res.status(200).json("Cette livraison est bien supprimée")
    }catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

    async put(req, res){
        try{
        const {id} = req.params
        const updatedShipment = await Shipment.destroy()
        return res.status(200).json("Cette livraison est bien renovée")
    }catch (e) {
        next(ApiError.internal(e.message))
        } 
    }
}

module.exports = new ShipmentController ()