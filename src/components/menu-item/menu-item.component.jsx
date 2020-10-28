

import React from 'react';

import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({titel, imageUrl, history, LinkUrl, match}) => (

    <div style={{backgroundImage: 'url( '+imageUrl+')'
 }}
     className='menu-item'
    onClick = {() => history.push('+{match.url} + +{LinkUrl}+ ') }
    >
      
    <div className='content'>

       <h1 className='title'>{titel }</h1>
        <span className='subtitle'>SHOP NOW</span>
        <span className='subtitle'> Rea </span>
        <span className='subtitle'> 20% </span>

    </div>

</div>
);
            
export default withRouter (MenuItem);