import React, {useState, useEffect} from 'react';
import styles from './SearchBar.css'




function SearchBar ({title}){

    const [search, setSearch] = useState('');


    const handleInput = (e) =>{
        setSearch(e.target.value);
    };

    const handleSubmit = (e) =>{
        

    };

    return (
        <div className='container'>
        <form>
            <div>
        <label htmlFor='searchbar'>
            <span className='searchbar-label-grey'>Rechercher sur</span><span className='searchbar-label-yellow'> Spotify</span>
        </label>
        </div>
        <div className='input-field' >
        <input
          id="searchbar"
          type="text"
          value={search}
          onChange={handleInput}
         className='input'
        />
        </div>
        <div className='container-button'>
            <button type='submit' onSubmit={handleSubmit} className='submit-button'>Rechercher</button>
        </div>
        </form>
        </div>
    );
};

export default SearchBar;