import { axiosInstance } from "@/lib/axios";
import { axiosFetchMovies, axiosFetchSeries } from "@/lib/axiosFetch";

export const fetchMovie = async (movieId) => {
  const {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchCreditsMovie,
    fetchImagesMovie,
  } = axiosFetchMovies();

  const [popularMovies, topRatedMovies, nowPlayingMovies, creditsMovie] =
    await Promise.all([
      axiosInstance.get(fetchPopularMovies).then((res) => res.data),
      axiosInstance.get(fetchTopRatedMovies).then((res) => res.data),
      axiosInstance.get(fetchNowPlayingMovies).then((res) => res.data),
      axiosInstance.get(fetchCreditsMovie(movieId)).then((res) => res.data),
    ]);

  return {
    popularMovies: popularMovies.results,
    topRatedMovies: topRatedMovies.results,
    nowPlayingMovies: nowPlayingMovies.results,
    creditsMovie: creditsMovie.results,
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
