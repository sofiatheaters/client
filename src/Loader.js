import React from 'react'
import { Spinner, Intent } from '@blueprintjs/core'
import './Loader.css'

export default () => (
  <div className='loader-wrapper'>
    <Spinner intent={Intent.PRIMARY}/>
  </div>
)
