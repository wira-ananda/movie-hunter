const env = require("dotenv");
env.config();
import { apiKey } from "@/lib/axios";

const api_key = `?api_key=${apiKey}`;

export const axiosFetchMovies = () => {
  const req = {
    fetchPopularMovies: `/movie/popular${api_key}`,
    fetchTopRatedMovies: `/movie/top_rated${api_key}`,
    fetchNowPlayingMovies: `/movie/now_playing${api_key}`,
    // fetchCreditsMovie: `/movie/${movieId}/credits${api_key}`,
    // fetchImagesMovie: `/movie/${movieId}/images${api_key}`,
  };

  return {
    req: req,
  };
};

export const axiosFetchSeries = (movieId) => {
  const req = {
    fetchPopularSeries: `/tv/popular${api_key}`,
    fetchTopRatedSeries: `/tv/top_rated${api_key}`,
    fetchNowPlayingSeries: `/tv/on_the_air${api_key}`,
  };

  return {
    req: req,
  };
};

// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

// const requests = {
//   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
//   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
//   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
//   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
//   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
// };

// export default requests;
