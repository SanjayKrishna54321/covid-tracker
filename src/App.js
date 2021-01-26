import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import India from './Components/India';
import StateData from './Components/StateData';
import World from './Components/World';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>

        <Header/>

        <Switch>
          <Route exact path="/">
            <India/>
          </Route>
          <Route path="/india">
            <India/>
          </Route>
          <Route path="/world">
            <World/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;