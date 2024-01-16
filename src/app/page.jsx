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
      <div className="w-[100vw] h-[100vh]">
        <Header />
        <Test />
        {/* <FilmPage /> */}
      </div>
    </main>
  );
}
function Card() {
  const { getPopularMovies } = usePopularMovies();
  const topMovie = getPopularMovies[0];
  const poster = `${imgUrl}${topMovie?.poster_path}`;
  return (
    <div className="flex space-x-[1rem] overflow-x-auto">
      {getPopularMovies?.map((credit) => (
        <img src={`${imgUrl}${credit.poster_path}`} className="w-[12rem]" />
      ))}
    </div>
  );
}

function Test() {
  const { getPopularMovies } = usePopularMovies();
  const topMovie = getPopularMovies[0];
  const backdrop = `${imgUrl}${topMovie?.backdrop_path}`;

  console.log(getPopularMovies);

  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className="w-[90%] h-full flex mx-auto ">
        <div className="z-40 space-y-[1rem] my-auto">
          <div className="font-semibold text-[5rem] flex space-x-[1.5rem]">
            <h1>{topMovie?.original_title} - </h1>
            <h1 className="">{topMovie?.vote_average.toFixed(1)}</h1>
          </div>
          <button className="px-[1.5rem] py-[.2rem] bg-black rounded-md text-[1rem]">
            Play
          </button>
          <div>
            <h1>TOP MOVIES</h1>
            <Card />
          </div>
        </div>
      </div>
    </div>
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
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className="w-[90%] h-full flex mx-auto ">
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

function Header() {
  return (
    <div className="z-50 absolute w-full h-[5%] bg-black opacity-65 flex">
      <div className="justify-between w-[90%] flex m-auto">
        <div>Logo</div>
        <div>Test</div>
      </div>
    </div>
  );
}
