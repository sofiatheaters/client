import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'

const theatersUrl = 'https://next.json-generator.com/api/json/get/4yKd2-QAX'

class App extends Component {

  state = {
    plays: null
  }

  componentDidMount() {
    this.fetchTheaters()
  }

  async fetchTheaters() {
    const plays = await fetch(theatersUrl).then(r=>r.json())
    this.setState({ plays })
  }

  render() {

    const { plays } = this.state
    if (!plays)
      return (
        <h1>Loading...</h1>
      )

      const theatersList =
        <ul>
          {
            plays.map( play => (
              <li>
                {play.name}
              </li>
            ))
          }
        </ul>

    return (
      <div className="App">
        <Navbar />
        { theatersList }
      </div>
    )
  }
}

export default App
