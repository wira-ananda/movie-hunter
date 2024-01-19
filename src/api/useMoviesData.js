import { useEffect, useState } from "react";
import { fetchMovies } from "./fetch";
import { errMsg } from "@/lib/axios";

export const useMoviesData = () => {
  const [data, setData] = useState({
    popularMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { popularMovies, topRatedMovies, nowPlayingMovies } =
          await fetchMovies();

        setData({
          popularMovies,
          topRatedMovies,
          nowPlayingMovies,
        });
      } catch (error) {
        console.error(errMsg, error.message);
      }
    };

    fetchData();
  }, []);

  return data;
};

export const useMovieDetailsData = (movieId) => {
  const [data, setData] = useState({
    creditsMovie: [],
  });

  useEffect(() => {
    if (movieId) {
      const fetchData = async () => {
        try {
          const { creditsMovie } = await fetchMovies(movieId);
          setData({
            creditsMovie,
          });
        } catch (error) {
          console.error(errMsg, error.message);
        }
      };

      fetchData();
    }
  }, [movieId]);

  return data;
};
