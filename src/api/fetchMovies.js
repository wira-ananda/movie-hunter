import { axiosInstance, apiKey } from "@/lib/axios";
import { useEffect, useState } from "react";

const api_key = `?api_key=${apiKey}`;
const gagal = "Gagal fetching:";

export const usePopularMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/movie/popular${api_key}`);
        setData(res.data.results);
      } catch (error) {
        console.error(gagal, error);
      }
    };

    fetchData();
  }, []);

  return {
    getPopularMovies: data,
  };
};

export const useTopRatedMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/movie/top_rated${api_key}`);
        setData(res.data.results);
      } catch (error) {
        console.error(gagal, error);
      }
    };

    fetchData();
  }, []);

  return {
    getTopRatedMovies: data,
  };
};

export const useNowPlayingMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/movie/now_playing${api_key}`);
        setData(res.data.results);
      } catch (error) {
        console.error(gagal, error);
      }
    };

    fetchData();
  }, []);

  return {
    getNowPlayingMovies: data,
  };
};
