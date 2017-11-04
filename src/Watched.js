import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Switch} from '@blueprintjs/core'
import { filterWatched } from './actions'

class Watched extends Component {

  onChange(e) {
    this.props.filterWatched(e.target.checked)
  }

  render () {
    return (
      <Switch defaultChecked={this.props.watched} label="Watched" onChange={this.onChange.bind(this)} />
    )
  }
}

const mapStateToProps = state => ({
  watched: state.watched
})

const mapDispatchToProps = dispatch => bindActionCreators({
  filterWatched
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Watched)
