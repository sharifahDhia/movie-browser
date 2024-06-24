// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/tmdbService';
import StarRating from './StarRating'; 
import '../styles/MovieDetails.css';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    // <div className="movie-details">
    //   <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
    //   <div className="movie-info">
    //     <h1>{movie.title}</h1>
    //     <p>{movie.overview}</p>
    //     <p>Release Date: {movie.release_date}</p>
    //     <div className="card__rating">
    //         <StarRating rating={movie.vote_average} />            
    //     </div>
    //     <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
    //   </div>
    // </div>
    <div class ="container">
    <figure class="movie">
    <div class="movie__hero">
    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} class="movie__img"/>
    </div>
    <div class="movie__content">
      <div class="movie__title">
        <h1 class="heading__primary">{movie.title}</h1>
        <div class="movie__tag movie__tag--1">
            <div className="card__rating">
                <StarRating rating={movie.vote_average} />            
            </div>
        </div>
      </div>
      <p class="movie__description">{movie.overview} </p>
      <div class="movie__details">
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  </figure>
  </div>

  );
};

export default MovieDetails;
