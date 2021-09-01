import React from 'react';

import { connect } from 'react-redux'
import { addItem } from '../Redux/cart/cart-actions.js'

import './collection-item.styles.scss'

import FormButton from './form-button.cmp.jsx'

const CollectionItem = ({ item, addItem }) => {

const { imageUrl, name, price } = item;

  return (
      <div className = 'collection-item'>

        <div className = 'image'
             style = {{

               backgroundImage: `url(${imageUrl})`

             }}

        />

        <div className = 'collection-footer'>

            <span className = 'name'> { name } </span>
            <span className = 'price'> { price } </span>

        </div>

        <FormButton className = 'form-button' inverted onClick = { () => addItem(item) }> ADD TO CART </FormButton>

      </div>
  )

}

const mapDispatchToProps = dispatch => ({

  addItem: item => dispatch(addItem(item))

});

export default connect(null, mapDispatchToProps)(CollectionItem);
