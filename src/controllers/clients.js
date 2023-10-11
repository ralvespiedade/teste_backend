const ClientsModel = require('../models/clients')

//List of clients (GET)

async function get(req, res) {
  const id = req.params

  var obj = id ? _id = id : null  

  const clients = await ClientsModel.find(obj)

  res.send(clients)
}

async function post(req, res) {
  const { 
    name,
    email,
    fone,
    address
  } = req.body
  
  
  
  //creating new client
  const client = new ClientsModel({
    name,
    email,
    fone,
    address
  })
  
  //Saving new client
  client.save()
  
  //Response
  
  const message = client ? 'success' : 'error'
  
  res.send({
    message,
    client
  })
}
  
module.exports = {
  get,
  post
}
