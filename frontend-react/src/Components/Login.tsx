import React, { useState } from 'react';
import { login } from '../services';

type Creds = {
  email: string;
  password: string;
}

export const Login = () => {
  const [creds, setCreds] = useState<Creds>({email: '', password: ''});
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const loginMeIn = () => {
    login(creds.email, creds.password).then(isLoggedIn => {
      if (!isLoggedIn) {
        setLoginFailed(true);
      }
    });
  }

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
            onChange={e => setCreds({...creds, email: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            onChange={e => setCreds({...creds, password: e.target.value})}
          />
        </div>
        {loginFailed ? (
          <div className="text-danger" style={{marginBottom: 10}}>Incorrect credentials</div>
        ) : null}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => loginMeIn()}
        >
          Login
        </button>
      </form>
    </div>
  );
}
