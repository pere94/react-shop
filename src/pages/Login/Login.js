import React from 'react';
import './Login.scss';

import {LabelInput} from '../../Components/LabelInput/LabelInput';


function Login() {
    const formRef = React.useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        console.log(data);
    };

    return (
        <form ref={formRef} className="containerLogin">

            <LabelInput 
                className="containerLogin__email"
                textLabel="Email"
                // onChange={onChange}
                nameInput="email"
                idInput="containerLogin__email"
                typeInput="email"
                placeholder="email@yourdomain.com"
            />
            
            <LabelInput 
                className="containerLogin__password"
                textLabel="Password"
                // onChange={onChange}
                nameInput="password"
                idInput="containerLogin__password"
                typeInput="password"
                placeholder="***********"
            />

            <button onClick={handleSubmit} className='buttonWithBackground'>Log in</button>
            <p className='containerLogin-forgotPass'><a href='/recovery-password'>Forgot my Password</a> </p>
            <button className='buttonWithoutBackground'>Sign up</button>
        </form> 
    );
}

export {Login};