import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from './Project/Project';
import './terra/terra.css';

// 835440083893592

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Route path="/:projectId" component={Project} />
        </div>
      </Router>
    );
  }
}

export default App;
