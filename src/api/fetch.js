import { axiosInstance } from "@/lib/axios";
import { endpointMovies, endpointSeries } from "@/lib/endpoint";

const executeSingleResource = async (endpoint, id) => {
  const response = await axiosInstance
    .get(endpoint(id))
    .then((res) => res.data);
  return response;
};

const executeMultipleResources = async (endpoint) => {
  const response = await axiosInstance.get(endpoint).then((res) => res.data);
  return response.results;
};

export const fetchMovies = async (id = null) => {
  if (id) {
    const { endpointCreditsMovie, endpointDetailsMovie } = endpointMovies();

    const [creditsMovie, detailsMovie] = await Promise.all(
      [endpointCreditsMovie, endpointDetailsMovie].map((endpoint) =>
        executeSingleResource(endpoint, id)
      )
    );

    return {
      creditsMovie: creditsMovie.cast,
      detailsMovie,
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
      ].map(executeMultipleResources)
    );

    return {
      popularMovies,
      topRatedMovies,
      nowPlayingMovies,
    };
  }
};

export const fetchSeries = async (id = null) => {
  if (id) {
    const { endpointCreditsSeries } = endpointSeries();

    const [creditsSeries] = await Promise.all(
      [endpointCreditsSeries].map((endpoint) =>
        executeSingleResource(endpoint, id)
      )
    );

    return {
      creditsSeries,
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
      ].map(executeMultipleResources)
    );

    return {
      popularSeries,
      topRatedSeries,
      nowPlayingSeries,
    };
  }
};
