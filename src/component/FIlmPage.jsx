import { useMovieDetailsData } from "@/api/useMoviesData";
import { imgUrl } from "@/lib/axios";

export default function FilmPage({ pageId }) {
  const { detailsMovie, creditsMovie } = useMovieDetailsData(pageId);

  const backdrop = `${imgUrl}${detailsMovie?.backdrop_path}`;

  const castMovie = creditsMovie?.slice(0, 5).map((credit) => (
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
              src={`${imgUrl}${detailsMovie?.poster_path}`}
              alt=""
            />
            <div className="">
              <h1 className="font-semibold text-[5rem]">
                {detailsMovie?.original_title}
              </h1>
              <p>{detailsMovie?.overview}</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-semibold">Cast </h1>
            <div className="flex space-x-[1rem]">{castMovie}</div>
          </div>
          <div className="">
            <h1 className="font-semibold">Release Date </h1>
            <div className="flex space-x-[1rem]">
              {detailsMovie?.release_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
