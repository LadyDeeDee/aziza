const Router = require('express')
const router = new Router()

const authRouter = require('./authRouter')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const productDetailsRouter = require('./productDetailsRouter')
const orderRouter = require('./orderRouter')
const orderDetailsRouter = require('./orderDetailsRouter')
const storageRouter = require('./storageRouter')
const categoryRouter = require('./categoryRouter')
//const shipmentRouter = require('./shipmentRouter' )

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/productDetails', productDetailsRouter)
router.use('/order', orderRouter)
router.use('/orderDetails', orderDetailsRouter)
router.use('/category', categoryRouter)
router.use('/storage',storageRouter)
//router.use('/order',shipmentRouter)

module.exports = router