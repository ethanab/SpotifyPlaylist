import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/header'
import SearchBar from './Components/SearchBar/SearchBar';
import Cards from './Components/Track/cards'
import Player from './Components/Player/Player'
import Results from './Components/SearchResults/results'

const CLIENT_ID = 'e75f719be4ab432e993fd4ea651ebd59'
const CLIENT_SECRET = '70f13b0ea82c49e09acc407fba3f9c10'

function App() {
  const [accessToken, setAccessToken] = useState('');
 const [results, setResults] = useState('');
 
  

  useEffect(() =>{
    // API Access Token
    var authParameters ={
      method:'POST',
      headers: {
        'Content-type':'application/x-www-form-urlencoded'
      },
      body:'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
     
  }, [])

  //FUNCTION SEARCH VIA API
 
  async function search(searchInput) {
    console.log("search for " + searchInput )

    var searchParameters = {
        method: "GET", 
        headers: { Authorization: `Bearer ${accessToken}`},
    }
    console.log(searchParameters)

    var trackID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track&limit=10', searchParameters)
    .then(response => response.json())
    .then(data => setResults(data.tracks))
   };

   console.log(results)




  return (
    <div className='background'>
      <div>
        <Header />
        <SearchBar id='searchbar' search={search}/>
      
    
     </div>
    <div>

  {Object.keys(results).map((e,i) =>{
  console.log(e)
return(
  <Cards
  title={e} />
);
  }
  
  )}
      
    </div>
    
    </div>
   
  );
}

export default App;


//


