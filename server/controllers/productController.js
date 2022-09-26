const { UUIDV4 } = require('sequelize')
const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const { rmSync } = require('fs')


class ProductController{
    async create(req, res, next){
        try{
        const{id, category_id, title, description, unitPrice} = req.body// название Product
        const {pictures} = req.files
        let fileName = UUIDV4 + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const product = await Product.create({id, category_id, title, description, unitPrice, img: fileName})// создание product
        return res.json(product)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        const {category_id} = req.query
        let products;
        if (!category_id){
          products = await Product.findAll({category_id})
        }
        return res.json(products)
    }

    async getOne(req, res){
        const {id} = req.params
        const product = await Product.findOne(
            {id}, [{title, description, unit_price}]
        ) 
    return res.json(product);
}
        
    async delete(req, res){
        
    }
    async put(req, res){
        
    }
}
module.exports = new ProductController()