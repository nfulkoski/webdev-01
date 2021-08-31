import React from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserProfileDocument } from '../Firebase/firebase.utils.js'

import FormInput from '../Components/form-input.cmp.jsx'
import FormButton from '../Components/form-button.cmp.jsx'

import './signup.styles.scss'

class Signup extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''

    }

  }

  handleSubmit = event => {

    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {

      alert(" Passwords don't match")
      return;

    }

    try {

      const auth = getAuth();

      const { user } = createUserWithEmailAndPassword(auth, email, password);

      createUserProfileDocument(user, { displayName });

      this.setState({

        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''

      })

    } catch(e) {

      console.error(e)

    }

  };

  handleChange = event => {

    const { value, name } = event.target;
    this.setState({ [name]: value });

  };

  render() {

    const { displayName, email, password, confirmPassword } = this.state;

    return(

      <div className = 'sign-up'>

      <h2 className = 'title'> I don't have an account </h2>

      <span> Sign up with your email and password </span>

      <form className = 'sign-up-form' onSubmit = { this.handleSubmit }>

        <FormInput
          type = 'text'
          name = 'displayName'
          value = { displayName }
          onChange = { this.handleChange }
          label = 'Display name'
          required
        />

        <FormInput
          type = 'email'
          name = 'email'
          value = { email }
          onChange = { this.handleChange }
          label = 'Email'
          required
        />

        <FormInput
          type = 'password'
          name = 'password'
          value = { password }
          onChange = { this.handleChange }
          label = 'Password'
          required
        />

        <FormInput
          type = 'password'
          name = 'confirmPassword'
          value = { confirmPassword }
          onChange = { this.handleChange }
          label = 'Confirm password'
          required
        />

        <FormButton type = 'submit'> SIGN UP </FormButton>

      </form>

      </div>

    )

  }

}

export default Signup
