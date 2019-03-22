import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import Detail from './Detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/detail' component={Detail}/>
        </Router>
      </div>
    )
  }
}

export default App
