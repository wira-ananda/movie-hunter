"use client";

import {
  usePopularMovies,
  useTopRatedMovies,
  useNowPlayingMovies,
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

  return (
    <div>
      <h1 className="">{topMovie?.original_title}</h1>
      <img src={`${imgUrl}${topMovie?.backdrop_path}`} />
    </div>
  );
}
