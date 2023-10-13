const mongoose = require('mongoose')

//Creating schema
const schemaClients = new mongoose.Schema({
  name: String,
  email: String,
  fone: String,
  address: String,
  password: String
})

const ModelClient = mongoose.model('clients', schemaClients)

module.exports = ModelClient