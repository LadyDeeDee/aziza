const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', productController.create)
router.get('/:id', productController.getOne)
router.get('/category/:category_id', productController.getAll)
router.delete('/:id', productController.delete)
router.put('/:id', productController.put)


module.exports = router