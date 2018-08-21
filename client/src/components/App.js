import React, { Component } from 'react'
import Events from './Events'

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>DC Events Front End</h1>
        <p>+Events</p>
        <p>+Venues</p>
        <Events />
      </div>
    );
  }
}

export default App;
