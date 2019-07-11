import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, bgImage, size }) => {
    
        return (
            <div className={`${size} menu-item`} >
                <div className="background-image"style = {{
                    backgroundImage: `url(${bgImage})`
                }} >
                </div>
                <div className='content'>
                    <div className='title'>{title.toUpperCase()}</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        )

}


export default MenuItem;
