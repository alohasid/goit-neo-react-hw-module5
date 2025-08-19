import axios from 'axios';

const API_KEY = 'e104caf771395fc4f2eec56779ebbf49';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return data.results;
};

export const searchMovies = async query => {
    const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return data.results;
};

export const fetchMovieDetails = async movieId => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return data;
};

export const fetchMovieCast = async movieId => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return data.cast;
};

export const fetchMovieReviews = async movieId => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return data.results;
};