import React from 'react';
import './cards.css'
import { AiFillPlusCircle } from "react-icons/ai";



function Cards (arr){

const addToPlaylist = () =>{

};


    return(
        <div className='cards-container'>
            <img className='image-album' src={arr.image}/>
            <div className='album-text'>
                <div className='title'>{arr.title}</div>
                <div className='artist-album'>{arr.artist} | {arr.album}</div>
            </div>
            <div className='addbutton-container'>
              
                    <AiFillPlusCircle className='card_button-plus' onClick={addToPlaylist} />

                    
              
            </div>

        </div>


    );
};

export default Cards;