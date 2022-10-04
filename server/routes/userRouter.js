const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

router.get('/', userController.getAll)
router.post('/', userController.create)
router.get('/:id', userController.getOne)
router.delete('/', userController.destroy)
router.put('/', userController.update)


module.exports = router