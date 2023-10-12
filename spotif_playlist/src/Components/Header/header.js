import React from 'react';
import Logo1 from '/workspaces/SpotifyPlaylist/spotif_playlist/src/assets/logo1.png'
import './header.css'



function Header() {

    return(
        <div className='header-container'>
           <img className='logo' src={Logo1} />
        </div>

    );

};

export default Header;