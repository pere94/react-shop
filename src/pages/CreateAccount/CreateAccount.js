import React from 'react';
import './CreateAccount.scss';

import {LabelInput} from '../../Components/LabelInput/LabelInput';


function CreateAccount() {
    return (
        <div className="containerCreateAccount">
            <h3 className="containerCreateAccount__h3">My Account</h3>

            <LabelInput 
                className="containerCreateAccount__name"
                textLabel="Name"
                // onChange={onChange}
                nameInput="Name"
                idInput="containerCreateAccount__name"
                typeInput="text"
                placeholder="Rara Loareds"
            />

            <LabelInput 
                className="containerCreateAccount__email"
                textLabel="Email"
                // onChange={onChange}
                nameInput="Email"
                idInput="containerCreateAccount__email"
                typeInput="email"
                placeholder="email@yourdomain.com"
            />

            <LabelInput 
                className="containerCreateAccount__password"
                textLabel="Password"
                // onChange={onChange}
                nameInput="password"
                idInput="containerCreateAccount__password"
                typeInput="password"
                placeholder="************"
            />

            <button className='buttonWithBackground'>Create</button>
            
        </div> 
    );
}

export {CreateAccount};