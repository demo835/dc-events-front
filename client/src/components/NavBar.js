import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper #0d47a1 blue darken-4">
        <img src="../../images/bald-eagle-1.png" id="mascot" alt="mascot"></img>
          <a href="#" className="brand-logo">
            <Link to="/">DC Events</Link>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a className="#d32f2f red darken-2 waves-effect waves-light btn"><Link to="/add-event">+Event</Link></a>
            </li>
            <li>
            <a className="#d32f2f red darken-2 waves-effect waves-light btn"><Link to="/venue/new">+Venue</Link></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
