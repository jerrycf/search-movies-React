import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
      return (
      <div className="App">
        {/* <Router> */}
          <Switch>
            {/* <Route exact={true} path='/'> <Home /> </Route> */}
            <Route exact={true} path='/' component={Home} />
            {/* <Route path='/detail/:id'> <Detail /></Route> */}
            <Route path='/detail/:id' component={Detail} />
          </Switch>
        {/* </Router> */}
      </div>
    )
  }
}

export default App;
