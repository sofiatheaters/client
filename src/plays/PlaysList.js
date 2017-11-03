import React from 'react'
import Play from './Play'

import './PlaysList.css'

export default ({ plays }) => (
  <div className='playslist' >
    { plays.map(
      (play, i) => <Play key={i} play={play} />
    ) }
  </div>
)
