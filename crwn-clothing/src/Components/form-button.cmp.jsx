import React from 'react';

import './form-button.styles.scss';

const FormButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default FormButton;
