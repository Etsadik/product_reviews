
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nordstromPrac')
const faker = require('faker')
// const theData = require('../fakerData.js')

var reviewSchema = mongoose.Schema({
  title: String,
  username: { type: String, unique: true },
  body: String,
  score: Number,
  date: Date
})

// make array of reviews with faker -  only one for now
var tempData = [{
  title: faker.random.words(8),
  username: faker.name.firstName(),
  body: faker.random.words(20),
  score: (Math.floor(Math.random() * 5) + 1),
  date: faker.date.past(20)
}]
// console.log('this is  the temporary data', tempData[0].title)

const handleError = (error) => {
  console.log('error in db cb: ', error)
}

// implement a check if DB exsists
const store = (callback) => {
  let Review = mongoose.model('Review', reviewSchema)
  let newReview = new Review({
    title: tempData[0].title,
    username: tempData[0].username,
    body: tempData[0].body,
    score: tempData[0].score,
    data: tempData[0].date
  })
  // console.log('this is the schema review: ', newReview)
  newReview.save((err) => {
    if (err) {
      console.log('error in the save to db method', err)
      return handleError(err)
    } else {
      console.log('success prior to DB store')
      callback(err)
    }
  })
}
store()

module.exports = { store }
