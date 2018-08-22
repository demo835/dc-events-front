import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper #42a5f5 blue lighten-1">
          <a href="#" className="brand-logo">
            <Link to="/">DC Events</Link>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/add-event">+Event</Link>
            </li>
            <li>
              <Link to="/venue/new">+Venue</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
