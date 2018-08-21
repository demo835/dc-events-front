import React, { Component } from 'react'
import {
    Route,
    Switch
  } from 'react-router-dom'
import axios from 'axios'
import Events from './Events'

class App extends Component {
  constructor() {
    super()

    this.state = {
        events: {}
    }
  }

  componentDidMount() {
      axios.get("http://localhost:3001/events")
      .then(data => {
        console.log("get event data is from axios...")
        console.log(data.data[0])
        this.setState({events: data.data[0]})
        console.log(this.state.events)
    })
  }

  render() {
    return (
      <div>
        <h1>DC Events Front End</h1>
        <p>+Events</p>
        <p>+Venues</p>
        <div className='body'>
        <Switch>
              <Route path='/'
                render={(props) => {
                  return (
                    <Events events={this.state.events}/>
                  )
                }}
              />
            </Switch>
      </div>
      </div>
    );
  }
}

export default App
