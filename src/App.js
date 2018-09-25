import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from './Project/Project';
import styles from './style/css/style.css'

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
