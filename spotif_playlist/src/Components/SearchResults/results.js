import React, {useEffect, useState} from 'react';



const CLIENT_ID = 'e75f719be4ab432e993fd4ea651ebd59'
const CLIENT_SECRET = '70f13b0ea82c49e09acc407fba3f9c10'



function Results (userInput, accessToken){

 async function search() {


  var searchParameters ={
    method:'GET',
    headers: {
      'Authorization': 'Bearer'+ ' '+ accessToken
    },
  }
  const endpoint = 'https://api.spotify.com/v1/search?q='

  fetch(endpoint + userInput + '&type=track', searchParameters)
  .then(results => results.json())
  .then(data => console.log(data))
  

 }
  
    
   

};

export default Results;