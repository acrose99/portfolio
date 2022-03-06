import "../styles/globals.css";
import "@fontsource/raleway";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import useSound from "use-sound";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [themeType, setThemeType] = useState("light");
  const [drop] = useSound("/audio/drop.mp3", { volume: 2 });
  const [pick] = useSound("/audio/pickFlower.wav", { volume: 2 });
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
    if (themeType === "dark") {
      drop();
    } else if (themeType === "light") {
      pick();
    }
  };
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setThemeType("dark");
    }
  }, []);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Navbar switchThemes={switchThemes} />
        <Component switchThemes={switchThemes} {...pageProps} />
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-04KLC3DPQS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-04KLC3DPQS');
        `}
        </Script>
      </GeistProvider>
    </>
  );
}
export default MyApp;
