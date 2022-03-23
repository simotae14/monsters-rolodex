import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          return {
            monsters: users
          };
        },
        () => {
          console.log(this.state.monsters);
        }
      )
    );
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(({ id, name }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
