import React from 'react';

import './form-button.styles.scss'

const FormButton = ({ children, ...otherButtonProps }) => (

  <button ClassName = 'custom-button' { ...otherButtonProps }>
    { children }
  </button>

);

export default FormButton;
