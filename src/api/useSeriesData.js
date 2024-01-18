import { useEffect, useState } from "react";
import { fetchSeries } from "./fetch";

const errMsg = "Gagal fetching:";

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
