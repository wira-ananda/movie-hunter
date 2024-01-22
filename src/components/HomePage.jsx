import { useMovieDetailsData, useMoviesData } from "@/api/useMoviesData";
import { useSeriesData } from "@/api/useSeriesData";
import { imgUrl } from "@/lib/axios";
import Thumbnail from "@/components/Thumbnail";

export default function HomePage() {
  const { popularMovies, topRatedMovies } = useMoviesData();
  const { popularSeries, topRatedSeries } = useSeriesData();

  const topMovie = popularMovies[0];

  const { creditsMovie, detailsMovie } = useMovieDetailsData(topMovie?.id);

  console.log(topRatedMovies);
  console.log(creditsMovie);
  console.log(detailsMovie);

  return (
    <section className="w-full h-full">
      {topMovie ? (
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl}${topMovie?.backdrop_path})`,
          }}
        >
          <div className="w-[90%] h-full flex mx-auto ">
            <div className="z-40 space-y-[1rem] my-auto">
              <section>
                <h1 className="font-semibold text-[5rem] flex space-x-[1.5rem]">
                  {topMovie?.title}
                </h1>
                <h1>{topMovie?.overview}</h1>
              </section>
              <button className="px-[1.5rem] py-[.2rem] bg-black rounded-md text-[1rem]">
                Play
              </button>
              <section>
                <Thumbnail title="Top Movies" data={popularMovies} />
                <Thumbnail title="Top Rated Movies" data={topRatedMovies} />
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
