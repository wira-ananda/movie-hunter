import { useMovieDetailsData } from "@/api/useMoviesData";
import { imgUrl } from "@/lib/axios";
import { useRouter } from "next/router";

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;
  const { detailsMovie, creditsMovie } = useMovieDetailsData(id);

  const castMovie = creditsMovie?.slice(0, 5).map((credit) => (
    <div key={credit.id}>
      <p>{credit.name}</p>
    </div>
  ));

  return (
    <main>
      {detailsMovie &&
      detailsMovie.poster_path &&
      detailsMovie.backdrop_path &&
      creditsMovie &&
      id ? (
        <div
          className="w-[100vw] h-[100vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl}${detailsMovie?.backdrop_path})`,
          }}
        >
          <div className="w-[90%] h-full flex mx-auto ">
            <div className="z-40 w-[60%] space-y-[1rem] my-auto">
              <section className="flex gap-[1rem]">
                <img
                  className="w-[15rem] rounded-lg"
                  src={`${imgUrl}${detailsMovie?.poster_path}`}
                  alt="Poster Movie"
                />
                <div className="">
                  <h1 className="font-semibold text-[5rem]">
                    {detailsMovie?.title}
                  </h1>
                  <p>{detailsMovie?.overview}</p>
                </div>
              </section>
              <section className="">
                <h1 className="font-semibold">Cast </h1>
                <div className="flex space-x-[1rem]">{castMovie}</div>
              </section>
              <section className="">
                <h1 className="font-semibold">Release Date </h1>
                <div className="flex space-x-[1rem]">
                  {detailsMovie?.release_date}
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
