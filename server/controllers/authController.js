const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, {expiresIn: '24h'}
        )
}

class AuthController{
    async registration(req, res, next){
        const{email, password, phone} =req.body
        console.log("auth....",req.body)
        if(!email || !password){
            return next(ApiError.badRequest('Wrong email or password!'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest('The user with the same email already exist '))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, phone, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        console.log("my body: ",req)
        const user = await User.findOne({where: {email: email}})
        console.log(user)
        if (!user) {
            return next(ApiError.internal('User is not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('The wrong password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

        
    }
    async auth(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
      
    }
}

module.exports = new AuthController()