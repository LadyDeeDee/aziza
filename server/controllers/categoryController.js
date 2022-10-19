const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController{
    async create(req, res, next){
        try{
            const {name} = req.body// название Category
            const category = await Category.create({name})// создание category
            return res.status(201).json(category)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        } 
    }

    async getAll(req, res, next){
        try{
        const categories = await Category.findAll()
        return res.status(200).json(categories)
    }catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async getOne(req, res, next){
        try{
        const {id} = req.params
        await Category.findOne({id})
        return res.status(200).json(id)
    }   catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async delete(req, res, next){
        try{
        const deletedCategory = await Category.destroy({id})
        return res.status(200).json("La catégorie est bien supprimée")        
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

    async put(req, res, next){
        try{
        const updatedCategory = await Category.update({id})
        return res.status(200).json("La catégorie est bien renovée") 
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

}

module.exports = new CategoryController ()