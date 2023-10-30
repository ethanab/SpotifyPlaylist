import React, {useState} from 'react'
import './Player.css'





  

function Player(uri) {

const [src, setSrc] = useState('');

  async function Embed(uri) {
    

    var searchParameters = {
        method: "GET", 
        headers: {'url':{uri}},
    }

     await fetch('https://open.spotify.com/oembed?url=' + uri, searchParameters)
    .then(response => response.json())
    .then(data => {console.log(data.tracks.items)})
    .then(console.log(src))
   };
 
  
  
  return(
    <div className='player-container'>
   
    <iframe  src={src} >
    </iframe>
    </div>

  )
   

};

export default Player;