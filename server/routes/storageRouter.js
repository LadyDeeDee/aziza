const Router = require('express')
const router = new Router()
const storageController = require('../controllers/storageController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),storageController.create)
router.get('/', storageController.getAll)
router.get('/:id', storageController.getOne)
router.delete('/',)
router.put('/',)


module.exports = router