import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {searchMovies} from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    useEffect(() => {
        if (!query) return;
        searchMovies(query).then(setMovies).catch(console.error);
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.query.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="query" defaultValue={query} />
                <button type="submit">Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}