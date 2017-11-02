import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Navbar'

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <h1 onClick={this.props.changePage}>Home</h1>
    )
  }
}
const dispatch1 = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

const hc = connect(null, dispatch1)(Home)

class About extends Component {
  render () {
    return (
      <h1 onClick={this.props.changePage}>About</h1>
    )
  }
}
const dispatch2 = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

const ac = connect(null, dispatch2)(About)

const App = () => (
  <div>
    <Navbar />
    <main>
      <Route exact path="/" component={hc} />
      <Route exact path="/about" component={ac} />
    </main>
  </div>
)

export default App