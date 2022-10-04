const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController{
    async create(req, res){
        const {category_name} = req.body// название Category
        const category = await Category.create({category_name})// создание category
        return res.status(201).json(category)
    }
    async getAll(req, res){
        const categories = await Category.getAll()
        return res.status(200).json(categories)
    }
    async getOne(req, res){
        const {id} = req.params
        await Category.getOne()
        return res.status(200).json(id)
    }

    async delete(req, res){
        const category = req.params
        const deletedCategory = await Category.destroy()
        return res.status(200).json("La catégorie est bien supprimée")        
    }

    async put(req, res){
        const category = req.params
        const updatedCategory = await Category.update()
        return res.status(200).json("La catégorie est bien renovée") 
    }

}

module.exports = new CategoryController ()