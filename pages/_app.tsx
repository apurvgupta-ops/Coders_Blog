import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto w-[80%] font-sans">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
