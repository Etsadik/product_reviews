
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nordstromPrac')
const faker = require('faker')

const reviewData = []
console.log('review data length', reviewData.length)

const reviewSchema = mongoose.Schema({
  title: String,
  username: String,
  body: String,
  score: Number,
  date: Date
})
const Review = mongoose.model('Review', reviewSchema)

// implement a check if DB exsists, dont run post request to seed the data, refactor this
const seed = () => {
  // make reviews
  for (let i = 0; i < 100; i += 1) {
    const newReview = {
      title: faker.random.words(8),
      username: faker.name.firstName() + faker.name.lastName(),
      body: faker.random.words(20),
      score: (Math.floor(Math.random() * 5) + 1),
      date: faker.date.past(20)
    }
    reviewData.push(newReview)
  }
  for (let j = 0; j < reviewData.length; j++) {
    const newReview = new Review({
      title: reviewData[j].title,
      username: reviewData[j].username,
      body: reviewData[j].body,
      score: reviewData[j].score,
      data: reviewData[j].date
    })
    newReview.save((err) => {
      if (err) {
        console.log('error in SEED DB', err)
      } else {
        console.log('review was stored')
      }
    })
  }
}
seed()

console.log(reviewData.length)
