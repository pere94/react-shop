import React from 'react';
import './UserNav.scss';
import { AiOutlineCaretDown } from 'react-icons/ai';



function UserNav(props) {
    return(           
        <div className="UserNavContainer">
            <p href="#">youremail@doimain.com</p>
            <AiOutlineCaretDown style={props.toggle && {rotate: '-360deg'}} className='UserNavContainer__arrow'/>
            
        </div>
    );
}

export { UserNav };