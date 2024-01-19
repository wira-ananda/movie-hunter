import { axiosInstance } from "@/lib/axios";
import { axiosMoviesEndpoint, axiosSeriesEndpoint } from "@/lib/axiosEndpoint";

export const fetchMovies = async () => {
  const {
    endpointPopularMovies,
    endpointTopRatedMovies,
    endpointNowPlayingMovies,
  } = axiosMoviesEndpoint();

  const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all(
    [
      endpointPopularMovies,
      endpointTopRatedMovies,
      endpointNowPlayingMovies,
    ].map((endpoint) => axiosInstance.get(endpoint).then((res) => res.data))
  );

  return {
    popularMovies: popularMovies.results,
    topRatedMovies: topRatedMovies.results,
    nowPlayingMovies: nowPlayingMovies.results,
  };
};

export const fetchMovieDetails = async (movieId) => {
  const { endpointCreditsMovie, endpointImagesMovie } = axiosMoviesEndpoint();

  const [creditsMovie] = await Promise.all(
    [endpointCreditsMovie].map((endpoint) =>
      axiosInstance.get(endpoint(movieId)).then((res) => res.data)
    )
  );

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
  const [popularSeries, topRatedSeries, nowPlayingSeries] = await Promise.all(
    [
      endpointPopularSeries,
      endpointTopRatedSeries,
      endpointNowPlayingSeries,
    ].map((endpoint) => axiosInstance.get(endpoint).then((res) => res.data))
  );

  return {
    popularSeries: popularSeries.results,
    topRatedSeries: topRatedSeries.results,
    nowPlayingSeries: nowPlayingSeries.results,
  };
};
