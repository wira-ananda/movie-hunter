"use client";

import Image from "next/image";
import {
  usePopularMovies,
  useTopRatedMovies,
  useNowPlayingMovies,
} from "@/api/fetchMovies";

export default function Home() {
  const { getPopularMovies } = usePopularMovies();
  const { getTopRatedMovies } = useTopRatedMovies();
  const { getNowPlayingMovies } = useNowPlayingMovies();
  console.log(getPopularMovies);
  console.log(getTopRatedMovies);
  console.log(getNowPlayingMovies);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <FilmPage />
      </div>
    </main>
  );
}

function FilmPage() {
  return (
    <div>
      <div></div>
    </div>
  );
}
