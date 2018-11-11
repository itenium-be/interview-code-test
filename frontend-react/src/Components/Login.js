import React, { Component } from 'react';
import { login } from '../services.js';

export class Login extends Component {
  constructor() {
    super();
    this.state = {email: '', password: ''};
  }

  login() {
    login(this.state.email, this.state.password).then(isLoggedIn => {
      if (isLoggedIn) {
        this.props.history.push('/');
      }
    });
  }

  render() {
    return (
      <div style={{width: 400, margin: 'auto'}}>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              onChange={e => this.setState({password: e.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.login()}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
