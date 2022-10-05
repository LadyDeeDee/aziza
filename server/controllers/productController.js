const { UUIDV4 } = require('sequelize')
const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const { rmSync } = require('fs')


class ProductController{
    async create(req, res, next){
        try{
        const{category_id, title, description, unit_price} = req.body// название Product
        const {pictures} = req.files
        let fileName = UUIDV4 + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const product = await Product.create({category_id, title, description, unit_price, img: fileName})// создание product
        return res.status(201).json(product)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        const {category_id} = req.params
        if (!category_id){
          const products = await Product.findAll({category_id})
          return res.status(200).json(products)
        }
        next(ApiError.notFound(e.message))
    }

    async getOne(req, res, next){
        const {id} = req.params
        if(!id){
        const product = await Product.findOne() 
        return res.status(200).json(product);
       }
        next(ApiError.notFound(e.message))
    }
               
    async delete(req, res, next){
        const {id} = req.params
        if(!id){
        const product = await Product.destroy() 
        return res.status(200).json("Le produit est bien supprimé");
       }
       next(ApiError.internal(e.message))
    }

    async put(req, res, next){
        const {id} = req.params
        if(!id){
        const product = await Product.update()
        return res.status(200).json("Le produit est bien renové");
    } next(ApiError.internal(e.message))
  }
} 

module.exports = new ProductController()