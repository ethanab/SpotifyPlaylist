import React from 'react';
import Logo1 from '../assets/logo1.png'
import './header.css'



function Header() {

    return(
        <div className='header-container'>
           <img className='logo' src={Logo1} />
        </div>

    );

};

export default Header;