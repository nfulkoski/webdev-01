import React from 'react';
import MenuItem from './menu-item.cmp.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../Redux/directory/directory-selectors.js';

import './directory.styles.scss';

const Directory = ({ sections }) => (

  <div className = 'directory-menu'>
  { sections.map(({id, ...otherProps}) => (<MenuItem key = { id } { ...otherProps }/>)) }
  </div>

);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);


/*
Learning

- Notice we're destructuring out now 5 items as sections.map(({id, title, imageUrl, size, linkUrl})
- ES6 trick: utilise ...propsGroupName such as otherSectionProps
- It works because the MenuItem parameters have the same name as the array parameters.

*/
