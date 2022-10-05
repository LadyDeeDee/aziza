const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

router.get('/', userController.getAll)
router.post('/', userController.create)
router.get('/:id', userController.getOne)
router.delete('/:id', userController.delete)
router.put('/:id', userController.put)


module.exports = router