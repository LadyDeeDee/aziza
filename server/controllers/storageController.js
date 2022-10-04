const {Storage} = require('../models/models')
const ApiError = require('../error/ApiError')


class StorageController{

    async create(req, res){
    try{
        const{product_id, quantity, color, size} = req.body// название Storage
        const {pictures} = req.files
        const storage = await Storage.create({})// создание storage
        return res.status(201).json(storage)
    }catch (e) {
        res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try{
        const storage = req.params
        const storages = await Storage.getAll()
        return res.status(200).json(storages)
    }catch (e) {
        res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try{
        const {id} = req.params
        const storage = await Storage.getOne()
        return res.status(200).json(storage)
    }catch (e) {
        res.status(500).json(e)
        }
    } 

    async delete(req, res){
        try{
        const storage = req.params
        const deletedStorage = await Storage.destroy()
        return res.status(200).json('Le stokage est bien supprimé')
    }catch (e) {
        res.status(500).json(e)
        } 
    }
    
    async put(req, res){
        try{
        const storage = req.params
        const updatedStorage = await Storage.update()
        return res.status(200).json('Le stokage est bien renové')
    }catch (e) {
        res.status(500).json(e)
        } 
    }

}

module.exports = new StorageController ()