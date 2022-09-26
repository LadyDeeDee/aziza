const Router = require('express')
const router = new Router()
const shipmentController = require('../controllers/shipmentController')

router.post('/', shipmentController.create)
router.get('/', shipmentController.getAll)
router.get('/:id', shipmentController.getOne)
router.delete('/',)
router.put('/',)


module.exports = router