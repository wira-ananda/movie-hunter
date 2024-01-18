import { useEffect, useState } from "react";
import { fetchSeries } from "./fetch";
import { errMsg } from "@/lib/axios";

export const useSeriesData = () => {
  const [data, setData] = useState({
    popularSeries: [],
    useTopRatedSeries: [],
    nowPlayingSeries: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { popularSeries, topRatedSeries, nowPlayingSeries } =
          await fetchSeries();
        setData({
          popularSeries,
          topRatedSeries,
          nowPlayingSeries,
        });
      } catch (error) {
        console.error(errMsg, error.message);
      }
    };

    fetchData();
  }, []);

  return data;
};
