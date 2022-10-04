const {Storage} = require('../models/models')
const ApiError = require('../error/ApiError')


class StorageController{

    async create(req, res){
            const{product_id, quantity, color, size} = req.body// название Storage
            const {pictures} = req.files
            const storage = await Storage.create({})// создание storage
            return res.status(201).json(storage)
        }
    async getAll(req, res){
        const storage = req.params
        const storages = await Storage.getAll()
        return res.status(200).json(storages)
    }

    async getOne(req, res){
        const {id} = req.params
        const storage = await Storage.getOne()
        return res.status(200).json(storage)
    }

    async delete(req, res){
        const storage = req.params
        const deletedStorage = await Storage.destroy()
        return res.status(200).json('Le stokage est bien supprimé')
    }
    async put(req, res){
        const storage = req.params
        const updatedStorage = await Storage.update()
        return res.status(200).json('Le stokage est bien renové')
    }
}

module.exports = new StorageController ()