import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            DC Events
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="add-event">
                <a>+Event</a>
              </Link>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
