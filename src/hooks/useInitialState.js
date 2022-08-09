import React from 'react';

const initialState = {
    cart: [],
};

function useInitialState() {
    const [state, setState] = React.useState(initialState);

    const addToCart = (payload) => {
        if(state.cart.includes(payload)) {
            setState({
                ...state,
            });
        } else {
            setState({
                ...state,
                cart: [...state.cart, payload],
            });
        }
    }
    
    const removeFromCart = (payload) => {
        if(state.cart.includes(payload)){
            setState({
                ...state,
                cart: state.cart.filter(item => item.id != payload.id),
            });
        } else {
            setState({
                ...state,
            });
        }
    }

    return {
        state,
        addToCart,
        removeFromCart,
    };
}

export {useInitialState};