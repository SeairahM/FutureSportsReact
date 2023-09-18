import React, { useState } from 'react';
import SearchIcon from '../assets/images/searchicon.png';
import './navbar.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className='searchbar'>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button className="search" type="submit">
      <img src ={SearchIcon} alt="Search Icon"/></button>
    </form>
  );
}

export default SearchBar;
