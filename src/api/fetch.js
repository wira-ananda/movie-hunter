import { axiosInstance, apiKey } from "@/lib/axios";
import { useEffect, useState } from "react";

export const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `/movie/popular?api_key=${apiKey}`
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return {
    getPopularMovie: popularMovies,
  };
};
