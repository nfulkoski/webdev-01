import React from 'react'

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

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
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
            <FormButton type = 'submit'> Sign in </FormButton>
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
