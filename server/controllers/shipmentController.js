const {Shipment} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShipmentController{
    
    async create(req, res){
            const{order_id, shipment_date} = req.body// название Shipment
            const shipment = await Shipment.create({})// создание shipment
            return res.status(201).json(shipment)
        }

    async getAll(req, res){
        const shipments = await Shipment.getAll()
        return res.status(200).json(shipments)
        
    }

    async getOne(req, res){
        const {id} = req.params
        const shipment = await Shipment.getOne()
        return res.status(200).json(shipment)
    }

    async delete(req, res){
        const {id} = req.params
        const deletedShipment = await Shipment.destroy()
        return res.status(200).json("Cette livraison est bien supprimée")
    }
    async put(req, res){
        const {id} = req.params
        const updatedShipment = await Shipment.destroy()
        return res.status(200).json("Cette livraison est bien renovée")
    }
}

module.exports = new ShipmentController ()