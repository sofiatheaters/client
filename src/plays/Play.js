import React from 'react'
import './Play.css'

const calculateOneToFiveRating = rating => {
  const points = rating[1] + 2*rating[2] + 3*rating[3] + 4*rating[4] + 5*rating[5]
  const maximum = 5 * (rating[1] + rating[2] + rating[3] + rating[4] + rating[5])
  return points / maximum * 5
}

export default ({ play }) => (
  // <img className='play' src='http://via.placeholder.com/500x300/bada55' />
  <div className='play' style={{'background-image': `url(http://via.placeholder.com/500x200/bada55)`}}>
    <h1>{play.name}</h1>
    <span>{calculateOneToFiveRating(play.rating)}</span>
    <span>{play.theater}</span>
  </div>
)
