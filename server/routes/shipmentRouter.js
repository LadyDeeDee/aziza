const Router = require('express')
const router = new Router()
const shipmentController = require('../controllers/shipmentController')
const checkRole = require('../middleware/checkRoleMiddleware')



router.post('/', checkRole('ADMIN'), shipmentController.create)
router.get('/', shipmentController.getAll)
router.get('/:id', shipmentController.getOne)
router.delete('/:id',checkRole('ADMIN'),  shipmentController.delete)
router.put('/:id', checkRole('ADMIN'),  shipmentController.put)


module.exports = router