"use client";

import { imgUrl } from "@/lib/axios";
import { useMovieDetailsData, useMoviesData } from "@/api/useMoviesData";
import { useState } from "react";

export default function Thumbnail({ data, title, setOnData, handleTest }) {
  return (
    <div>
      <h1 className="font-bold text-[2rem]">{title}</h1>
      <div className="flex space-x-[.5rem] overflow-x-auto">
        {data?.map((thumbnail) => (
          <img
            key={thumbnail.id}
            onClick={() => {
              handleTest(thumbnail.id);
            }}
            src={`${imgUrl}${thumbnail.poster_path}`}
            className="w-[9rem] sm:w-[10.5rem] md:w-[12rem]"
          />
        ))}
      </div>
    </div>
  );
}
