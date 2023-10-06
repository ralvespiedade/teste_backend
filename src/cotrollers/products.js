const productsModel = require('../models/products')

async function get(req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null

  const products = await productsModel.find(obj)

  res.send(products)
}

async function post(req, res) {
  //getting new product data from body's request
  const {
    name,
    price
  } = req.body

  //Verifying if some of them are null
  if (!name || !price) {
    res.send(`Ops! Ocorreu um erro`)
    
  } else {
    //Creating new product
      const product = new productsModel({
      name,
      price
    })
    
    //Saving new product
    product.save()
  
    res.send()
  }
  

}

module.exports = {
  get,
  post
}