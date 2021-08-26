import React, { Component } from 'react';
import './components/card-list/card-list.styles.css'
import './App.css';

import { CardList } from './components/card-list/card-list.cmp.jsx'
import { SearchBox } from './components/search-box/search-box.cmp.jsx'

class App extends Component {

  constructor() {
    super();

    this.state = {

      monsters: [  ],

      searchField: ''

    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {

    this.setState({ searchField: e.target.value });

  };

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
    <div className='App'>
      <h1> Monsters rolodex </h1>
      <SearchBox
        placeholder = 'Search monsters'
        handleChange = { this.handleChange }
      />

      <CardList monsters = { filteredMonsters }> </CardList>

    </div>
    )

  }

}

export default App;

/*
Learning
- setState is an asynchronous term i.e. javascript doesnt wait for its completion before executing next code.
-  - thus pass setState(attr, fin) where fin is a function run when setState finishes.

- destructure via const { a, b } = this.group
- - equivalent of const a = this.group.a   followed by const b = this.group.b

- functional components dont have access to life cycle methods or states however their code is easier to read and write
- i.e. export const XyZ = () => () vs class XyZ extends Component { }
*/
