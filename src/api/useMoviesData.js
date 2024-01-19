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

export const useMovieDetailsData = (id) => {
  const [data, setData] = useState({
    creditsMovie: [],
    detailsMovie: [],
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const { creditsMovie, detailsMovie } = await fetchMovies(id);
          setData({
            creditsMovie,
            detailsMovie,
          });
        } catch (error) {
          console.error(errMsg, error.message);
        }
      };

      fetchData();
    }
  }, [id]);

  return data;
};
