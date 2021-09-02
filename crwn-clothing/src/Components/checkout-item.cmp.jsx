import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../Redux/cart/cart-actions.js'

import './checkout-item.styles.scss'

const CheckoutItem = ({ item, removeItem }) => {

const { imageUrl, name, price, quantity } = item;

  return(
    <div className = 'checkout-item'>
      <div className = 'image-container'> <img src = { imageUrl } alt = 'item' /> </div>
      <div className = 'name'>{ name }</div>
      <div className = 'quantity'>
        <span>{'  <  '}</span>
        { quantity }
        <span>{`  >  `}</span>
      </div>
      <div className = 'price'>${ price }</div>
      <div className = 'remove-button' onClick = { () => removeItem(item)}>X</div>
    </div>
  )

}

const mapDispatchToProps = dispatch => ({

  removeItem: item => dispatch(removeItem(item))

});

export default connect(null, mapDispatchToProps)(CheckoutItem);
