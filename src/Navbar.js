import React from 'react'
import {
  Menu,
  MenuItem,
  MenuDivider,
  Popover,
  Button,
  Position
} from '@blueprintjs/core'

const noop = () => {}

const ScheduleMenu = (
  <Menu >
    <MenuItem onClick={noop} text='Day'/>
    <MenuItem onClick={noop} text='Week'/>
    <MenuItem onClick={noop} text='Month'/>
    <MenuItem onClick={noop} text='Two Months'/>
  </Menu>
)
const SchedulePopover = () => (
  <Popover content={ScheduleMenu} position={Position.BOTTOM}>
    <button className='pt-button pt-minimal pt-icon-timeline-events'>Schedule</button>
  </Popover>
)

const ProfileMenu = (
  <Menu >
    <MenuItem iconName='pt-icon-log-out' onClick={noop} text='Logout'/>
  </Menu>
)

const ProfilePopover = () => (
  <Popover content={ProfileMenu} position={Position.BOTTOM}>
    <button className='pt-button pt-minimal pt-icon-user'></button>
  </Popover>
)

const Navbar = () => (
  <nav className='pt-navbar pt-dark pt-fixed-top'>
    <div className='pt-navbar-group pt-align-left'>
      <div className='pt-navbar-heading'>Theaters app</div>
      <span className='pt-navbar-divider'></span>
      <input className='pt-input' placeholder='Search plays...' type='text' />
      <span className='pt-navbar-divider'></span>
      <button className='pt-button pt-minimal pt-icon-tick-circle'>All</button>
      <SchedulePopover />
      <button className='pt-button pt-minimal pt-icon-bookmark'>Saved</button>
      
    </div>
    <div className='pt-navbar-group pt-align-right'>
      <span className='pt-navbar-divider'></span>
      <ProfilePopover />
    </div>
  </nav>
)

export default Navbar
