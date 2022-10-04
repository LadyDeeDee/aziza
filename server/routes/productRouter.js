const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), productController.create)
router.get('/:id', productController.getOne)
router.get('/category/:category_id', productController.getAll)
router.delete('/:id', productController.destroy)
router.put('/:id', productController.update)


module.exports = router