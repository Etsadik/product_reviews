/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Review from '../Components/Review.js'
import { createSerializer } from 'enzyme-to-json';
const testReview = {
  username: 'Elias',
  title: 'Title',
  body: 'Body',
  score: 5
}
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
// each review should render:
// a title, message, user, and date, rating

describe('Review', () => {
  const wrapped = mount(<Review review={testReview} />)
  it('should render the review title', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
