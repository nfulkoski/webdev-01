import React from 'react';
import  { Route, Switch } from 'react-router-dom';

import './App.css'

import Home from './Pages/home.cmp.jsx'
import Shop from './Pages/shop.cmp.jsx'
import Header from './Components/header.cmp.jsx'

function App() {

  return (

    <div>

      <Header />

      <Switch>
        <Route exact path = '/' component = { Home } />
        <Route path = '/shop' component = { Shop } />
      </Switch>

    </div>

  );
  
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

*/
