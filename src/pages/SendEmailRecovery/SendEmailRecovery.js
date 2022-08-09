import React from 'react';
import './SendEmailRecovery.scss';
import { HiOutlineMail } from 'react-icons/hi';


function SendEmailRecovery() {
    return (
        <div className="containerSendEmailRecovery">

            <h3 className="containerSendEmailRecovery__h3">Email has been sent</h3>
            <p className="containerSendEmailRecovery__p">Please check your inbox for instructions on how to reset the password</p>

            <HiOutlineMail className="email_icon"/>

            <button className='buttonWithBackground'>Login</button>
            <p className='containerSendEmailRecovery-backToLogin'>Didn’t receive the email?  <a href='/login'> Resend</a> </p>
        </div> 
    );
}

export {SendEmailRecovery};