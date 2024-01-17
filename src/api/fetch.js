import { axiosInstance } from "@/lib/axios";
import { axiosFetchMovies, axiosFetchSeries } from "@/lib/axiosFetch";

export const fetchMovie = async () => {
  const { req } = axiosFetchMovies();
  const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all([
    axiosInstance.get(req.fetchPopularMovies).then((res) => res.data),
    axiosInstance.get(req.fetchTopRatedMovies).then((res) => res.data),
    axiosInstance.get(req.fetchNowPlayingMovies).then((res) => res.data),
  ]);

  return {
    popularMovies: popularMovies.results,
    topRatedMovies: topRatedMovies.results,
    nowPlayingMovies: nowPlayingMovies.results,
  };
};

export const fetchSeries = async () => {
  const { req } = axiosFetchSeries();
  const [popularSeries, topRatedSeries, nowPlayingSeries] = await Promise.all([
    axiosInstance.get(req.fetchPopularSeries).then((res) => res.data),
    axiosInstance.get(req.fetchTopRatedSeries).then((res) => res.data),
    axiosInstance.get(req.fetchNowPlayingSeries).then((res) => res.data),
  ]);

  return {
    popularSeries: popularSeries.results,
    topRatedSeries: topRatedSeries.results,
    nowPlayingSeries: nowPlayingSeries.results,
  };
};
