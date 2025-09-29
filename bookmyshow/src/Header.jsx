// src/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

// function Header({ onAddMovie, editMovie, setEditMovie }) {
function Header({ onAddMovie, editMovie, setEditMovie, setSearchTerm }) {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        poster: '',
    });

    // Autofill editMovie when available
    useEffect(() => {
        if (editMovie) {
            setNewMovie(editMovie);
            setShowAddModal(true);
        }
    }, [editMovie]);

    const handleAddMovie = () => {
        if (newMovie.title && newMovie.poster) {
            onAddMovie(newMovie);
            setNewMovie({ title: '', description: '', poster: '' });
            setShowAddModal(false);
            setEditMovie(null);
        } else {
            alert("Please fill in the title and poster URL.");
        }
    };

    return (
        <>
            <header className="header">
                <div className="logo">BookMyShow</div>

                <div className="search-box"><input
                    type="text"
                    placeholder="Search for Movies, Events, Plays..."
                    onChange={(e) => setSearchTerm(e.target.value)} // 👈 Triggers filtering
                />

                    {/* <input type="text" placeholder="Search for Movies, Events, Plays..." /> */}
                </div>

                <div className="profile">
                    <button onClick={() => {
                        setShowAddModal(true);
                        setEditMovie(null);
                        setNewMovie({ title: '', description: '', poster: '' });
                    }} style={{ marginRight: '10px' }}>
                        {editMovie ? 'Edit Movie' : 'Add'}
                    </button>
                    <button onClick={() => setShowLoginModal(true)}>Sign in</button>
                </div>
            </header>

            {/* Sign In Modal */}
            {showLoginModal && (
                <div className="login-modal-overlay" onClick={() => setShowLoginModal(false)}>
                    <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Sign In</h2>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={() => {
                            alert("Logged in successfully!");
                            setShowLoginModal(false);
                        }}>Login</button>
                        <button className="close-btn" onClick={() => setShowLoginModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {/* Add/Edit Movie Modal */}
            {showAddModal && (
                <div className="login-modal-overlay" onClick={() => {
                    setShowAddModal(false);
                    setEditMovie(null);
                }}>
                    <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{editMovie ? 'Edit Movie' : 'Add Movie'}</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={newMovie.title}
                            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={newMovie.description}
                            onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Poster URL"
                            value={newMovie.poster}
                            onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
                        />
                        <button onClick={handleAddMovie}>{editMovie ? 'Update Movie' : 'Add Movie'}</button>
                        <button className="close-btn" onClick={() => {
                            setShowAddModal(false);
                            setEditMovie(null);
                        }}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
