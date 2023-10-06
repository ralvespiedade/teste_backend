const router = require('express').Router()

const ProductController = require('../cotrollers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products/', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.del)

module.exports = router