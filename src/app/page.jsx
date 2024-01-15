"use client";

import {
  usePopularMovies,
  useTopRatedMovies,
  useNowPlayingMovies,
  useCreditsMovie,
} from "@/api/fetchMovies";
import Image from "next/image";
import { imgUrl } from "@/lib/axios";

export default function Home() {
  return (
    <main>
      <div>
        <FilmPage />
      </div>
    </main>
  );
}

function FilmPage() {
  const { getPopularMovies } = usePopularMovies();

  const topMovie = getPopularMovies[0];
  console.log(topMovie);

  const { getCreditsMovie } = useCreditsMovie(topMovie?.id);
  console.log(getCreditsMovie);

  const backdrop = `${imgUrl}${topMovie?.backdrop_path}`;

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="h-[85%] w-[90%] flex m-auto">
        <img
          className="w-full h-full object-cover absolute z-0 top-0 left-0"
          src={backdrop}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
        <div className="z-40 flex w-[40%] gap-[1rem] my-auto">
          <img
            className="w-[15rem] rounded-lg"
            src={`${imgUrl}${topMovie?.poster_path}`}
            alt=""
          />

          <div className="">
            <h1 className="font-semibold text-[5rem]">
              {topMovie?.original_title}
            </h1>
            <p>{topMovie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
