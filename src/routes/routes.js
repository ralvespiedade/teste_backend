const router = require('express').Router()

const ProductController = require('../cotrollers/products')

router.get('/products', ProductController.get)

module.exports = router