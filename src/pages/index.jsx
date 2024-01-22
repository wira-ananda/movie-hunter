import HomePage from "@/components/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta
          name="keywords"
          content="Netflix Clone, Netflix, IMDB Clone, TMDB Clone, Website Film, Sinopsis Film, Film"
        />
        <meta
          name="description"
          content="Tempat dimana semua karya nyata terpampang"
        />
      </Head>
      <main>
        <section className="w-[100vw] h-[100vh]">
          <HomePage />
        </section>
      </main>
    </>
  );
}
