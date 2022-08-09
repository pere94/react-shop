import React from 'react';
import './NavLinks.scss';


function NavLinks(props) {
    return (
        <React.Fragment>
            <ul className={`NavBar__NavLinks NavBarMov__NavLinks  ${(props.activeBubbleMenu && 'hide')}`  } >
                <li className='NavBar__NavLinks__item'><a href="/">All</a></li>
                <li className='NavBar__NavLinks__item'><a href="/nav">Clothes</a></li>
                <li className='NavBar__NavLinks__item'><a href="#">Electronics</a></li>
                <li className='NavBar__NavLinks__item'><a href="#">Furnitures</a></li>
                <li className='NavBar__NavLinks__item'><a href="#">Toys</a></li>
                <li className='NavBar__NavLinks__item'><a href="#">Others</a></li>
            </ul>
        </React.Fragment>
    );
}

export { NavLinks };