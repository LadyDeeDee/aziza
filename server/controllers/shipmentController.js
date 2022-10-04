const {Shipment} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShipmentController{
    
    async create(req, res){
            const{id, order_id, shipment_date} = req.body// название Shipment
            const shipment = await Shipment.create({})// создание shipment
            return res.json(id, order_id, shipment_date)
        }

    async getAll(req, res){
        const shipment = req.params
        await Shipment.getAll()
        return res.status(200).json(shipment)
        
    }

    async getOne(req, res){
        const {id} = req.params
        await Shipment.getOne()
        return res.json(id)
    }

    async delete(req, res){
        const {id} = req.params
        await Shipment.destroy()
        return res.json(id)
    }
    async put(req, res){
        
    }
}

module.exports = new ShipmentController ()