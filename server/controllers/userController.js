const {User} = require('../models/models')
const ApiError = require('../error/ApiError')


class UserController{

    async create(req, res) {
        try {
        const{name, surname, dateOfBirth, phone,email, password, adress1, adress2, role} = req.body// название User
        const user = await User.create({name, surname, dateOfBirth, phone,email, password, adress1, adress2, role})// создание user
        return res.status(201).json({message: "Le nouvel utilisateur est crée"})
        } catch (e) {
         next(ApiError.badRequest(e.message))
    }
    }

    async getAll(req, res) {
        try {
        let users = await User.findAll()
        return res.status(200).json(users)
        } catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async getOne(req, res){
        try {
        const {id} = req.params
        const user = await User.findOne({id})
        return res.status(200).json(user)
        } catch (e) {
        next(ApiError.notFound(e.message))
        } 
    }

    async delete(req, res){
        try {
        const {id} = req.params
        const deletedUser = await User.destroy({id})
        return res.status(200).json("L'utilisateur est bien supprimé")
        } catch (e) {
        next(ApiError.internal(e.message))
        }  
    }

    async put(req, res){
        try {
        const {id} = req.params
        const updatedUser = await User.update({id})
        return res.status(200).json("Les données d'utilisateur sont bien renovées") 
        } catch (e) {
        next(ApiError.internal(e.message))
        } 
    }
}

module.exports = new UserController()