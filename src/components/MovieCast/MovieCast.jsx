import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieCast} from "../../services/api.js";

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast).catch(console.error);
    }, [movieId]);

    if (cast.length === 0) return <p>No cast information available.</p>;

    return (
        <ul>
            {cast.map(actor => (
                <li key={actor.id}>{actor.name}</li>
            ))}
        </ul>
    );
}