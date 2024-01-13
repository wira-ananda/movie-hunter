import { axiosInstance, apiKey } from "@/lib/axios";
import { useEffect, useState } from "react";

const api_key = `?api_key=${apiKey}`;
const gagal = "Gagal fetching:";

export const usePopularSeries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/tv/popular${api_key}`);
        setData(res.data.results);
      } catch (error) {
        console.error(gagal, error);
      }
    };

    fetchData();
  }, []);

  return {
    getPopularSeries: data,
  };
};

export const useTopRatedSeries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/tv/top_rated${api_key}`);
        setData(res.data.results);
      } catch (error) {
        console.error(gagal, error);
      }
    };

    fetchData();
  }, []);

  return {
    getTopRatedSeries: data,
  };
};
