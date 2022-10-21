const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const {validationResult} = require("express-validator")
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, {expiresIn: '24h'}
        )
}

class AuthController{    
    async registration(req, res, next){
        const errors = validationResult(req)
        if(!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array()})
        }
        const{email, password, gender, firstName, lastName} = req.body
        if(!email || !password){
            return next(ApiError.badRequest("L'email ou le mot de passe est incorect!"))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest("L'utilisateur avec le même email exist déjà"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, gender, firstName, lastName})
        const token = generateJwt(user.id, user.email, user.role)
        return res.status(201).json({message: "user created", token})
    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email: email}})
        if (!user) {
            return next(ApiError.notFound("L'utilisateur n'est pas trouvé"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest("Le mot de passe est incorrect"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.status(200).json({token})
        
    }

}

module.exports = new AuthController()