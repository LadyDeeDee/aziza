const Router = require('express')
const router = new Router()
const productDetailsController = require('../controllers/productDetailsController')


router.get('/', productDetailsController.getAll)
router.post('/:id', productDetailsController.create)
router.get('/:id', productDetailsController.getOne)
router.delete('/:id', productDetailsController.delete)
router.put('/:id', productDetailsController.put)


module.exports = router