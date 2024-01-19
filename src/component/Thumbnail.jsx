"use client";

import { imgUrl } from "@/lib/axios";
import { useMovieDetailsData, useMoviesData } from "@/api/useMoviesData";
import { useState } from "react";

const test = () => {
  return (
    <div>
      <div>wira</div>
    </div>
  );
};

export default function Thumbnail({ data, title }) {
  const [onData, setOnData] = useState(false);

  return (
    <div>
      <h1 className="font-bold text-[2rem]">{title}</h1>
      <div className="flex space-x-[.5rem] overflow-x-auto">
        {data?.map((thumbnail) => (
          <img
            key={thumbnail.id}
            onClick={() => setOnData(true)}
            src={`${imgUrl}${thumbnail.poster_path}`}
            className="w-[9rem] sm:w-[10.5rem] md:w-[12rem]"
          />
        ))}
        {onData ? <test /> : null}
      </div>
    </div>
  );
}
