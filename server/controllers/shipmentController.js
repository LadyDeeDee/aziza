const {Shipment} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShipmentController{
    
    async create(req, res){
            const{id, order_id, shipment_date} = req.body// название Shipment
            const shipment = await Shipment.create({})// создание shipment
            return res.json(id, order_id, shipment_date)
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

module.exports = new ShipmentController ()