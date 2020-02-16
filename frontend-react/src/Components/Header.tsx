import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">itenium</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavbarLink to="/" text="Dashboard" />
          <NavbarLink to="/assignment/" text="Assignment" />
          <NavbarLink to="/login/" text="Login" />

          <li className="nav-item dropdown" style={{display: 'none'}}>
            <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Language
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">English</a>
              <a className="dropdown-item" href="/">Dutch</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" style={{display: 'none'}}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}


const NavbarLink = ({text, to}) => (
  <li className="nav-item active">
    <Link to={to} className="nav-link">{text}</Link>
  </li>
);
