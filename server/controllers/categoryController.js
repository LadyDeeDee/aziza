const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController{

    async create(req, res){
        try{
        const {category_name} = req.body// название Category
        const category = await Category.create({category_name})// создание category
        return res.status(201).json(category)
    }catch (e) {
        next(ApiError.badRequest(e.message))
        } 
    }

    async getAll(req, res){
        try{
        const categories = await Category.getAll()
        return res.status(200).json(categories)
    }catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async getOne(req, res){
        try{
        const {id} = req.params
        await Category.getOne()
        return res.status(200).json(id)
    }   catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async delete(req, res){
        try{
        const category = req.params
        const deletedCategory = await Category.destroy()
        return res.status(200).json("La catégorie est bien supprimée")        
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

    async put(req, res){
        try{
        const category = req.params
        const updatedCategory = await Category.update()
        return res.status(200).json("La catégorie est bien renovée") 
    }   catch (e) {
        next(ApiError.internal(e.message))
        } 
    }

}

module.exports = new CategoryController ()