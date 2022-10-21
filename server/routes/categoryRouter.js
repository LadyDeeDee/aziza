const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', categoryController.getAll)
router.post('/', checkRole('ADMIN'),categoryController.create)
router.get('/:id', categoryController.getOne)
router.delete('/:id',checkRole('ADMIN'), categoryController.delete)
router.put('/',  checkRole('ADMIN'),categoryController.put,)


module.exports = router