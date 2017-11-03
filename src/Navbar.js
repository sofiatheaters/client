import React from 'react'
import {Menu, MenuItem, Popover, Position} from '@blueprintjs/core'

import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const Navbar = ({ push }) => {

  const ScheduleMenu = (<Menu >
    <MenuItem onClick={() => push('/schedule/day')} text='Day'/>
    <MenuItem onClick={() => push('/schedule/week')} text='Week'/>
    <MenuItem onClick={() => push('/schedule/month')} text='Month'/>
    <MenuItem onClick={() => push('/schedule/twomonths')} text='Two Months'/>
  </Menu>)
  
  const SchedulePopover = () => (<Popover content={ScheduleMenu} position={Position.BOTTOM}>
    <button className='pt-button pt-minimal pt-icon-timeline-events'>Schedule</button>
  </Popover>)

  const ProfileMenu = (<Menu >
    <MenuItem iconName='pt-icon-log-out' onClick={() => push('/')} text='Logout'/>
  </Menu>)

  const ProfilePopover = () => (<Popover content={ProfileMenu} position={Position.BOTTOM}>
    <button className='pt-button pt-minimal pt-icon-user'></button>
  </Popover>)
  
  return (<nav className='pt-navbar pt-dark pt-fixed-top'>
    <div className='pt-navbar-group pt-align-left'>
      <div className='pt-navbar-heading'>Theaters app</div>
      <span className='pt-navbar-divider'></span>
      <input className='pt-input' placeholder='Search plays...' type='text'/>
      <span className='pt-navbar-divider'></span>
      <button className='pt-button pt-minimal pt-icon-tick-circle' onClick={() => push('/')} >All</button>
      <SchedulePopover/>
      <button className='pt-button pt-minimal pt-icon-bookmark' onClick={() => push('/saved')} >Saved</button>

    </div>
    <div className='pt-navbar-group pt-align-right'>
      <span className='pt-navbar-divider'></span>
      <ProfilePopover/>
    </div>
  </nav>)
}

const mapDispatchToProps = dispatch => bindActionCreators({
  push
}, dispatch)

export default connect(null, mapDispatchToProps)(Navbar)
