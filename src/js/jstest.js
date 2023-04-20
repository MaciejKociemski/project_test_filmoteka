const API_KEY = '3453ae595a5d53cbc877c6d05de8a002'; 
const BASE_URL = 'https://api.themoviedb.org/3';

async function searchMovies(query) {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getGenres(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.genres;
}


  export function displayMovies(movies) {
  const moviesContainer = document.getElementById('movies-gallery');
  moviesContainer.innerHTML = '';
  movies.forEach(async (movie) => {
    const genres = await getGenres(movie.id);
    const genreNames = genres.map((genre) => genre.name).join(', ');
    const movieCard = `
      <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>${movie.release_date}</p>
        <p>Genres: ${genreNames}</p>
        
      </div>
    `;
    moviesContainer.insertAdjacentHTML('beforeend', movieCard);
  });
}


async function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById('.search-form--input');
  const query = searchInput.value;
  if (!query) return;
  const movies = await searchMovies(query);
  displayMovies(movies);
}

const searchButton = document.querySelector('.search-form--button');
searchButton.addEventListener('click', handleSearch);
