import { axiosInstance } from "@/lib/axios";
import { endpointMovies, endpointSeries } from "@/lib/endpoint";

const execute = (endpoint) =>
  axiosInstance.get(endpoint).then((res) => res.data);

export const fetchMovies = async (movieId = null) => {
  if (movieId) {
    const { endpointCreditsMovie, endpointImagesMovie } = endpointMovies();

    const [creditsMovie] = await Promise.all(
      [endpointCreditsMovie].map((endpoint) =>
        axiosInstance.get(endpoint(movieId)).then((res) => res.data)
      )
    );

    return {
      creditsMovie: creditsMovie.cast,
    };
  } else {
    const {
      endpointPopularMovies,
      endpointTopRatedMovies,
      endpointNowPlayingMovies,
    } = endpointMovies();

    const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all(
      [
        endpointPopularMovies,
        endpointTopRatedMovies,
        endpointNowPlayingMovies,
      ].map(execute)
    );

    return {
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
      nowPlayingMovies: nowPlayingMovies.results,
    };
  }
};

export const fetchSeries = async (seriesId = null) => {
  if (seriesId) {
  } else {
    const {
      endpointPopularSeries,
      endpointTopRatedSeries,
      endpointNowPlayingSeries,
    } = endpointSeries();
    const [popularSeries, topRatedSeries, nowPlayingSeries] = await Promise.all(
      [
        endpointPopularSeries,
        endpointTopRatedSeries,
        endpointNowPlayingSeries,
      ].map(execute)
    );

    return {
      popularSeries: popularSeries.results,
      topRatedSeries: topRatedSeries.results,
      nowPlayingSeries: nowPlayingSeries.results,
    };
  }
};
