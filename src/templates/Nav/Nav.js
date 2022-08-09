import React from 'react';
import './Nav.scss';
import { TiThMenu } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

import {CartIcon} from '../../Components/CartIcon/CartIcon';
import {Logo} from '../../Components/Logo/Logo';
import {NavLinks} from '../../Components/NavLinks/NavLinks';
import {UserNav} from '../../Components/UserNav/UserNav';
import {LoggedMenu} from '../../Components/LoggedMenu/LoggedMenu';
import {ShoppingCart} from '../../templates/ShoppingCart/ShoppingCart';
import {AppContext} from '../../Context/AppContext';


function Nav() {
    const [toggle, setToggle] = React.useState(false);
    const [toggleCart, settoggleCart] = React.useState(false);
    const [activeBubbleMenu, setactiveBubbleMenu] = React.useState(true);
    const { state } = React.useContext(AppContext);

    return (
        <nav>
            <div className='navLeft'>
                <span onClick={() => setactiveBubbleMenu(!activeBubbleMenu)}>
                    {activeBubbleMenu ? 
                        <TiThMenu className='NavBarMovil__icon'/> : 
                        <AiOutlineClose className='NavBarMovil__icon'/>
                    }  
                </span>
                <Logo />
            </div>

            <div className='navRight'>
                <NavLinks activeBubbleMenu={activeBubbleMenu} />
                <div onClick={() => {setToggle(!toggle); settoggleCart(false)}} className='navRight__userInfo'>
                    <UserNav toggle={toggle} />
                    {<LoggedMenu toggle={toggle}/>}
                </div>

                <div onClick={() => {settoggleCart(!toggleCart); setToggle(false)}}>
                    <CartIcon />
                </div>
            </div>
            

            
                <ShoppingCart 
                    products={state.cart}
                    toggleCart={toggleCart}
                />
        </nav>
    );
}

export { Nav };