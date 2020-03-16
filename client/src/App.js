import React from 'react'
import { ajax } from 'jquery'
import Title from './Title'
import ReviewList from './Reviews/Components/ReviewList.js'

class Reviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: []
    }
    this.get = this.get.bind(this)
  }

  componentDidMount () {
    this.get()
  }

  get () {
    ajax({
      method: 'GET',
      url: '/reviews',
      data: {},
      success: (reviews) => { this.setState({ reviews }) },
      error: () => { console.log('HELLO') }
    })
  }
  render () {
    return (
      <div> 
      <Title />
      <ReviewList reviews={ this.state.reviews } />
      </div>
    )
  }
}

export default Reviews
