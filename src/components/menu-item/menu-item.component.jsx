

import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({titel, imageUrl}) => (

    <div style={{
        backgroundImage: 'url( '+imageUrl+')'
 }}
    className='menu-item'
    
    >
      
    <div className='content'>

       <h1 className='title'>{titel }</h1>
        <span className='subtitle'>SHOP NOW</span>
        <span className='subtitle'> Rea 20% </span>
    </div>

</div>
);
            
export default MenuItem;