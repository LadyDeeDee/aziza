const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController{
    async create(req, res){
        const{id, category_name} = req.body// название Category
        const category = await Category.create({})// создание category
        return res.json(id, category_name)
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

module.exports = new CategoryController ()