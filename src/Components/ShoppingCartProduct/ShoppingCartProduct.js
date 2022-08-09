import React from 'react';
import './ShoppingCartProduct.scss';
import { CgCloseR } from "react-icons/cg";
import {AppContext} from '../../Context/AppContext';


// const pro = JSON.parse(`{
//     "id": 4,
//     "title": "Small Wooden Pizza",
//     "price": 32,
//     "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
//     "category": {
//     "id": 5,
//     "name": "Others",
//     "image": "https://api.lorem.space/image?w=640&h=480&r=1108"
//     },
//     "images": [
//     "https://api.lorem.space/image?w=640&h=480&r=4367",
//     "https://api.lorem.space/image?w=640&h=480&r=2840",
//     "https://api.lorem.space/image?w=640&h=480&r=5867"
//     ]
// }`);

// console.log(pro);

function ShoppingCartProduct(props) {
    const {removeFromCart} = React.useContext(AppContext);

    return (
        <React.Fragment>
            <div className="ShoppingCartProductContainer">
                <img title={props.title} src={props.imageURL} className='ShoppingCartProduct__img' />
                <p title={props.title} className="ShoppingCartProduct__name"> {props.title}</p>
                <p className="ShoppingCartProduct__price">{`$`} {props.price}</p>
                <span onClick={() => removeFromCart(props.item)}>
                    <CgCloseR className='ShoppingCartProductContainer__delete'/>
                </span>
            </div>
        </React.Fragment>
        
    );
}

export {ShoppingCartProduct};



