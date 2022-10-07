const Router = require('express')
const router = new Router()
const orderDetailsController = require('../controllers/orderDetailsController')
const ifTheUserAuth = require('../middleware/authMiddleware')



router.post('/order/:order_id', ifTheUserAuth(), orderDetailsController.create)
router.get('/order/:order_id', ifTheUserAuth(), orderDetailsController.getAll)
router.get('/order/:order_id', orderDetailsController.getOne)


module.exports = router