import React from 'react';
import './EditMyAccount.scss';

import {LabelInput} from '../../Components/LabelInput/LabelInput';

function EditMyAccount() {
    return (
        <div className="containerEditMyAccount">
            <h3 className="containerEditMyAccount__h3">My Account</h3>

            <LabelInput 
                className="containerEditMyAccount__name"
                textLabel="Name"
                // onChange={onChange}
                nameInput="Name"
                idInput="containerEditMyAccount__name"
                typeInput="text"
                placeholder="Rara Loareds"
            />

            <LabelInput 
                className="containerEditMyAccount__email"
                textLabel="Email"
                // onChange={onChange}
                nameInput="Email"
                idInput="containerEditMyAccount__email"
                typeInput="email"
                placeholder="email@yourdomain.com"
            />

            <LabelInput 
                className="containerEditMyAccount__password"
                textLabel="Password"
                // onChange={onChange}
                nameInput="EmaPasswordil"
                idInput="containerEditMyAccount__password"
                typeInput="password"
                placeholder="***********"
            />

            <button className='buttonWithoutBackground'>Edit</button>
            
        </div> 
    );
}

export {EditMyAccount};