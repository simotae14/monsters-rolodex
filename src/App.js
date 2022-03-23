import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
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
  onSearchChange = (event) => {

    this.setState(() => {
      return {
        searchField: event.target.value
      };
    })
  };
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="App">
        <input
          onChange={this.onSearchChange}
          className='search-box'
          type='search'
          placeholder='search monsters'
        />
        {filteredMonsters.map(({ id, name }) => {
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
