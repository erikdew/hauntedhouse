import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import AddToCreatures from './components/add-to-creatures'


const BASE_URL = 'http://localhost:3005'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      creatures: []



    }

  }

  componentDidMount() {
    axios.get(BASE_URL + '/creatures').then(res => {
      this.setState({ creatures: res.data })

    })
  }

  addCreature = (creature) => {
    axios.post(BASE_URL + '/creatures', { ...creature }).then(res => {
      this.setState({ creatures: res.data })
    })
  }

  removeCreature = (creature) => {
    console.log('its deleting stuff!')
    axios.delete(BASE_URL + '/creatures/id', { ...creature }).then(res => {
      this.setState({ creatures: res.data })
    })
  }

  render() {
    return (
      <div className="App">
        <AddToCreatures onClick={this.addCreature} />
        <div>
          {this.state.creatures.map((creature) => {
            return (
              <div key={creature.image_url}>
                <h1>{creature.name}</h1>
                <img src={creature.image_url} alt="description" />
                <h3>{creature.scary.level}</h3>
                <button onClick={this.removeCreature}>Delete</button>
              </div>

            )


          })

          }</div>
      </div>
    );
  }
}

export default App;
