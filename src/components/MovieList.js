import React, { useEffect, useState } from 'react';
import { getNowPlayingMovies } from '../services/tmdbService';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getNowPlayingMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };
    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Adjust the number of pages to show as needed

    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    startPage = Math.max(1, endPage - maxPagesToShow + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === page ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="movie-list-container">
      <div className="movie-list">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className="pagination-button"
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
