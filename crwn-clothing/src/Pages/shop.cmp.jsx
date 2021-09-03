import React from 'react';
import { Route } from 'react-router-dom'

import CollectionOverview from '../Components/collection-overview.cmp.jsx'
import Collection from './collection.cmp.jsx'

const Shop = ({ match }) => (

      <div className = 'shop-page'>

        <Route exact path = {`${match.path}`} component = { CollectionOverview } />
        <Route path = {`${match.path}/:categoryId`} component = { Collection }/>

      </div>

);




export default Shop;
