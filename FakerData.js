const faker = require('faker')
// let jobTitle = faker.name.jobTitle()
// let prefix = faker.name.prefix()
// let suffix = faker.name.suffix()
// let jobArea = faker.name.jobArea()
// let phone = faker.phone.phoneNumber()
// let shortDescription = faker.lorem.sentence()
let firstName = faker.name.firstName()

// console.log(`Employee: ${firstName}`)
// TITLE and DESCRIPTION
// this is lorem ipsum sentence structure and title can folow the same format
// console.log('this is the sentence', faker.random.words(8))

const fakeDay = faker.date.weekday()
const fakeMonth = faker.date.month()
const fakeDayOfMonth = faker.random.number({
  min: 1,
  max: 30
})
const fakeYear = ('the year:', faker.random.number({
  min: 2000,
  max: 2020
}))

var priliminaryTest = `${fakeDay + '' + fakeDayOfMonth + '' + fakeMonth + '' + fakeYear}`

// rating (random number between 1 and 5);
const fakeRating = faker.random.number({
  min: 0,
  max: 5
})

const fakerDataGen = () => {
  return priliminaryTest
}

module.exports = {
  fakerDataGen, fakeRating
}
