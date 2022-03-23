import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: '12e1231e',
          name: 'Linda',
        },
        {
          id: 'sndajnjfk',
          name: 'Frank',
        },
        {
          id: 'sjkfjns',
          name: 'Jacky',
        },
        {
          id: '990u9802u3dnn',
          name: 'Andrei',
        },
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(({ id, name }) => {
          return (
            <h1 key={id}>{name}</h1>
          )
        })}
      </div>
    );
  }
}

export default App;
