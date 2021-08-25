import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.cmp.jsx'
import './components/card-list/card-list.styles.css'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

      monsters: [  ]

    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return(
    <div className='App'>
    <CardList name='test'>
    {this.state.monsters.map(monster => (
        <h1 key={monster.id} className='card-list'> { monster.name } </h1>
      ))}
      </CardList>
    </div>
  )
  }

}

export default App;
