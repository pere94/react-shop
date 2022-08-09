import React from 'react';
import './ProductGrid.scss';
import { BsCartPlus } from 'react-icons/bs';
import {AppContext} from '../../Context/AppContext';


function ProductGrid(props) {
    const { addToCart } = React.useContext(AppContext);

    return(
        <div className="ProductGrid">
            <img title={props.title} src={props.imageURL} className='ProductGrid__img' />
            <div className='ProductGrid__info'>
                <div className="ProductGrid__info-left">
                    <p className="ProductGrid__left-price">{props.currency} {props.price}</p>
                    <p title={props.title} className="ProductGrid__left-name"> {props.title}</p>
                </div>
                
                
                <div className='ProductGrid__info-right'>
                    <span onClick={() => addToCart(props.product)} className="ProductGrid__right-cart">
                        <BsCartPlus className='cart'/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export { ProductGrid };