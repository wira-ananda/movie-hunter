import { imgUrl } from "@/lib/axios";

export default function Thumbnail({ data, title }) {
  return (
    <div>
      <h1 className="font-bold text-[2rem]">{title}</h1>
      <div className="flex space-x-[.5rem] overflow-x-auto">
        {data?.map((thumbnail) => (
          <a
            className="w-[9rem] sm:w-[10.5rem] md:w-[12rem]"
            href={`/movies/${thumbnail.id}`}
            key={thumbnail.id}
          >
            <img
              key={thumbnail.id}
              src={`${imgUrl}${thumbnail.poster_path}`}
              alt="Poster Movie"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
