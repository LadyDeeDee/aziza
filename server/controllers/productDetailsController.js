//const { UUIDV4 } = require('sequelize')
const uuid = require('uuid')
const path = require('path')
const {ProductDetails} = require('../models/models')
const ApiError = require('../error/ApiError')
const { rmSync } = require('fs')
const { where } = require('sequelize')


class ProductDetailsController{
    async create(req, res, next){
        try{
        const{title, description} = req.body// название Product
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const productDetails = await ProductDetails.create({title, description, img: fileName})// создание product
        return res.status(201).json(productDetails)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        const {product_id} = req.params
        if (!product_id){
          const productDetails = await ProductDetails.findAll({product_id})
          return res.status(200).json(productDetails)
        }
        next(ApiError.notFound(e.message))
    }

    async getOne(req, res, next){
        const {id} = req.params
        if(!id){
            const productDetails = await ProductDetails.findOne({id}) 
            return res.status(200).json(productDetails);
        }
        next(ApiError.notFound(e.message))
    }

               
    async delete(req, res, next){
        const {id} = req.params
        if(!id){
        const productDetails = await ProductDetails.destroy({id}) 
        return res.status(200).json("Le produit est bien supprimé");
       }
       next(ApiError.internal(e.message))
    }

    async put(req, res, next){
        try{
            const {title, description} = req.body
            const {id} = req.params
                const productDetails = await ProductDetails.update({title, description},{where:{id:id}})
                if(productDetails[0] === 1){
                    return res.status(200).json("Le produit est bien mis à jour");
                } else {
                    return res.status(400).json("Le produit n'est pas mis à jour")
                }
        
        }catch(e) {
         next(ApiError.internal(e.message))
        }
 }
} 
module.exports = new ProductDetailsController()