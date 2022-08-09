import React from 'react';
import './NotFound.scss';
import img_404 from '../../img/404.webp';


function NotFound() {
    return (
        <div className="container404">
            <img className='container404__img' src={img_404} alt='404'/>
            <h3 className='container404__h3'><a href='/'>Back to HompPage</a></h3>    
        </div> 
    );
}

export {NotFound};