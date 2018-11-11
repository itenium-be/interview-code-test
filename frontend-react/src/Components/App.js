import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Header.js';
import { Dashboard } from './Dashboard.js';
import { Assignment } from './Assignment.js';
import { Login } from './Login.js';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route path="/" exact component={Dashboard} />
          <Route path="/assignment/" component={Assignment} />
          <Route path="/login/" component={Login} />
        </div>
      </Router>
    );
  }
}
