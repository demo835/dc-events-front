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

    }
  }

  componentDidMount() {
      axios.get("http://localhost:3001/events")
      .then(data => {
        console.log("data is from axios...")
        console.log(data)
    })
    // fetch("http://localhost:3001/events")
    // .then(res => res.json())
    // .then(data => {
    //     console.log("data is")
    //     console.log(data)
    //     // let items = []
    //     // for(let i = 0; i < data.length; i++)
    //     // {
    //     //     items[i] = data[i]
    //     // }
    //     // this.setState({response: data[0].condition})
    //     // this.setState({id: data[0]._id})
    // })
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
                    <Events />
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
