const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next){
      if(req.method === "OPTIONS"){
        next()
      } 
      
       try {
        const token = req.headers.authorization.split(' ')[1]// tokenType token
        console.log("'im here...",token)
        if (!token) {
            return res.status(401).json({message: "L'utilisateur n'est pas autorisé"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        if(decoded.role !==role){
            return res.status(403).json('The access denied')
        }
        next()
    } catch (e) {
        res.status(401).json({message: "L'utilisateur n'est pas autorisé"})
    }
}}
