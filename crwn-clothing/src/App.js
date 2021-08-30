import React from 'react';
import  { Route, Switch } from 'react-router-dom';

import './App.css'

import Header from './Components/header.cmp.jsx'

import Home from './Pages/home.cmp.jsx'
import Shop from './Pages/shop.cmp.jsx'
import Signin from './Pages/signin.cmp.jsx'

import { auth } from './Firebase/firebase.utils'


class App extends React.Component {

constructor() {

  super();

  this.state = {

    currentUser: null

  }

}

unsubscribeFromAuth = null


componentDidMount() {

  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

    this.setState({ currentUser: user})

    console.log(user)

  });

}

componentWillUnmount() {

  this.unsubscribeFromAuth();

}


render() {
  return (

    <div>

      <Header currentUser = { this.state.currentUser } />

      <Switch>
        <Route exact path = '/' component = { Home } />
        <Route path = '/shop' component = { Shop } />
        <Route path = '/signin' component = { Signin } />
      </Switch>

    </div>

  );

}

}

export default App;



/*
Learning

- Recall that React builds a single page application (SPA)

- Switch will select the first Route where path matches
- Unless use <Route exact ... /> at which point exact path required to follow that route

- Link will redirect to another route path by hijacking the url
- It's different to a standard link html which will request from the server and redraw the page which is more resource intensive
- basically its a HY serverless link
- Link example is <Link to = "/"> Home </Link><p/>

- - Linking can occur by the remainder of a url
- - - Such as /dlvcekrjnv/djlvnd/topics/13
- - - <Link to = {`${props.match.url}/13`}> to topics/13 </Link>
- - - In this way we would take to 13 regardless of all url components preceeding /topics/13

- Re-routing via a function e.g. activating an event such as button.onClick utilises props.history.push('link')
- Button re-routing example is: <button onClick = { () => history.push('/')}> Button! </button>

Firebase implementation
- In App.js we add auth functionality such that the app listens for auth state changes
- this needs to occur via a function set up in componentDidMount and to prevent memory leaks also in componentWillUnmount

*/
