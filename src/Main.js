import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllPlays } from './actions'
import PlaysList from './plays/PlaysList'

class Main extends Component {
  componentDidMount () {
    const { pathname, fetchAllPlays } = this.props
    const action = {
      '/': fetchAllPlays
    }[pathname]
    action && action()
  }
  render () {
    return (
      <div>
        <PlaysList plays={this.props.plays} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pathname: state.routing.location.pathname,
  plays: state.plays
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllPlays
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)