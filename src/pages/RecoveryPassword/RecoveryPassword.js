import React from 'react';
import './RecoveryPassword.scss';

import {LabelInput} from '../../Components/LabelInput/LabelInput';

function RecoveryPassword() {
    return (
        <div className="containerRecoveryPassword">

            <h3 className="containerRecoveryPassword__h3">Password Recovery</h3>
            <p className="containerRecoveryPassword__p">Inform the email address used to create your account</p>

            <LabelInput 
                className="containerRecoveryPassword__email"
                textLabel="Email"
                // onChange={onChange}
                nameInput="Email"
                idInput="containerRecoveryPassword__email"
                typeInput="email"
                placeholder="email@yourdomain.com"
            />

            <button className='buttonWithBackground'>Submit</button>
            <p className='containerRecoveryPassword-backToLogin'><a href='/login'>Back to Login</a> </p>
        </div> 
    );
}

export {RecoveryPassword};