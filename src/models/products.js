const mongoose = require('mongoose')

//Creating schema
const schema = new mongoose.Schema({
  name: String,
  price: Number,
  code: Number
})

//Defining Model to products table
const Model = mongoose.model('products', schema)

module.exports = Model
