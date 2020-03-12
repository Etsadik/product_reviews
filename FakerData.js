const faker = require('faker')
let lastName = faker.name.lastName()
let jobTitle = faker.name.jobTitle()
let prefix = faker.name.prefix()
let suffix = faker.name.suffix()
let jobArea = faker.name.jobArea()
let phone = faker.phone.phoneNumber()
let shortDescription = faker.lorem.sentence()
let firstName = faker.name.firstName()

console.log(`Employee: ${firstName}`)
// console.log(`Job title: ${jobTitle}`)
// console.log(`Job area: ${jobArea}`)
// console.log(`Phone: ${phone}`)
// console.log(shortDescription)

// TITLE and DESCRIPTION
// this is the bare bones for the sentence structure and title can folow the same format
console.log('this is the sentence', faker.random.words(8))
// date
// const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
let fakeDay = faker.date.weekday()
let fakeMonth = faker.date.month()
let fakeDayOfMonth = fafker.random.number({
  min: 1,
  max: 30
})
let fakeYear = ('the year:', faker.random.number({
  min: 2000,
  max: 2020
}))
console.log('The formetted date: ', fakeDay, fakeMonth, , fakeYear)

// rating (random number between 1 and 5);
console.log('the rating: ', faker.random.number({
  min: 0,
  max: 5
}))
