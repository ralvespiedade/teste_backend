const ClientsModel = require('../models/clients')

//List of clients (GET)

async function get(req, res) {
  const id = req.params

  var obj = id ? _id = id : null  

  const clients = await ClientsModel.find(obj)

  res.send(clients)
}

module.exports = {
  get
}
