import React from "react";
import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import "./../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularmovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err.message || "Failed to Load Movies");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    loadPopularmovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setSearchQuery();
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to Search Movies");
    }
  };
  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search Movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
