import HomePage from "@/components/HomePage";
import { HeadMetaData } from "@/components/HeadMetaData";

export default function Home() {
  return (
    <>
      <HeadMetaData />
      <header>
        <main className="w-[100vw] h-[100vh]">
          <HomePage />
        </main>
      </header>
    </>
  );
}
