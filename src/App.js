import React, { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  return(
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

/*
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

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
*/
export default App;
