import { Html, Head, Main, NextScript } from "next/document";
import { poppins } from "@/pages/api/font";
import Header from "@/components/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${poppins.className}`}>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
