import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'


const MenuItem = ({ title, imageUrl, size, linkUrl, history, match}) => (

  <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
  <div
    className='background-image'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
  />

      <div className = 'content'>
        <h1 className = 'title'> { title.toUpperCase() } </h1>
        <span className = 'subtitle'> SHOP NOW </span>
      </div>

  </div>

);

export default withRouter(MenuItem);


/*
Learning
- we destructured props.title as { title } in MenuItem = ({title})

- withRouter is a higher order component. I.e. its a fx that takes a component as an arg and it returns a modified component.
- Think of withRouter as specifically a fx that gives access to items related to the router.
- I.e. it gives access to the location, match and history props we need
- To implement: export default withRouter(Component); as per above
- It prevents prop drilling - i.e. passing down props via multiple child components that dont need them
- Creates dev issues and probably is inefficient too
*/
