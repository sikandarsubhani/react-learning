import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import MovieCard from '../Components/MovieCard';

function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        console.log('Fetched movies:', movies); // Debugging line
        setMovies(movies || []);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending</h1>
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <li>No trending movies available</li>
        )}
      </div>
    </div>
  );
}

export default Trending;