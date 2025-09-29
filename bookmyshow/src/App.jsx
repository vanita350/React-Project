// import React, { useState } from 'react';
// import initialMovies from './Movies';
// import './App.css';
// import Header from './Header';

// function App() {
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [movieList, setMovieList] = useState(initialMovies);
//   const [editMovie, setEditMovie] = useState(null);
//   const [sortOrder, setSortOrder] = useState("");

//   const handleDelete = (id) => {
//     const filtered = movieList.filter((movie) => movie.id !== id);
//     setMovieList(filtered);
//   };

//   const handleEdit = (movie) => {
//     setEditMovie(movie);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleAddOrUpdate = (newMovie) => {
//     if (newMovie.id) {
//       const updated = movieList.map((movie) =>
//         movie.id === newMovie.id ? newMovie : movie
//       );
//       setMovieList(updated);
//     } else {
//       const added = { ...newMovie, id: Math.floor(Math.random() * 10000) };
//       setMovieList([...movieList, added]);
//     }
//   };

//   const handleSort = (order) => {
//     setSortOrder(order);
//     const sorted = [...movieList].sort((a, b) =>
//       order === "asc" ? a.price - b.price : b.price - a.price
//     );
//     setMovieList(sorted);
//   };

//   return (
//     <div className="app">
//       <Header onAddMovie={handleAddOrUpdate} editMovie={editMovie} setEditMovie={setEditMovie} />

//       <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Latest Movies</h1>

//       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//         <button onClick={() => handleSort("asc")}>Sort by Price (Low to High)</button>
//         <button onClick={() => handleSort("desc")} style={{ marginLeft: "10px" }}>
//           Sort by Price (High to Low)
//         </button>
//       </div>

//       <div className="movie-grid">
//         {movieList.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <img src={movie.poster} alt={movie.title} />
//             <h3>{movie.title}</h3>
//             <p>Price: ₹{movie.price}</p>
//             <div className="button-group">
//               <button onClick={() => setSelectedMovie(movie)}>Book Now</button>
//               <button onClick={() => handleEdit(movie)}>Edit</button>
//               <button onClick={() => handleDelete(movie.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedMovie && (
//         <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>{selectedMovie.title}</h2>
//             <img src={selectedMovie.poster} alt={selectedMovie.title} />
//             <p>{selectedMovie.description}</p>
//             <p><strong>Price:</strong> ₹{selectedMovie.price}</p>
//             <button onClick={() => alert(`Tickets booked for ${selectedMovie.title}`)}>
//               Confirm Booking
//             </button>
//             <button onClick={() => setSelectedMovie(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import initialMovies from './Movies';
import './App.css';
import Header from './Header';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieList, setMovieList] = useState(initialMovies);
  const [editMovie, setEditMovie] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState(''); // ✅ Added searchTerm

  const handleDelete = (id) => {
    const filtered = movieList.filter((movie) => movie.id !== id);
    setMovieList(filtered);
  };

  const handleEdit = (movie) => {
    setEditMovie(movie);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddOrUpdate = (newMovie) => {
    if (newMovie.id) {
      const updated = movieList.map((movie) =>
        movie.id === newMovie.id ? newMovie : movie
      );
      setMovieList(updated);
    } else {
      const added = { ...newMovie, id: Math.floor(Math.random() * 10000) };
      setMovieList([...movieList, added]);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...movieList].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setMovieList(sorted);
  };

  return (
    <div className="app">
      <Header
        onAddMovie={handleAddOrUpdate}
        editMovie={editMovie}
        setEditMovie={setEditMovie}
        setSearchTerm={setSearchTerm} // ✅ Passed to Header
      />

      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Latest Movies</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => handleSort("asc")}>Sort by Price (Low to High)</button>
        <button onClick={() => handleSort("desc")} style={{ marginLeft: "10px" }}>
          Sort by Price (High to Low)
        </button>
      </div>

      <div className="movie-grid">
        {movieList
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Active search
          )
          .map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>Price: ₹{movie.price}</p>
              <div className="button-group">
                <button onClick={() => setSelectedMovie(movie)}>Book Now</button>
                <button onClick={() => handleEdit(movie)}>Edit</button>
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.poster} alt={selectedMovie.title} />
            <p>{selectedMovie.description}</p>
            <p><strong>Price:</strong> ₹{selectedMovie.price}</p>
            <button onClick={() => alert(`Tickets booked for ${selectedMovie.title}`)}>
              Confirm Booking
            </button>
            <button onClick={() => setSelectedMovie(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
