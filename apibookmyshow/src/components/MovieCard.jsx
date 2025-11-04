import React from 'react';
import { Film, Star, Calendar, Ticket } from 'lucide-react';

export const MovieCard = ({ movie, onBookClick }) => (
    <div className="movie-card">
        <img 
            src={movie.poster_path} 
            alt={movie.title} 
            className="movie-poster"
            onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://placehold.co/500x750/94a3b8/white?text=Poster+Missing';
            }}
        />
        <div className="movie-info-container">
            <div>
                <h3 className="movie-title">
                    <Film className="icon-main"/>
                    {movie.title}
                </h3>
                <p className="movie-detail">
                    <Calendar className="icon-secondary"/>
                    રિલીઝ: {movie.release_date}
                </p>
                <p className="movie-detail">
                    <Star className="icon-rating"/>
                    રેટિંગ: {movie.vote_average}
                </p>
                
            </div>
            <button 
                className="book-btn"
                onClick={() => onBookClick(movie)}
            >
                <Ticket className="icon-ticket"/>
                <span>Book Now</span>
            </button>
        </div>
        
        <style jsx>{`
            .movie-card {
                /* Set fixed row layout for all sizes (max-width: 650px) */
                width: 100%;
                max-width: 650px; 
                min-height: 380px; /* Minimum height to ensure button visibility */
                margin: 1rem auto;
                background-color: white;
                border-radius: 12px; 
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); 
                overflow: hidden;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                display: flex;
                flex-direction: row; /* FIXED TO ROW */
            }

            .movie-card:hover {
                transform: scale(1.01);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2); 
            }

            .movie-poster {
                width: 40%; /* Poster takes 40% of card width */
                height: 100%; /* Fills the card height */
                object-fit: cover;
            }

            .movie-info-container {
                width: 60%; /* Info section takes 60% of card width */
                /* height: 100%; Removed fixed height for flexibility */
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                /* min-height will ensure it takes enough space */
            }

            .movie-title {
                font-weight: 700;
                font-size: 1.125rem;
                color: #1f2937; 
                margin-bottom: 0.5rem;
                display: flex;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .icon-main {
                width: 1.25rem;
                height: 1.25rem;
                color: #dc2626; 
                margin-right: 0.5rem;
            }

            .movie-detail {
                font-size: 0.875rem;
                color: #4b5563; 
                display: flex;
                align-items: center;
                margin-bottom: 0.25rem;
            }

            .icon-secondary {
                width: 1rem;
                height: 1rem;
                color: #6366f1; 
                margin-right: 0.5rem;
            }

            .icon-rating {
                width: 1rem;
                height: 1rem;
                color: #f59e0b; 
                fill: #f59e0b;
                margin-right: 0.5rem;
            }

            .book-btn {
                margin-top: 1rem;
                width: 100%;
                background-color: #dc2626;
                color: white;
                font-weight: 600;
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 0.5rem; 
                box-shadow: 0 4px 6px rgba(220, 38, 38, 0.3); 
                transition: background-color 0.2s, transform 0.1s;
                cursor: pointer;
                
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem; 
            }

            .book-btn:hover {
                background-color: #b91c1c; 
                transform: translateY(-1px);
            }

            .book-btn:active {
                transform: scale(0.98);
            }

            .icon-ticket {
                width: 1.25rem;
                height: 1.25rem;
            }

            /* For very small screens where row layout might look cramped, we allow a bit more flexibility */
            @media (max-width: 480px) {
                .movie-card {
                    max-width: 100%;
                    height: auto;
                    flex-direction: column; /* Revert to column for extremely small phones */
                }
                .movie-poster, .movie-info-container {
                    width: 100%;
                    height: auto;
                }
                .movie-poster {
                    height: 320px;
                }
            }
        `}</style>
    </div>
);
