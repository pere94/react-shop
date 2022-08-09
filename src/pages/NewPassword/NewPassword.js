import React from 'react';
import './NewPassword.scss';

import {LabelInput} from '../../Components/LabelInput/LabelInput';

function NewPassword() {
    return (
        <div className="containerNewPassword">

            <h3 className="containerNewPassword__h3">Create a new password</h3>
            <p className="containerNewPassword__p">Enter a new password for your account</p>

            <LabelInput 
                className="containerNewPassword__password"
                textLabel="Password"
                // onChange={onChange}
                nameInput="Password"
                idInput="containerNewPassword__password"
                typeInput="password"
                placeholder="**************"
            />

            <LabelInput 
                className="containerNewPassword__reEnterPassword"
                textLabel="Re-enter Password"
                // onChange={onChange}
                nameInput="RePassword"
                idInput="containerNewPassword__reEnterPassword"
                typeInput="password"
                placeholder="**************"
            />

            <button className='buttonWithBackground'>Confirm</button>

        </div> 
    );
}

export {NewPassword};