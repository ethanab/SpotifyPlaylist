import React from 'react'
import './Player.css'


  

function Player (title) {
  

    return(
        <div>
        <div class="episodes">
    <button class="episode" data-spotify-id="spotify:episode:7makk4oTQel546B0PZlDM5">
      My Path to Spotify: Women in Engineering
    </button>
    <button class="episode" data-spotify-id="spotify:episode:43cbJh4ccRD7lzM2730YK3">
      What is Backstage?
    </button>
    <button class="episode" data-spotify-id="spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV">
      Introducing Nerd Out@Spotify
    </button>
  </div>

  <div id="embed-iframe"></div>
  
  </div>
    )

};

export default Player;