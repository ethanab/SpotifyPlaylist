import React, {useState, useEffect} from 'react';
import styles from './SearchBar.css'




function SearchBar(props){

const[searchInput, setSearchInput] = useState('');

const handleChange = (event) =>{
    setSearchInput(event.target.value);
};

const handleSubmit = (e) =>{
    props.search(searchInput);
    e.preventDefault();
}

    return (
        <div className='container'>
        <form onSubmit={handleSubmit} >
            <div>
        <label htmlFor='searchbar'>
            <span className='searchbar-label-grey'>Rechercher sur</span><span className='searchbar-label-yellow'> Spotify</span>
        </label>
        </div>
        <div className='input-field' >
        <input
          id="searchbar"
          type="text"
         className='input'
         value={searchInput}
         onChange={handleChange}
        />
        </div>
        <div className='container-button'>
            <input type='submit' className='submit-button' value='Rechercher' />
        </div>
        </form>
        </div>
    );
};

export default SearchBar;