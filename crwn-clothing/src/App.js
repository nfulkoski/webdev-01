import React from 'react';
import  { Route, Switch, Redirect } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore'

import './App.css'

import Header from './Components/header.cmp.jsx'

import Home from './Pages/home.cmp.jsx'
import Shop from './Pages/shop.cmp.jsx'
import Authpage from './Pages/authpage.cmp.jsx'

import { auth, createUserProfileDocument } from './Firebase/firebase.utils'

import { connect } from 'react-redux'
import { setCurrentUser } from './Redux/user/user-actions.js'


class App extends React.Component {

unsubscribeFromAuth = null


componentDidMount() {

  const { setCurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth) {

      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, (snap) => {

        console.log(snap.data());

        setCurrentUser({

            id: snap.id,
            ...snap.data()

        });

      });

        } else {

          setCurrentUser(userAuth);

        }

  });

}

componentWillUnmount() {

  this.unsubscribeFromAuth();

}


render() {

    return (

      <div>

        <Header currentUser/>

        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/shop' component = { Shop } />
          <Route exact path = '/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<Authpage />)} />
        </Switch>

      </div>

    );

  }

}

const mapStateToProps = ({ user }) => ({

  currentUser: user.currentUser

});

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(App);



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


setState is asynchronous
- this.setstate(state) followed by console.log(this.state) will report state prior e.g. state undefined
- use this.setstate(state, then) where then is a fx: this.setState(state, () => { console.log(this.state)})

unsubscribeFromAuth
- notice the listener is set up in componentDidMount but the function itself is called in componentWillUnmount

*/
