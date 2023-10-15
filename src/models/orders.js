const mongoose = require('mongoose')

//código do cliente, código do produto, data de criação e status do pedido
const schemaOrders = new mongoose.Schema({
  client_code: String,
  product_code: String,
  order_date: String,
  order_status: String
})

const Model = mongoose.model('orders', schemaOrders)

module.exports = Model
