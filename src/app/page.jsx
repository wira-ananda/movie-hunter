"use client";

import {
  usePopularMovies,
  useTopRatedMovies,
  useNowPlayingMovies,
  useCreditsMovie,
  useImagesMovie,
} from "@/api/fetchMovies";
import Image from "next/image";
import { imgUrl } from "@/lib/axios";

export default function Home() {
  return (
    <main>
      <div>{/* <FilmPage /> */}</div>
    </main>
  );
}

function FilmPage() {
  const { getPopularMovies } = usePopularMovies();

  const topMovie = getPopularMovies[0];
  console.log(getPopularMovies);

  const { getCreditsMovie } = useCreditsMovie(topMovie?.id);
  const { getImagesMovie } = useImagesMovie(topMovie?.id);
  console.log(getImagesMovie);

  const backdrop = `${imgUrl}${topMovie?.backdrop_path}`;

  const castMovie = getCreditsMovie?.slice(0, 5).map((credit) => (
    <div key={credit.id}>
      <p>{credit.name}</p>
    </div>
  ));

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="h-[85%] w-[90%] flex m-auto">
        <img
          className="w-full h-full object-cover absolute z-0 top-0 left-0"
          src={backdrop}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-1"></div>
        <div className="z-40 w-[60%] space-y-[1rem] my-auto">
          <div className="flex gap-[1rem]">
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
          <div className="">
            <h1 className="font-semibold">Cast </h1>
            <div className="flex space-x-[1rem]">{castMovie}</div>
          </div>
          <div className="">
            <h1 className="font-semibold">Release Date </h1>
            <div className="flex space-x-[1rem]">{topMovie?.release_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
