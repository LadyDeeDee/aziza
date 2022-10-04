const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController{
    async create(req, res){
        const{category_name} = req.body// название Category
        const category = await Category.create({category_name})// создание category
        return res.status(201).json(category)
    }
    async getAll(req, res){
        await Category.getAll()
        return res.status(200).json(category)
    }
    async getOne(req, res){
        const {id} = req.params
        await Category.getOne()
        return res.status(200).json(id)
    }

    async delete(req, res){
        const category = req.params
        await Category.destroy()
        return res.tatus(200).json("La catégorie est bien supprimée")        
    }

    async put(req, res){
        const category = req.params
        await Category.update()
        return res.json(category) 
    }

}

module.exports = new CategoryController ()