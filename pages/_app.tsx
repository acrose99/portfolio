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
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content="Alex Rose" />
        <meta name="designer" content="Alex Rose" />
        <meta name="publisher" content="Alex Rose" />
        <meta
          name="google-site-verification"
          content="VdvpZmr1DbaSdgpZajFCWx4patEfFHA6o1gH42zSFv0"
        />
        {/* Search Engine Optimization Meta Tags */}
        <title>Alex Rose</title>
        <meta
          name="description"
          content="Alex Rose is a Software Developer located in Chicago"
        />
        <meta
          name="keywords"
          content="Alex Rose, Alex Rose Loyola, Alex Rose Developer, Alex Rose Chicago, Alex Digital Humanities"
        />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/*
  Facebook Open Graph meta tags
    documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta property="og:type" content="site" />
        <meta property="og:url" content="https://www.alexrose.xyz/" />
        <meta property="og:site_name" content="Alex Rose" />
        <meta property="og:title" content="Alex Rose's Site" />
        <meta
          property="og:description"
          content="Alex Rose is a Software Engineer located in Chicago"
        />
        <meta property="og:image" content="https://alexrose.xyz/ogImage.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          color="#000000"
          href="/icons/safari-pinned-tab.svg"
        />
        <link rel="apple-touch-startup-image" href="/startup.png" />
        <meta name="msapplication-TileColor" content="#da532c" />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
    <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
