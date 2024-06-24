// src/services/tmdbService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
//https://api.themoviedb.org/3/movie/now_playing?api_key=a8ec58e252045db51dda98b6f5db8821

export const getNowPlayingMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`);
  return response.data;
};

//https://api.themoviedb.org/3/search/movie?api_key=a8ec58e252045db51dda98b6f5db8821&query={movieTitle}
export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

//https://api.themoviedb.org/3/genre/movie/list?api_key=a8ec58e252045db51dda98b6f5db8821
export const getGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
};
