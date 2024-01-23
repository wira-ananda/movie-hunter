import { imgUrl } from "@/lib/axios";
import Link from "next/link";

export default function Thumbnail({ data, title }) {
  return (
    <article>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex">
        {data?.map((thumbnail) => (
          <Link href={`/movies/${thumbnail.id}`} key={thumbnail.id}>
            <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
              <img
                className="w-full h-auto"
                key={thumbnail.id}
                src={`${imgUrl}${thumbnail.backdrop_path}`}
                alt="Poster Movie"
              />
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
