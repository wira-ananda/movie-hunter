import { axiosInstance } from "@/lib/axios";
import { axiosMoviesEndpoint, axiosSeriesEndpoint } from "@/lib/axiosEndpoint";

export const fetchMovies = async () => {
  const {
    endpointPopularMovies,
    endpointTopRatedMovies,
    endpointNowPlayingMovies,
  } = axiosMoviesEndpoint();

  const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all([
    axiosInstance.get(endpointPopularMovies).then((res) => res.data),
    axiosInstance.get(endpointTopRatedMovies).then((res) => res.data),
    axiosInstance.get(endpointNowPlayingMovies).then((res) => res.data),
  ]);

  return {
    popularMovies: popularMovies.results,
    topRatedMovies: topRatedMovies.results,
    nowPlayingMovies: nowPlayingMovies.results,
  };
};

export const fetchMovieDetails = async (movieId) => {
  const { endpointCreditsMovie, endpointImagesMovie } = axiosMoviesEndpoint();

  const [creditsMovie] = await Promise.all([
    axiosInstance.get(endpointCreditsMovie(movieId)).then((res) => res.data),
  ]);

  return {
    creditsMovie: creditsMovie.cast,
  };
};

export const fetchSeries = async () => {
  const {
    endpointPopularSeries,
    endpointTopRatedSeries,
    endpointNowPlayingSeries,
  } = axiosSeriesEndpoint();
  const [popularSeries, topRatedSeries, nowPlayingSeries] = await Promise.all([
    axiosInstance.get(endpointPopularSeries).then((res) => res.data),
    axiosInstance.get(endpointTopRatedSeries).then((res) => res.data),
    axiosInstance.get(endpointNowPlayingSeries).then((res) => res.data),
  ]);

  return {
    popularSeries: popularSeries.results,
    topRatedSeries: topRatedSeries.results,
    nowPlayingSeries: nowPlayingSeries.results,
  };
};
