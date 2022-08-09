import React from 'react';
import './CartIcon.scss';
import { BsCartCheck } from 'react-icons/bs';
import {AppContext} from '../../Context/AppContext';


function CartIcon() {
    const { state } = React.useContext(AppContext);
    return(
        <div className="CartIconContainer">
            <BsCartCheck className='CartIconContainer__icon' />
            <p className='CartIconContainer__counter'>{state.cart.length}</p>
        </div>
    );
}

export { CartIcon };