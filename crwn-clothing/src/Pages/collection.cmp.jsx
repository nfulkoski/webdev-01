import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../Components/collection-item.cmp.jsx'

import './collection.styles.scss'

import { selectCollectionsForPreview } from '../Redux/shop/shop-selectors.js'

const Collection = ({ collection }) => {

  const { title, items } = collection;

  return (

    <div className = 'collection-page'>
      <h2 className = 'title'> { title } </h2>

      <div className = 'items'>
        {
            items.map(item => (<CollectionItem key = { item.id } item = { item } />))
        }
      </div>
    </div>

  )

}

const mapStateToProps = (state, ownProps) => ({

  collection: selectCollectionsForPreview(ownProps.match.params.collectionId)

})

export default connect(mapStateToProps)(Collection);


/*
Learning

ownProps in mapStateToProps gets stuff from the react component as const X = ({ stuff }) => ()
*/
