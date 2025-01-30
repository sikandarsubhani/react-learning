const API_KEY = "2d7290a8fb8d9ad873911efefdc0c741";
const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDcyOTBhOGZiOGQ5YWQ4NzM5MTFlZmVmZGMwYzc0MSIsIm5iZiI6MTczODEzODEyNS42OCwic3ViIjoiNjc5OWUyMGQwMjhhNDIyMzgwMjc5YTdjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.du0giHOwW2swAFwXIKBB7JZDZ9F9rya17ieDzePzHm8";

const fetchOptions = {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'Authorization': AUTH_TOKEN
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/top_rated?&page=1`, fetchOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      fetchOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/all/day?language=en-US`, fetchOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API response data:', data); // Debugging line
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};