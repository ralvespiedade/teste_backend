const router = require('express').Router()

const ProductController = require('../controllers/products')
const ClientController = require('../controllers/clients')

//Products Endpoints
router.get('/products/:id?', ProductController.get)
router.post('/products/', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.del)

//Clients Endpoints
router.get('/clients/:id?', ClientController.get)
router.post('/clients', ClientController.post)
router.put('/clients/:id', ClientController.put)

module.exports = router