import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import NextProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto w-[80%] font-sans">
        <NextProgress color="#53bd95" />
        <Header />
        <main className="pb-36">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
