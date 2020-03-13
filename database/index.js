
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nordstromPrac')
const faker = require('faker')
const theData = require('../fakerData.js')

var reviewSchema = mongoose.Schema({
  title: String,
  username: { type: String, unique: true },
  body: String,
  score: Number,
  date: Date
})

let Review = mongoose.model('Review', reviewSchema)

const handleError = () => {
  // console.log('error in db cb');
}

let store = (reviews) => {
  console.log('in the db')
  for (var i = 0; i < 3; i++) {
    console.log('HELLO', theData.fakerDataGen, theData.fakeRating)
  }
  // newEntry.store(function (err) {
  //   if (err) return handleError(err)
  // })
}

module.exports = { store }

// var newEntry = new Review({
//   id: parsed[i].id,
//   nodeId: parsed[i].node_id
// })