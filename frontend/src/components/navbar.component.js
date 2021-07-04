import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark dark navbar-expand-lg">
        <Link to="/" className="navbar-brand logo"><img src="logo.png" />RC - URL Shortener</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                     <Link to="/" className="nav-link"> Home</Link>
                  </li>
                  <li className="navbar-item">
                     <Link to="/show" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/about-us" className="nav-link">About Us</Link>
                  </li>
            </ul>
        </div>
      </nav>
    );
  }
}
