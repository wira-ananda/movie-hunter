import { axiosInstance, apiKey } from "@/lib/axios";

export const usePopularMovies = async () => {
  const movie = await axiosInstance.get(`/movie/popular?api_key=${apiKey}`);
  console.log(movie.data);
};
