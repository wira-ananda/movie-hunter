import { axiosInstance } from "@/lib/axios";
import { endpointMovies, endpointSeries } from "@/lib/endpoint";

const executeEndpoint = (endpoint) =>
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
      ].map(executeEndpoint)
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
    const { endpointCreditsSeries } = endpointSeries();

    const [creditsSeries] = await Promise.all(
      [endpointCreditsSeries].map((endpoint) =>
        axiosInstance.get(endpoint(seriesId)).then((res) => res.data)
      )
    );

    return {
      creditsSeries: creditsSeries.cast,
    };
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
      ].map(executeEndpoint)
    );

    return {
      popularSeries: popularSeries.results,
      topRatedSeries: topRatedSeries.results,
      nowPlayingSeries: nowPlayingSeries.results,
    };
  }
};
