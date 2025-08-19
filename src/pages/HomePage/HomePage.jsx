import { useState, useEffect } from 'react';
import MovieList from "../../components/MovieList/MovieList.jsx";
import {fetchTrendingMovies} from "../../services/api.js";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTrendingMovies()
            .then(setMovies)
            .catch(setError);
    }, []);

    return (
        <div>
            <h1>Trending Movies</h1>
            {error && <p>Error: {error.message}</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}