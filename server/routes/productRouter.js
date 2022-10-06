const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), productController.create)
router.get('/:id', productController.getOne)
router.get('/category/:category_id', productController.getAll)
router.delete('/:id', checkRole('ADMIN'), productController.delete)
router.put('/:id', checkRole('ADMIN'), productController.put)


module.exports = router