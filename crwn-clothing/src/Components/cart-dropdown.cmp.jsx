import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import FormButton from './form-button.cmp.jsx';
import CartItem from './cart-item.cmp.jsx';
import { selectCartItems } from '../Redux/cart/cart-selectors.js'

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <FormButton>GO TO CHECKOUT</FormButton>
  </div>
);

const mapStateToProps = createStructuredSelector({

  cartItems: selectCartItems

});

export default connect(mapStateToProps)(CartDropdown);