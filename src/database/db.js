const mongoose = require('mongoose')

function connect() {

  mongoose.connect('mongodb://127.0.0.1:27017/lanchonete')

  const db = mongoose.connection

  //Once open...
  db.once('open', () => {
    console.log('Connected to database!')
  })

  db.on('error', () => {
    console.error.bind(console, 'connection error:')
  })

}

module.exports = {
  connect
}