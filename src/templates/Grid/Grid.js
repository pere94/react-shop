import React from 'react';
import './Grid.scss';

import {ProductGrid} from '../../Components/ProductGrid/ProductGrid';
import {useGetProducts} from '../../hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';

function Grid() {
    const products = useGetProducts(API);
    
    return(
        <div className="Grid">
            {products.map(item => (
                <ProductGrid 
                    imageURL={item.images[0]}
                    currency="€"
                    price={item.price}
                    title={item.title}
                    product={item}
                    key={item.id}
                />
            ))}
            
        </div>
    );
}

export { Grid };



