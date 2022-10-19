const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')


class ProductController{
    async create(req, res, next){
        try{
            const{category_id, title, price, description, imageUrl} = req.body// название Product
            const product = await Product.create({category_id, title, description, price, img: imageUrl})// создание product
            return res.status(201).json(product)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){

        const products = await Product.findAll()
        if(products){
            return res.status(200).json(products)
        }else{
            next(ApiError.notFound("there is no product found"))
        }
    }

    async getByCategory(req, res, next){
        const {category_id} = req.params
        if (!category_id){
          const products = await Product.findAll({where: {categoryId: category_id}})
          return res.status(200).json(products)
        }
        next(ApiError.notFound("there is any product found with this category"))
    }

    async getOne(req, res, next){
        const {id} = req.params
        if(!id){
            const product = await Product.findOne({id}) 
            return res.status(200).json(product);
        }
        next(ApiError.notFound("Product not found"))
    }

               
    async delete(req, res, next){
        const {id} = req.params
        if(id){
            const product = await Product.destroy({where: {id}})
            return res.status(200).json("Le produit est bien supprimé");
        }else{
            next(ApiError.internal("Impossible to delete this product"))
        }
    }

    async put(req, res, next){
        try{
            const {title, description, price, categoryId} = req.body
            const {id} = req.params
                const product = await Product.update({title, description, price, categoryId},{where:{id:id}})
                if(product[0] === 1){
                    return res.status(200).json("Le produit est bien mis à jour");
                } else {
                    return res.status(400).json("Le produit n'est pas mis à jour")
                }
                
        
        }catch(e) {
         next(ApiError.internal("Imposible to update this product"))
        }
 }
} 

module.exports = new ProductController()