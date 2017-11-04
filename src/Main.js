import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllPlays } from './actions'
import PlaysList from './plays/PlaysList'
import { getFilteredPlays } from './selectors'
import Loader from './Loader'

class Main extends Component {
  componentDidMount () {
    const { pathname, fetchAllPlays } = this.props
    const action = {
      '/': fetchAllPlays
    }[pathname]
    action && action()
  }
  render () {
    const { fetching } = this.props
    return (
      <div>
        { fetching
          ? <Loader />
          : <PlaysList plays={this.props.plays} />
         }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pathname: state.routing.location.pathname,
  plays: getFilteredPlays(state.plays, state.filter, state.watched),
  fetching: state.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllPlays
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
