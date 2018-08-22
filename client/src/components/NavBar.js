import React, { Component } from "react";
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><Link to="/">DC Events</Link></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/add-event">+Event</Link></li>
            <li><Link to="/venue/new">+Venue</Link></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
