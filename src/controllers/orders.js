const Model = require('../models/orders')

async function get(req, res) {
  
  const { id } = req.params
  
  const obj = id ? { _id: id } : null

  const orders = await Model.find(obj)

  orders ? message = "sucess" : message = 'error' 

  res.send ({
    message,
    orders 
  })
  
}

async function post(req, res) {
  
  const {

    client_code,
    product_code,
    order_status

  } = req.body

  //--Difining Order's date
  sistem_date = new Date()
  day = sistem_date.getDate()
  month = putZero(sistem_date.getMonth()+1)
  year = sistem_date.getFullYear()
  hour = putZero(sistem_date.getHours())
  minutes = putZero(sistem_date.getMinutes())
  order_date = `${day}/${month}/${year} ${hour}:${minutes}`
    
  const order = new Model({

    client_code,
    product_code,
    order_date,
    order_status

  })

  order.save()

  message = order ? 'success' : 'error'

  res.send({
    message,
    order //this client orders
  })

}

function putZero(text) {
  text = text.toString()
  if (text.length < 2) {
    
    text = '0'+text
    return text
    
  } else {
    
    return text
    
  }
}
  
module.exports = {
  get,
  post
}
