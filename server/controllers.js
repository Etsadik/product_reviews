// forward the incoming request to the proper location for db access

const db = require('../database/index.js')

const get = (req, res) => {
  console.log('made it to the controller')
  db.get((err, data) => {
    if (err) {
      console.log('error in the controller')
      res.send(400)
    } else {
      console.log('presuccess response:', data)
      res.send(data)
    }
  })
}

module.exports = { get }
