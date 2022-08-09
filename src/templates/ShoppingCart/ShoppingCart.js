import React from 'react';
import './ShoppingCart.scss';
import { BsArrowLeftSquare } from "react-icons/bs";

import {ShoppingCartProduct} from '../../Components/ShoppingCartProduct/ShoppingCartProduct';



function ShoppingCart(props) {
    

    const totalPrice = (cart) => {
        let price = 0;
        cart.map(element => {
            price = price + element.price;
        });
        return price;
    }

    return (
            <div className={`ShoppingCartContainer ${props.toggleCart && "visibleShoppingCartContainer"}`}>
                <div className='ShoppingCartContainer__header'>
                    <BsArrowLeftSquare className='ShoppingCartContainer__header-iconBack'/>
                    <p className='ShoppingCartContainer__header-title'>Shopping Cart</p>
                </div>
                <div className='ShoppingCartContainer__products'>
                    { props.products.map(item => (
                        <ShoppingCartProduct 
                            item={item}
                            title={item.title}
                            imageURL={item.images[0]}
                            price={item.price}
                            key={`productId-${item.id}`}
                        />
                    ))}
                </div>
                <div className='ShoppingCartContainer__resumeCart'>
                    <p>Total</p>
                    <p>{totalPrice(props.products)}</p>
                </div>
                <button className='buttonWithBackground'>Checkout</button>
            </div>
    );
}

export {ShoppingCart};