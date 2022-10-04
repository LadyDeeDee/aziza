const {User} = require('../models/models')
const ApiError = require('../error/ApiError')


class UserController{

    async create(req, res){
        const{id, name, surname, dateOfBirth, phone,email, password, adress1, adress2, role} = req.body// название User
        const user = await User.create({})// создание user
        return res.status(201).json(user)
    }

    async getAll(req, res){
        let users = await User.findAll()
        return res.status(200).json(users)
      
    }

    async getOne(req, res){
        const user = await User.getOne()
        return res.status(200).json(user)
    }

    async delete(req, res){
        const user = req.params
        await User.destroy()
        return res.status(200).json("L'utilisateur est bien supprimé ") 
    }
    async put(req, res){
        const user = req.params
        await User.update()
        return res.status(200).json(user) 
    }
}

module.exports = new UserController ()