import { axiosInstance, apiKey } from "@/lib/axios";

export const getPopularMovies = async () => {
  const movie = await axiosInstance.get(`/movie/popular?api_key=${apiKey}`);
  console.log(movie.data);
};
