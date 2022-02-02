import Head from "next/head";
import { animated, config, useSpring } from "react-spring";
import About from "../components/About";
import { useEffect, useRef, useState } from "react";
import Languages from "../components/Languages";
import Frameworks from "../components/Frameworks";
import Contact from "../components/Contact";
import { Select, Text, useTheme } from "@geist-ui/core";
import Resume from "../components/Resume";
import NavigationInput from "../components/NavigationInput";
import Project from "../components/Projects/Project";
interface ContentProps {
  page: string;
  setPage: (page: string) => void;
}

function Content({ page, setPage }: ContentProps): JSX.Element {
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
        children={
          <div
            style={{
              color: theme.palette.accents_8,
            }}
          >
            <Text h4 b>
              Digital exhibit with the Chicago History Museum to showcase and
              educate people about the legacy of the Black Panthers. Website is
              built using React/Next.JS, using Tailwind for styling, and Figma
              for prototyping and wireframes.
            </Text>
            <br />
            <Text h4 b>
              To be released in 2022 or 2023.
            </Text>
          </div>
        }
        tags={["React", "Next.js", "Tailwind", "Figma"]}
      />
    );
  } else if (page === "History of Computing") {
    return (
      <Project
        title="History of Computing"
        src="/projects/hoc.png"
        imageWidth="700px"
        children={
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
          </div>
        }
        href="https://history-of-computing.vercel.app/"
        tags={["React", "Next.js", "Figma"]}
      />
    );
  } else if (page === "Don't Panic") {
    return (
      <Project
        title="Don't Panic"
        src="/projects/dontPanic.png"
        children={
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
        }
        href="https://dont-panic-luc.github.io/"
        tags={["Svelte", "Sapper"]}
      />
    );
  } else if (page === "Three.js Snippets") {
    return (
      <Project
        title="Three.js Snippets"
        src="/projects/threeJS.png"
        children={
          <div
            style={{
              color: theme.palette.accents_8,
            }}
          >
            <Text h4 b>
              A collection of snippets of code for Three.JS, a javascript
              library, for React and Javascript, in the form of a VScode
              extension.
              <br />
              <br />
              It has about ~3,600 downloads at the time of writing.
            </Text>
          </div>
        }
        imageWidth="400px"
        imageHeight="400px"
        href="https://marketplace.visualstudio.com/items?itemName=aerokaido.three-js-snippets/"
        tags={["React", "Javascript", "Three.js", "VScode"]}
      />
    );
  } 
  else if (page === "Languages") {
    return <Languages />;
  }
  else if (page === "Frameworks") {
    return <Frameworks />;
  }
  else return <>{page}</>;
}

export default function Home() {
  const [page, setPage] = useState("Bio");
  const [animationActive, setAnimationActive] = useState(false);
  const theme = useTheme();
  const contentAppear = useSpring({
    opacity: animationActive ? 1 : 0,
    display: animationActive ? "block" : "none",
    transform: animationActive ? "translateX(0)" : Math.random() > 0.5 ? "translateX(10px)" : "translateX(-10px)",
    config: {
      duration: 500,
      ...config.gentle,
    },
  });
  useEffect(() => {
    setAnimationActive(true);
  }, []);
  /* Set Document Title to page name */
  function handleInputChange(value: string) {
    setAnimationActive(false);
    setTimeout(() => {
      setPage(value);
    }, 500);
    setTimeout(() => {
      setAnimationActive(true);
    }, 750);
  }
  return (
    <div className="space-y-8 min-h-screen">
      <Head>
        <title>Alex Rose: {page} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text className="text-center" h1>
        Alex Rose.
      </Text>
      <NavigationInput setPage={(page) => handleInputChange(page)} />
      <div className="flex w-full justify-center">
        <div
          style={{ borderColor: theme.palette.accents_8 }}
          className="items-center w-5/6 border-t-4"
        ></div>
      </div>
      <animated.div style={contentAppear}>
        <Content setPage={setPage} page={page} />
      </animated.div>
    </div>
  );
}
