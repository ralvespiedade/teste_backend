const ClientsModel = require('../models/clients')

//List of clients (GET)

async function get(req, res) {
  const { id } = req.params

  var obj = id ? { _id: id } : null  

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

async function put(req, res) {
  const { id } = req.params
  
  const client = await ClientsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
  
  const message = client ? "success" : "error"


  res.send ({
    message,
    client
  })
}

async function del (req, res) {
  const { id } = req.params

  const client = await ClientsModel.findOneAndDelete({ _id: id })
  
  const message = client ? 'success' : 'error'

  res.send({
    message,
    client
  })
  
  get()
}

  
module.exports = {
  get,
  post,
  put,
  del
}
