const {User} = require('../models/models')
const ApiError = require('../error/ApiError')


class UserController{

    async create(req, res){
        const{id, name, surname, dateOfBirth, phone,email, password, adress1, adress2, role} = req.body// название User
        const user = await User.create({})// создание user
        return res.json(id, name, surname, dateOfBirth, phone,email, password, adress1, adress2, role)
    }

    async getAll(req, res){
        const users = await User.getAll()
        return res.json(users)
    }

    async getOne(req, res){
        const user = await User.getOne()
        return res.json(user)
    }

    async delete(req, res){
        
    }
    async put(req, res){
        
    }
}

module.exports = new UserController ()