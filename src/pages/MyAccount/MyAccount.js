import React from 'react';
import './MyAccount.scss';

function MyAccount() {
    return (
        <div className="containerMyAccount">
            <h3 className="containerMyAccount__h3">My Account</h3>

            <div className="containerMyAccount__name">
                <label className="label">Name</label>
                <p className="containerMyAccount__name-p">Ana Rosa</p>
            </div>

            <div className="containerMyAccount__email">
                <label className="label">Email address</label>
                <p className="containerMyAccount__email-p">email@yourdomain.com</p>
            </div>

            <div className="containerMyAccount__password">
                <label className="label">Password</label>
                <p className="containerMyAccount__password-p">**************</p>
            </div>


            <button className='buttonWithoutBackground'>Edit</button>
            
        </div> 
    );
}

export {MyAccount};