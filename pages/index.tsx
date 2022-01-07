import Head from "next/head";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { config } from "react-spring";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import { useRef, useState } from "react";
import Languages from "../components/Languages";
import Frameworks from "../components/Frameworks";
import Contact from "../components/Contact";
import Clippy from "../components/Clippy";
export default function Home() {
  const parallax = useRef<IParallax>(null);
  function scrollTo(index: number) {
    if (parallax.current) {
      parallax.current.scrollTo(index);
    }
  }
  /* @ts-ignore */
  return (
    <>
      <Head>
        <title>Alex Rose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar scrollTo={scrollTo} />
      <Parallax 
      config={config.slow}
      ref={parallax} pages={10}>
        <Hero />
        <About />
        <Projects />
        <Languages/>
        <Frameworks/>
        <Contact />
        <Clippy
          scrollTo={scrollTo}
         />
      </Parallax>
    </>
  );
}
