import React from 'react'

const ReviewTitle = (props) => {
  console.log('in the rev title', props)
  return (
    <div className='review-title'>
      {props.title}
    </div>
  )
}

export default ReviewTitle
