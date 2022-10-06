const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')
//const checkRole = require('../middleware/checkRoleMiddleware')
const ifTheUserAuth = require('../middleware/authMiddleware')

typeof ifTheUserAuth
router.get('/', orderController.getAll)
router.post('/', ifTheUserAuth(), orderController.create)
router.get('/:id',ifTheUserAuth(),  orderController.getOne)
router.delete('/:id', ifTheUserAuth(), orderController.delete)
router.put('/:id', ifTheUserAuth(), orderController.put)


module.exports = router