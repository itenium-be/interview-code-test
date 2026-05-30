import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { Assignment } from './Assignment';
import { Login } from './Login';

export const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <div className="container">
          <Route path="/" exact component={Dashboard} />
          <Route path="/assignment/" component={Assignment} />
          <Route path="/login/" component={Login} />
        </div>
      </div>
    </Router>
  );
}
