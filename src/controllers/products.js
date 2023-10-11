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
    price,
  
  } = req.body


  //Verifying if some of them are null
  if (!name || !price) {
    res.send(`Ops! Ocorreu um erro`)
    
  } else {
    
    //Defining currentCode
    const products = await productsModel.find()
    var productCode = 0
    products.forEach(item => {
      if(parseInt(item.code) > productCode) {
        productCode = parseInt(item.code)
      } 
    })


    //Creating new product
      const product = new productsModel({
      name,
      price,
      code: productCode + 1
    })
    
    //Saving new product
    product.save()
  
    res.send()
  }
  
}
 
async function put(req, res) {
  const { id } = req.params
  
  const product = await productsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

  const message = product ? "success" : "error"

  res.send({
    message,
    product
  })

}


async function del(req, res) {
  const { id } = req.params
  const product = await productsModel.findOneAndDelete({ _id: id })

  if (!product) {
    res.send('fail')
  } else {
    res.send('success')
  }
    
}

module.exports = {
  get,
  post,
  put,
  del
}