const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')
const ifTheUserAuth = require('../middleware/authMiddleware')


router.get('/', checkRole('ADMIN'), userController.getAll)
router.get('/:id', ifTheUserAuth, userController.getOne)
router.delete('/:id', checkRole('ADMIN'), userController.delete)
router.put('/:id', userController.put)


module.exports = router