import React from 'react';

import { connect } from 'react-redux'
import { toggleCartHidden } from '../Redux/cart/cart-actions.js'
import { selectCartItemsCount } from '../Redux/cart/cart-selectors.js'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../Assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => (

  <div className = 'cart-icon' onClick = { toggleCartHidden }>

    <ShoppingIcon className = 'shopping-icon' />
    <span className = 'item-count'> { itemCount }</span>

  </div>

)

const mapDispatchToProps = dispatch => ({

  toggleCartHidden: () => dispatch(toggleCartHidden())

});

const mapStateToProps = state => ({

itemCount: selectCartItemsCount(state)

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
