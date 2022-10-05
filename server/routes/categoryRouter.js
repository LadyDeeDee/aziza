const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),categoryController.create)
router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getOne)
router.delete('/', categoryController.delete,)
router.put('/', categoryController.put,)


module.exports = router