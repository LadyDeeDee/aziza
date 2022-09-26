const {Storage} = require('../models/models')
const ApiError = require('../error/ApiError')


class StorageController{

    async create(req, res){
            const{id, product_id, quantity, color, size} = req.body// название Storage
            const {pictures} = req.files
            const storage = await Storage.create({})// создание storage
            return res.json(id, product_id, quantity, color, size)
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

module.exports = new StorageController ()