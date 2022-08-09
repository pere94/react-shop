import React from 'react';
import axios from 'axios';


function useGetProducts(API) {
    const [products, setProducts] = React.useState([]);
    
    React.useEffect( () => {
        async function getProduct() {
            const resp = await axios.get(API);
            // console.log(resp.data);
            setProducts(resp.data);
        }

        getProduct();
    }, []);

    return products;
}

export {useGetProducts};