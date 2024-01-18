import { axiosInstance } from "@/lib/axios";
import { axiosFetchMovies, axiosFetchSeries } from "@/lib/axiosFetch";

export const fetchMovies = async () => {
  const { fetchPopularMovies, fetchTopRatedMovies, fetchNowPlayingMovies } =
    axiosFetchMovies();

  const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all([
    axiosInstance.get(fetchPopularMovies).then((res) => res.data),
    axiosInstance.get(fetchTopRatedMovies).then((res) => res.data),
    axiosInstance.get(fetchNowPlayingMovies).then((res) => res.data),
  ]);

  return {
    popularMovies: popularMovies.results,
    topRatedMovies: topRatedMovies.results,
    nowPlayingMovies: nowPlayingMovies.results,
  };
};

export const fetchMovieDetails = async (movieId) => {
  const { fetchCreditsMovie, fetchImagesMovie } = axiosFetchMovies();

  const [creditsMovie] = await Promise.all([
    axiosInstance.get(fetchCreditsMovie(movieId)).then((res) => res.data),
  ]);

  return {
    creditsMovie: creditsMovie.cast,
  };
};

export const fetchSeries = async () => {
  const { fetchPopularSeries, fetchTopRatedSeries, fetchNowPlayingSeries } =
    axiosFetchSeries();
  const [popularSeries, topRatedSeries, nowPlayingSeries] = await Promise.all([
    axiosInstance.get(fetchPopularSeries).then((res) => res.data),
    axiosInstance.get(fetchTopRatedSeries).then((res) => res.data),
    axiosInstance.get(fetchNowPlayingSeries).then((res) => res.data),
  ]);

  return {
    popularSeries: popularSeries.results,
    topRatedSeries: topRatedSeries.results,
    nowPlayingSeries: nowPlayingSeries.results,
  };
};
