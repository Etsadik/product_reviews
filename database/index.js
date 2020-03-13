
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nordstromPrac')
const faker = require('faker')

var reviewSchema = mongoose.Schema({
  title: String,
  username: { type: String, unique: true },
  body: String,
  score: Number,
  date: Date
})

// console.log(reviewSchema)

const handleError = () => {
  // console.log('nothing');
}

let store = (reviews) => {
  // var parsed = JSON.parse(reviews);

  let Review = mongoose.model('Review', reviewSchema)
  for (var i = 0; i < parsed.length; i++) {
    var newEntry = new Review({
      id: parsed[i].id,
      nodeId: parsed[i].node_id
    })
    newEntry.store(function (err) {
      if (err) return handleError(err)
    })
  }
}

module.exports = store
