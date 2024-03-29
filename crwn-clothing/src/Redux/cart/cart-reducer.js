import { CartActionTypes } from './cart-types.js'
import { addItemToCart } from './cart-utils.js'

const INITIAL_STATE = {

  hidden: true,
  cartItems: [ ]

};

const cartReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {

        ...state,
        hidden: !state.hidden

      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        };

      default:
        return state;


  }

}

export default cartReducer;
