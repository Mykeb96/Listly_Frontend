import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
