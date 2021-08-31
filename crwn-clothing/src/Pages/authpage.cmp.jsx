import React from 'react';

import Signin from '../Components/signin.cmp.jsx'
import Signup from '../Components/signup.cmp.jsx'

import './authpage.styles.scss'


const Authpage = () => (

  <div className = 'authpage'>

    <Signin />
    <Signup />

  </div>

);

export default Authpage;
