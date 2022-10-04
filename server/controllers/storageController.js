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
        const storage = req.params
        await Storage.getAll()
        return res.json(storage)
    }

    async getOne(req, res){
        const storage = req.params
        await Storage.getOne()
        return res.json(storage)
    }

    async delete(req, res){
        const storage = req.params
        await Storage.destroy()
        return res.status(200).json('Le produit est bien supprimé')
    }
    async put(req, res){
        const storage = req.params
        await Storage.update()
        return res.json(storage)
    }
}

module.exports = new StorageController ()