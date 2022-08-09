import React from 'react';
import './Logo.scss';
import logo from '../../img/logo_yard_sale.svg';

function Logo() {
    return (
        <React.Fragment>
            <img className='navBar_logo' src={logo} />
        </React.Fragment>
    );
}

export { Logo };