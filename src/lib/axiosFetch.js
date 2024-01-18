const env = require("dotenv");
env.config();
import { apiKey } from "@/lib/axios";

const api_key = `?api_key=${apiKey}`;

export const axiosFetchMovies = () => {
  return {
    fetchPopularMovies: `/movie/popular${api_key}`,
    fetchTopRatedMovies: `/movie/top_rated${api_key}`,
    fetchNowPlayingMovies: `/movie/now_playing${api_key}`,
    fetchCreditsMovie: (movieId) => `/movie/${movieId}/credits${api_key}`,
    fetchImagesMovie: (movieId) => `/movie/${movieId}/images${api_key}`,
  };
};

export const axiosFetchSeries = () => {
  return {
    fetchPopularSeries: `/tv/popular${api_key}`,
    fetchTopRatedSeries: `/tv/top_rated${api_key}`,
    fetchNowPlayingSeries: `/tv/on_the_air${api_key}`,
  };
};
