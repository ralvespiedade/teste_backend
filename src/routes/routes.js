const router = require('express').Router()

const ProductController = require('../controllers/products')
const ClientController = require('../controllers/clients')
const OrderController = require('../controllers/orders')

//Products Endpoints
router.get('/products/:id?', ProductController.get)
router.post('/products/', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.del)

//Clients Endpoints
router.get('/clients/:id?', ClientController.get)
router.post('/clients', ClientController.post)
router.put('/clients/:id', ClientController.put)
router.delete('/clients/:id', ClientController.del)

//Orders Endpoints
router.get('/orders/:id?', OrderController.get)
router.post('/orders', OrderController.post)
//router.put('/orders/:id', OrderController.put)
//router.delete('/orders/:id', OrderController.del)


module.exports = router