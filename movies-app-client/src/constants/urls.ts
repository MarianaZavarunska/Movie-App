const movieURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c&page=";

const searchURL =
  "https://api.themoviedb.org/3/search/movie?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c&page=";

const latestMoviesURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc&api_key=b1a5f167c9d1cbda7ab4372e15e4d19c&page=";

const genreURL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

// cast https://api.themoviedb.org/3/movie/2/credits?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c&page=1

export default movieURL;
export { IMG_PATH, genreURL, latestMoviesURL, searchURL };
