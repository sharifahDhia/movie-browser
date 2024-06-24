// src/components/SearchBar.js
import React, { useState } from 'react';
import { searchMovies } from '../services/tmdbService';
import MovieCard from './MovieCard';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchMovies(query);
    setResults(data.results);
  };

  return (


    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>

    
  );
};

export default SearchBar;
