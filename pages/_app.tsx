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
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
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
      <DefaultSeo
        title="Alex Rose"
        description="Alex Rose is a Software Developer located in Chicago"
        canonical="https://www.alexrose.xyz/"
        openGraph={{
          url: "https://www.alexrose.xyz/",
          title: "Alex Rose",
          description: "Alex Rose is a Software Developer located in Chicago",
          images: [
            {
              url: "http://alexrose.xyz/ogImage.png",
              secureUrl: "https://alexrose.xyz/ogImage.png",
              width: 1200,
              height: 630,
              alt: "Alex Rose",
              type: "image/png",
            },
          ],
          site_name: "Alex Rose",
        }}
      />
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
