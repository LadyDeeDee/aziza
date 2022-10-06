const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
const {check} = require("express-validator")

router.post('/registration',
[
    check('email', "L'email est incorrect").isEmail(),
    check('password', "Le mot de passe doit être loin que 5 lettres mais court que 12 lettres").isLength({min: 5, max: 12})
], authController.registration)
router.post('/login', authController.login)
router.get('/auth', authMiddleware, authController.auth)


module.exports = router