const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = function() {
    return function(req, res, next){

        if(req.method === "OPTIONS"){
          next() 
       }
        try {
            const token = req.headers.authorization.split(' ')[1]// tokenType token
            if (!token) {
                return res.status(401).json({message: "L'utilisateur n'est pas autorisé"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            req.user = decoded
            next()
        } catch (e) {
            console.error(e)
            return res.status(403).json({message: "L'utilisateur n'est pas autorisé"})
        }
    }
}