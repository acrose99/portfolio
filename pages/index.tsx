import Head from "next/head";
import { animated, config, useChain, useSpring } from "react-spring";
import About from "../components/About";
import { useEffect, useRef, useState } from "react";
import Languages from "../components/Languages";
import Frameworks from "../components/Frameworks";
import Contact from "../components/Contact";
import { Link, Select, Text, useTheme } from "@geist-ui/core";
import Resume from "../components/Resume";
import NavigationInput from "../components/NavigationInput";
import Project from "../components/Projects/Project";
import Music from "../components/Music";
import { getSongs } from "./api/getSongs";
import Slide from "../components/Hero/Slide";
import { NextSeo } from "next-seo";

type song = {
  artist: string;
  url: string;
  file: string;
  content?: string;
};

interface ContentProps {
  page: string;
  setPage: (page: string) => void;
  songs: song[];
}

function Content({ page, setPage, songs }: ContentProps): JSX.Element {
  const theme = useTheme();
  if (page === "Bio") {
    return <About />;
  } else if (page === "Contact") {
    return <Contact />;
  } else if (page === "Resume") {
    return (
      <div className="overflow-hiddens">
        <Resume />
      </div>
    );
  } else if (page === "Black Panthers") {
    return (
      <Project
        title="Black Panther Narratives"
        src="/projects/blackPantherNarratives.jpeg"
        tags={["React", "Next.js", "Tailwind", "Figma"]}
      >
        <div
          style={{
            color: theme.palette.accents_8,
          }}
        >
          <Text h4 b>
            Digital exhibit with the Chicago History Museum to showcase and
            educate people about the legacy of the Black Panthers. Website is
            built using React/Next.JS, using Tailwind for styling, and Figma for
            prototyping and wireframes.
          </Text>
          <br />
          <Text h4 b>
            To be released in 2022 or 2023.
          </Text>
        </div>
      </Project>
    );
  } else if (page === "History of Computing") {
    return (
      <Project
        title="History of Computing"
        src="/projects/hoc.png"
        imageHeight="500px"
        imageWidth="400px"
        href="https://history-of-computing.vercel.app/"
        tags={["React", "Next.js", "Figma"]}
      >
        <div
          style={{
            color: theme.palette.accents_8,
          }}
        >
          <Text h4 b>
            Created a front-end website meant to visualize the History of
            Computing in a unique way, by highlighting other historical fields
            like the history of culture, ancient history, etc. The website was
            built with Next.JS/React, hosted on Vercel, and designed partially
            on Figma.
          </Text>
          <br />
          <Text h4 b>
            I managed a team of three students (in cooperation with the Loyola
            Software Systems Laboratory) for a majority of the fellowship and
            reported to a professor.
          </Text>
          <Text h5 i>
            I&apos;ve been periodically working on this project since the
            fellowship ended, myself, because I like having something to
            incrementally development.
          </Text>
        </div>
      </Project>
    );
  } else if (page === "Don't Panic") {
    return (
      <Project
        title="Don't Panic"
        src="/projects/dontPanic.png"
        href="https://dont-panic-luc.github.io/"
        tags={["Svelte", "Sapper"]}
      >
        <div
          style={{
            color: theme.palette.accents_8,
          }}
        >
          <Text h4 b>
            Organized events, was responsible for most communication and
            co-created the main website for Loyola University Chicago’s main
            Computer Science club on campus.
          </Text>
        </div>
      </Project>
    );
  } else if (page === "Three.js Snippets") {
    return (
      <Project
        title="Three.js Snippets"
        src="/projects/threeJS.png"
        imageWidth="400px"
        imageHeight="400px"
        href="https://marketplace.visualstudio.com/items?itemName=aerokaido.three-js-snippets/"
        tags={["React", "Javascript", "Three.js", "VScode"]}
      >
        <div
          style={{
            color: theme.palette.accents_8,
          }}
        >
          <Text h4 b>
            A collection of snippets of code for Three.JS, a javascript library,
            for React and Javascript, in the form of a VScode extension.
            <br />
            <br />
            It has about ~3,000 downloads at the time of writing.
          </Text>
        </div>
      </Project>
    );
  } else if (page === "Languages") {
    return <Languages />;
  } else if (page === "Frameworks") {
    return <Frameworks />;
  } else if (page === "Music") {
    return <Music songs={songs} />;
  } else return <>{page}</>;
}
interface HomeProps {
  songs: song[];
}
export default function Home({ songs }: HomeProps) {
  const [page, setPage] = useState("Bio");
  const [animationActive, setAnimationActive] = useState(false);
  const theme = useTheme();
  const contentAppear = useSpring({
    opacity: animationActive ? 1 : 0,
    // display: animationActive ? "block" : "none",
    transform: animationActive ? "translateY(0)" : "translateY(20px)",
    config: {
      duration: 500,
      ...config.gentle,
    },
  });
  function handleInputChange(value: string) {
    setAnimationActive(false);
    setTimeout(() => {
      setPage(value);
    }, 500);
    setTimeout(() => {
      setAnimationActive(true);
    }, 750);
  }
  let slides = [
    {
      title: "Frontend Development",
      definition:
        "Front-end web development is the development of the graphical user interface of a website.",
      src: "/slides/frontend.png",
      index: 1,
    },
    {
      title: "Digital Humanities",
      definition:
        "An area of scholarly activity at the intersection of computing or digital technologies and the disciplines of the humanities",
      src: "/projects/blackPantherNarratives.jpeg",
      index: 2,
    },
    {
      title: "Doing Good",
      definition:
        "Doing and creating things (within tech in context of this site) that may help others because it makes me feel happy.",
      src: "/projects/dontPanic.png",
      index: 3,
    },
  ];
  const [slide, setSlide] = useState(slides[0]);
  const [slideIndex, setSlideIndex] = useState(0);
  let [slideSpring, api] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
    config: {},
  }));
  function changeSlide(index: number) {
    setSlide(slides[index]);
    setSlideIndex(index);
    api.update({
      from: {
        opacity: 0,
        transform: "translateX(-100%)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0)",
      },
    });
    api.start();
  }
  return (
    <>
      <div className="space-y-8 min-h-screen">
        <div className="text-center">
          <Text h1>Alex Rose.</Text>
          <Text small i>
            <Link color block href="https://www.mypronouns.org/they-them">
              (they/them)
            </Link>
          </Text>
          <svg
            className="-z-1 overflow-visible h-full w-screen"
            style={{
              fill: theme.palette.magenta,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-72 864V1C1119.15 120.978 1794.79 290.567 2011.97 864C1632.11 665.44 464.383 781.267 -72 864Z" />
          </svg>
          <div className="flex justify-center space-x-4 cursor-pointer">
            <Text
              className="hover:text-blue-400 transition-colors duration-500"
              h2
              onClick={() => changeSlide(0)}
              style={{
                color: slideIndex === 0 ? theme.palette.cyan : undefined,
              }}
            >
              1
            </Text>
            <Text
              className="hover:text-blue-400 transition-colors duration-500"
              h2
              onClick={() => changeSlide(1)}
              style={{
                color: slideIndex === 1 ? theme.palette.cyan : undefined,
              }}
            >
              2
            </Text>
            <Text
              h2
              className="hover:text-blue-400 transition-colors duration-500"
              onClick={() => changeSlide(2)}
              style={{
                color: slideIndex === 2 ? theme.palette.cyan : undefined,
              }}
            >
              3
            </Text>
          </div>
        </div>
        <div>
          <animated.div style={slideSpring}>
            <Slide slide={slide} />
          </animated.div>
        </div>
        <div className="pt-48 flex flex-col">
          <NavigationInput setPage={(page) => handleInputChange(page)} />
          <div className="flex w-full justify-center py-12">
            <div
              style={{ borderColor: theme.palette.accents_8 }}
              className="items-center w-5/6 border-t-4"
            ></div>
          </div>
          <animated.div style={contentAppear}>
            <Content songs={songs} setPage={setPage} page={page} />
          </animated.div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  let songs = getSongs(["artist", "url"]);
  return {
    props: {
      songs: songs,
    },
  };
}
