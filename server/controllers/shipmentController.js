const {Shipment} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShipmentController{
    
    async create(req, res){
        try{
            const{order_id, shipment_date} = req.body// название Shipment
            const shipment = await Shipment.create({})// создание shipment
            return res.status(201).json(shipment)
        }catch (e) {
            res.status(500).json(e)
            } 
        }

    async getAll(req, res){
        try{
        const shipments = await Shipment.getAll()
        return res.status(200).json(shipments)
       }catch (e) {
        res.status(500).json(e)
        } 
    }

    async getOne(req, res){
        try{
        const {id} = req.params
        const shipment = await Shipment.getOne()
        return res.status(200).json(shipment)
    }catch (e) {
        res.status(500).json(e)
        } 
    }

    async delete(req, res){
        try{
        const {id} = req.params
        const deletedShipment = await Shipment.destroy()
        return res.status(200).json("Cette livraison est bien supprimée")
    }catch (e) {
        res.status(500).json(e)
        } 
    }

    async put(req, res){
        try{
        const {id} = req.params
        const updatedShipment = await Shipment.destroy()
        return res.status(200).json("Cette livraison est bien renovée")
    }catch (e) {
        res.status(500).json(e)
        } 
    }
}

module.exports = new ShipmentController ()