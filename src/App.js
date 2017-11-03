import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'

const App = () => (
  <div>
    <Navbar />
    <main>
      <Route exact path="/" component={Main} />
      <Route exact path="/schedule/day" component={Main} />
      <Route exact path="/schedule/week" component={Main} />
      <Route exact path="/schedule/month" component={Main} />
      <Route exact path="/schedule/twomonths" component={Main} />
      <Route exact path="/saved" component={Main} />
    </main>
  </div>
)

export default App