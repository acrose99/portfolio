import "../styles/globals.css";
import "@fontsource/raleway";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [themeType, setThemeType] = useState("light");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
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
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Navbar switchThemes={switchThemes} />
      <Component switchThemes={switchThemes} {...pageProps} />
      <Footer />
    </GeistProvider>
  );
}
export default MyApp;
