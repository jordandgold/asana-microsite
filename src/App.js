import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from './Project/Project';
import styles from './style/css/style.css';
import logo from './logo.png';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <nav className="ter-navbar" role="navigation">
          <div className="container-fluid">
              <a href="/" className="ter-navbar__brand">
                <img src={logo} alt="logo" />
              </a>
          </div>
        </nav>
        <Router>
          <Route path="/:projectId" component={Project} />
        </Router>
      </div>
    );
  }
}

export default App;
