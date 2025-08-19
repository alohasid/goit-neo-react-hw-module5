import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import {fetchMovieDetails} from "../../services/api.js";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLink = useRef(location.state?.from || '/movies');

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie).catch(console.error);
    }, [movieId]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div>
            <Link to={backLink.current}>Go back</Link>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <nav>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    );
}