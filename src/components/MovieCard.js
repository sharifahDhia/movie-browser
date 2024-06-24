// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'; 
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="card-link">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
        <div className="card__content">
          <p className="card__title">{movie.title}</p>
          <p className='card__date'>Release Date: {movie.release_date}</p>
          <div className="card__rating">
            <StarRating rating={movie.vote_average} />            
          </div>
          <p className="card__rating-value">{movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
