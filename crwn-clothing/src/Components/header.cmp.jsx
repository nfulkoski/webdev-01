import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../Firebase/firebase.utils.js'

import './header.styles.scss'

import { ReactComponent as Logo } from '../Assets/crown.svg'

const Header = ({ currentUser }) => (

  <div className = 'header'>

    <Link className = 'logo-container' to = "/">

      <Logo className = 'logo' to = '/'/>

    </Link>

    <div className = 'options'>

    <Link className = 'option' to = '/shop'> SHOP </Link>

    <Link className = 'option' to = '/contact'> CONTACT </Link>

    {
    currentUser ?
      <div className = 'option' onClick = {() => auth.signOut() }> Sign out </div>
      :
      <Link className = 'option' to = '/signin'> Sign in </Link>
    }

    </div>

  </div>

)

export default Header;
