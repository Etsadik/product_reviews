import React from 'react'

const ReviewBody = (props) => {
  console.log('in the body', props)
  return (
    <div className='review-body'>
      {props.body}
    </div>
  )
}

export default ReviewBody
