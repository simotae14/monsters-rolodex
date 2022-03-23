import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
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
          console.log(this.state);
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
    const {
      monsters,
      searchField,
    } = this.state;
    const {
      onSearchChange,
    } = this;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <input
          onChange={onSearchChange}
          className='search-box'
          type='search'
          placeholder='search monsters'
        />
        {/*filteredMonsters.map(({ id, name }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
            </div>
          )
        })*/}
        <CardList />
      </div>
    );
  }
}

export default App;
