import React from 'react'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGoogle } from '../Firebase/firebase.utils.js'

import FormInput from '../Components/form-input.cmp.jsx'
import FormButton from '../Components/form-button.cmp.jsx'

import './signin.styles.scss'



class Signin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {

    event.preventDefault();

    const { email, password } = this.state;
    const auth = getAuth()

    try {

      await signInWithEmailAndPassword(auth, email, password);
    this.setState({ email: '', password: '' });

  } catch (e) {

    console.log(e)

  }




  };

  handleChange = event => {

    const { value, name } = event.target;
    this.setState({ [name]: value });

  };



  render() {

    return(

      <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
              <div className = 'buttons'>
              <FormButton type = 'submit'> Sign in </FormButton>
              <FormButton type = 'button' onClick = { signInWithGoogle } isGoogleSignIn> Sign in with Google </FormButton>
              </div>
          </form>

        </div>

    )

  }


}

export default Signin;



/*

Learning
- dynamically set state in event function from input fields via these two lines
- -     const { value, name } = event.target;
- -     this.setState({ [name]: [value] })

*/
