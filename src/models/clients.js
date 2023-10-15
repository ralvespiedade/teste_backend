const mongoose = require('mongoose')

//Creating schema
const schemaClients = new mongoose.Schema({
  name: String,
  email: String,
  fone: String,
  address: String,
  password: String
})

const Model = mongoose.model('clients', schemaClients)

module.exports = Model