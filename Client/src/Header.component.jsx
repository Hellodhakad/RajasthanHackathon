import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
      //this return jsx
      return (
        <nav>
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo">&nbsp;&nbsp;&nbsp;Rajasthan Tourism</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </ul>
        </div>
      </nav>
      );
    }
  }

  export default Header