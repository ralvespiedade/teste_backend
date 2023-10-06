const router = require('express').Router()

const ProductController = require('../cotrollers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products/', ProductController.post)

module.exports = router