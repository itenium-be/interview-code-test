import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/assignment/">Assignment</Link>
          </li>
          <li>
            <Link to="/login/">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
