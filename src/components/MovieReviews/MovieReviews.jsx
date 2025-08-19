import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieReviews} from "../../services/api.js";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews).catch(console.error);
    }, [movieId]);

    if (reviews.length === 0) return <p>No reviews available.</p>;

    return (
        <ul>
            {reviews.map(review => (
                <li key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
}