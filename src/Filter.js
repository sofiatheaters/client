import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterPlays } from './actions'

class Filter extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.props.filterPlays(e.target.value)
  }

  render () {
    return (
      <input id="filter-input" className='pt-input' placeholder='Search plays...' type='text' onChange={this.onChange} />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  filterPlays
}, dispatch)

export default connect(null, mapDispatchToProps)(Filter)
