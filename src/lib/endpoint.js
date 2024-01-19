const env = require("dotenv");
env.config();

import { apiKey } from "@/lib/axios";

export const endpointMovies = () => {
  return {
    endpointPopularMovies: `/movie/popular${apiKey}`,
    endpointTopRatedMovies: `/movie/top_rated${apiKey}`,
    endpointNowPlayingMovies: `/movie/now_playing${apiKey}`,
    endpointCreditsMovie: (movieId) => `/movie/${movieId}/credits${apiKey}`,
    endpointImagesMovie: (movieId) => `/movie/${movieId}/images${apiKey}`,
  };
};

export const endpointSeries = () => {
  return {
    endpointPopularSeries: `/tv/popular${apiKey}`,
    endpointTopRatedSeries: `/tv/top_rated${apiKey}`,
    endpointNowPlayingSeries: `/tv/on_the_air${apiKey}`,
    endpointCreditsSeries: (seriesId) => `/movie/${seriesId}/credits${apiKey}`,
  };
};
