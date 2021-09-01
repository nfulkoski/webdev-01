import { CartActionTypes } from './cart-types.js'

export const toggleCartHidden = () => ({

  type: CartActionTypes.TOGGLE_CART_HIDDEN

});

export const addItem = item => ({

  type: CartActionTypes.ADD_ITEM,
  payload: item

});

/*
Learning

- Actions have a type and a payload
- type tells the reducer what we're trying to do
- payload can be anything we want, e.g. empty, or an item object, etc
*/
