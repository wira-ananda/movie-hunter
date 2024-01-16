import { usePopularMovies } from "@/api/fetchMovies";
import { imgUrl } from "@/lib/axios";

export default function Thumbnail() {
  const { getPopularMovies } = usePopularMovies();
  return (
    <div className="flex space-x-[.5rem] overflow-x-auto">
      {getPopularMovies?.map((thumbnail) => (
        <img
          key={thumbnail.id}
          src={`${imgUrl}${thumbnail.poster_path}`}
          className="w-[9rem] sm:w-[10.5rem] md:w-[12rem]"
        />
      ))}
    </div>
  );
}
