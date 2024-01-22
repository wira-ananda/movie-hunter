import HomePage from "@/components/HomePage";
import { HeadMetaData } from "@/components/HeadMetaData";

export default function Home() {
  return (
    <>
      <HeadMetaData />
      <main>
        <section className="w-[100vw] h-[100vh]">
          <HomePage />
        </section>
      </main>
    </>
  );
}
