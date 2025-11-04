import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';

import { MOCK_MOVIES } from '../utils/data.js';
import { MovieCard } from '../components/MovieCard.jsx';
import { BookingModal } from '../components/BookingModal.jsx';

import './home.css';

const HomePage = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovieTitle, setSelectedMovieTitle] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchMovies = () => {
            setLoading(true);
            setError(null);

            setTimeout(() => {
                setAllMovies(MOCK_MOVIES);
                setLoading(false);
            }, 1500);
        };

        fetchMovies();
    }, []);


    const filteredMovies = useMemo(() => {
        if (!searchTerm) {
            return allMovies;
        }

        const lowerCaseSearch = searchTerm.toLowerCase();

        return allMovies.filter(movie =>
            movie.title.toLowerCase().includes(lowerCaseSearch)
        );
    }, [allMovies, searchTerm]);

    const handleBookTicket = (movie) => {
        setSelectedMovieTitle(movie.title);
        setIsModalOpen(true);
    };

    if (loading) {
        return (

            <div className="loading-container">
                <div className="loading-content">

                    <svg className="loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="loading-text">loading... </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <div className="error-alert" role="alert">
                    <strong>Error</strong>
                    <span> {error}</span>
                </div>
            </div>
        );
    }

    return (
        <main className="main-content">
            <div className="search-container">
                <div className="search-wrapper">
                    <input
                        type="text"
                        placeholder="serch ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />

                    <Search className="search-icon" />
                </div>
            </div>

            <section className="movie-section">
                <h2 className="section-title">
                    🔥 Movis
                </h2>
                <div className="movie-list-wrapper">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map(movie => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onBookClick={handleBookTicket}
                            />
                        ))
                    ) : (
                        <div className="no-results">

                            Your search term <strong>"{searchTerm}"</strong> No Data
                        </div>
                    )}
                </div>
            </section>

            {isModalOpen && (
                <BookingModal
                    movieTitle={selectedMovieTitle}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </main>
    );
}

export default HomePage;
