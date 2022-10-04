const Router = require('express')
const router = new Router()
const orderDetailsController = require('../controllers/orderDetailsController')


router.post('/', orderDetailsController.create)
router.get('/', orderDetailsController.getAll)
router.get('/:id', orderDetailsController.getOne)
router.delete('/',)
router.put('/',)


module.exports = router