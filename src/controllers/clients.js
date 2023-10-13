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
    address,
    password
  } = req.body
  console.log(req.body)
  // Is this client is already registered?
  
  var teste = await uniqueClientCheck(fone, email)

  
  if (teste != "") {
    res.send(teste)
  } else {

    //creating new client
    const client = new ClientsModel({
      name,
      email,
      fone,
      address,
      password
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
  
}

//--Grants clients don't have same fone nor email
async function uniqueClientCheck(fone, email) {
  
  
  const clients = await ClientsModel.find()
  var fone_validation = true
  var email_validation = true
  var message = ""
  
  clients.forEach(client => {
   
    if(client.fone == fone) {
      fone_validation = false
      
    }
      
    if(client.email == email) {
      email_validation = false
    }
      
  })

  if (!fone_validation && !email_validation) {
    message = "[Erro] Fone e E-mail já cadastrados!"
  } else if (!fone_validation && email_validation) {
    message = `[Erro] fone já cadastrado!`
  } else if (fone_validation && !email_validation){
    message = `[Erro] e-mail já cadastrado!`
  }

  return message
  
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
