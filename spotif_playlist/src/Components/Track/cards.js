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
                <div className='artist-album'>{arr.artist}|{arr.album}</div>
            </div>
            <div className='addbutton-container'>
                <button className='add-button'>
                    <AiFillPlusCircle style={{color:'white', height:"30px", backgroundColor:'rgb(0,0,0,0)'}} onClick={addToPlaylist} />

                    
                </button>
            </div>

        </div>


    );
};

export default Cards;