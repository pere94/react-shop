import React from 'react';
import './LoggedMenu.scss';

function LoggedMenu(props) {
    return(
        <div className={`LoggedMenuContainer ${props.toggle && "visible"}`}>
            <a href="#">My Order</a>
            <a href="/my-account">My Account</a>
            <a href="#">Sign Out</a>
        </div>
    );
}

export { LoggedMenu };