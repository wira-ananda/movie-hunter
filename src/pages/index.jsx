"use client";

import { useState } from "react";
import FilmPage from "@/components/FIlmPage";
import HomePage from "@/components/HomePage";

export default function Home() {
  const [pageId, setPageId] = useState();
  const [onData, setOnData] = useState(false);

  const handleTest = (thumbnailId) => {
    setOnData(true);
    setPageId(thumbnailId);
  };

  console.log(onData);
  console.log(pageId);

  return (
    <main>
      <div className="w-[100vw] h-[100vh]">
        {onData ? (
          <FilmPage pageId={pageId} />
        ) : (
          <HomePage handleTest={handleTest} setOnData={setOnData} />
        )}
      </div>
    </main>
  );
}
