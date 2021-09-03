import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from './collection-preview.cmp.jsx';

import { selectCollectionsForPreview } from '../Redux/shop/shop-selectors.js'

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => (

  <div className = 'collections-overview'>

  {

    collections.map(({ id, ...otherCollectionProps }) => (

      <CollectionPreview key = {id} { ... otherCollectionProps } />

    ))

  }

  </div>

)


const mapStateToProps = createStructuredSelector({

  collections: selectCollectionsForPreview

})


export default connect(mapStateToProps)(CollectionOverview);
