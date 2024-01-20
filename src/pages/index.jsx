"use client";

import { poppins } from "@/pages/api/font";
import { useMovieDetailsData, useMoviesData } from "@/api/useMoviesData";
import { useSeriesData } from "@/api/useSeriesData";
import { imgUrl } from "@/lib/axios";
import Thumbnail from "@/components/Thumbnail";
import { useState } from "react";
import FilmPage from "@/components/FIlmPage";
import Header from "@/components/Header";

export default function Home() {
  const [pageId, setPageId] = useState();
  const [onData, setOnData] = useState(false);

  const handleTest = (thumbnailId) => {
    setOnData(true);
    setPageId(thumbnailId);
  };

  console.log(onData);
  console.log(pageId);

  return (
    <main className={`${poppins.className}`}>
      <div className="w-[100vw] h-[100vh]">
        <Header />
        {onData ? (
          <FilmPage pageId={pageId} />
        ) : (
          <Test handleTest={handleTest} setOnData={setOnData} />
        )}
      </div>
    </main>
  );
}

function Test({ handleTest, setOnData }) {
  const { popularMovies, topRatedMovies } = useMoviesData();
  const { popularSeries, topRatedSeries } = useSeriesData();
  const topMovie = popularMovies[0];
  const backdrop = `${imgUrl}${topMovie?.backdrop_path}`;

  const { creditsMovie, detailsMovie } = useMovieDetailsData(topMovie?.id);

  console.log(topRatedMovies);
  console.log(topRatedSeries);
  console.log(creditsMovie);
  console.log(detailsMovie);

  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${backdrop})`,
      }}
    >
      Test
      <div className="w-[90%] h-full flex mx-auto ">
        <div className="z-40 space-y-[1rem] my-auto">
          <div>
            <h1 className="font-semibold text-[5rem] flex space-x-[1.5rem]">
              {topMovie?.original_title}
            </h1>
            <h1>{topMovie?.overview}</h1>
          </div>
          <button className="px-[1.5rem] py-[.2rem] bg-black rounded-md text-[1rem]">
            Play
          </button>
          <div>
            <div>
              <Thumbnail
                title="Top Movies"
                data={popularMovies}
                setOnData={setOnData}
                handleTest={handleTest}
              />
              <Thumbnail
                title="Top Rated Movies"
                data={topRatedMovies}
                setOnData={setOnData}
                handleTest={handleTest}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
