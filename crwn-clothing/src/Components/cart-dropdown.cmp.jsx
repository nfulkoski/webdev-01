import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';

import FormButton from './form-button.cmp.jsx';
import CartItem from './cart-item.cmp.jsx';

import { selectCartItems } from '../Redux/cart/cart-selectors.js'
import { toggleCartHidden } from '../Redux/cart/cart-actions.js'

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {

        cartItems.length ?
        (cartItems.map(cartItem =>
        <CartItem key={cartItem.id} item={cartItem} />
        ))
        :
        (<span className = 'empty-message'> Your cart is empty </span>)

      }
    </div>
    <FormButton onClick = { () => {

      history.push('/checkout')
      dispatch(toggleCartHidden())

    }}>GO TO CHECKOUT</FormButton>
  </div>
);

const mapStateToProps = createStructuredSelector({

  cartItems: selectCartItems

});

export default withRouter(connect(mapStateToProps)(CartDropdown));
