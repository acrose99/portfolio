import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
interface ProjectProps {
  title: string;
  description: string;
  src: string;
  href: string;
  objectFit?: string;
  languages: string[];
}

import {useRouter} from "next/router";
import { useSpring, useTransition, config, animated } from "react-spring";
import { useState } from "react";
import StyledLink from "./StyledLink";

function Project({
  title,
  description,
  src,
  href,
  languages,
  objectFit,
}: ProjectProps) {
  const [clicked, setClicked] = useState(false);

  /* TODO: Chain react-spring transitions so that the 
  height of the container goes to 100vh, and after that,
  the image and text fade in. */
  const router = useRouter()

  const transitions = useTransition(clicked, {
    from: { 
      opacity: 0,
      height: "0vh",
    },
    enter: { 
      opacity: 1,
      height: "100vh",
    },
    reverse: clicked,
    delay: 200,
    config: config.molasses,
  });
  return (
    <animated.div
      className="flex flex-col m-0 space-y-0 cursor-pointer"
      onClick={
        () => {
          router.push(href);
        }
      }
    >
      <Image
        className="opacity-50 transition-all duration-500 hover:opacity-100 cursor-pointer"
        alt={title}
        width={200}
        height={150}
        priority={true}
        /* @ts-ignore */
        objectFit={objectFit ? objectFit : "cover"}
        src={src}
      />
      <div className="flex items-center justify-center h-16 bg-slate-500 hover:bg-slate-700 text-white transition-all duration-500">
        <StyledLink
          title={title}
          href={href}
          className="justify-center text-2xl mx-2"
        />
      </div>
    </animated.div>
  );
  //   ) : (
  //     <animated.div
  //       className="flex items-center left-0 z-10 bg-slate-500"
  //       onClick={() => setClicked(!clicked)}
  //       style={{
  //         width: "100vw",
  //         left: 0,
  //         position: "absolute",
  //         opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
  //         height: height.to( height => "100vh"),
  //       }}
  //     >
  //       <Image
  //         quality={100}
  //         // layout='fill'
  //         objectFit="contain"
  //         width={400}
  //         height={500}
  //         priority={true}
  //         src={src}
  //         alt={title}
  //       ></Image>
  //       <div className="flex flex-col space-y-8 justify-start">
  //         <h1 className="text-2xl sm:text-3xl md:text-5xl">{title}</h1>
  //         <p className="text-base sm:text-xl md:text-3xl">{description}</p>
  //       </div>
  //     </animated.div>
  //   )
  // );
}

function Projects() {
  return (
    <ParallaxLayer offset={2} speed={-0.08} factor={1}>
      <section className="flex flex-col items-center text-center my-96 sm:my-24 mx-4 justify-center space-y-12">
        <h1 className="flex text-5xl sm:text-7xl text-slate-800">Projects</h1>
        <div className="flex h-16 w-4/6 border-t-4 border-slate-500"></div>
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
            <animated.div
              className="flex flex-col m-0 space-y-0"
              // onClick={() => setClicked(!clicked)}
            >
              <Image
                className="opacity-50 transition-all duration-500 hover:opacity-100 cursor-pointer"
                alt="Black Panther Narratives (To be released)"
                width={200}
                quality={100}
                height={150}
                /* @ts-ignore */
                objectFit={"cover"}
                src="/projects/blackPantherNarratives.jpeg"
              />
              <div className="flex items-center justify-center h-16 bg-slate-500 hover:bg-slate-700 text-white transition-all duration-500">
                <p
                  className="justify-center text-xl mx-4"
                >
                  Black Panther Narratives (To be released)
                </p>
              </div>
            </animated.div>
            <Project
              title="History of Computing"
              description="A website for the history of computing"
              href="https://history-of-computing.vercel.app/"
              src="/projects/hoc.png"
              objectFit="contain"
              languages={["TypeScript", "React", "Next.js"]}
            />
            <Project
              title="Don't Panic"
              description="A website for the history of computing"
              href="https://dont-panic-luc.github.io/"
              src="/projects/dontPanic.png"
              languages={["Svelte"]}
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-36 md:justify-center">
            <Project
              title="Three.js Snippets"
              description="A website for the history of computing"
              href="https://marketplace.visualstudio.com/items?itemName=aerokaido.three-js-snippets"
              src="/projects/threeJS.png"
              objectFit="contain"
              languages={["TypeScript", "Javascript"]}
            />
            <Project
              title="Weathercly"
              href="https://github.com/acrose99/weathercly"
              objectFit="fill"
              description="A cli that uses Node to get the weather and weather forecast for any location."
              src="/projects/weathercly.png"
              languages={["Javascript", "Node.js"]}
            />
          </div>
        </div>
      </section>
    </ParallaxLayer>
  );
}

export default Projects;
