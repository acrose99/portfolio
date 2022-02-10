import Head from "next/head";
import { animated, config, useSpring } from "react-spring";
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
        imageWidth="700px"
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
            It has about ~3,600 downloads at the time of writing.
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
    display: animationActive ? "block" : "none",
    transform: animationActive
      ? "translateX(0)"
      : Math.random() > 0.5
      ? "translateX(10px)"
      : "translateX(-10px)",
    config: {
      duration: 500,
      ...config.gentle,
    },
  });
  useEffect(() => {
    setAnimationActive(true);
  }, []);
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
        <meta name="og:type" content="site" />
        <meta name="og:url" content="https://www.alexrose.xyz/" />
        <meta name="og:site_name" content="Alex Rose" />
        <meta
          name="og:description"
          content="Alex Rose is a Software Developer located in Chicago"
        />
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
      <div className="text-center">
        <Text h1>Alex Rose.</Text>
        <Text small i>
          <Link color block href="https://www.mypronouns.org/they-them">
            (they/them)
          </Link>
        </Text>
      </div>
      <NavigationInput setPage={(page) => handleInputChange(page)} />
      <div className="flex w-full justify-center">
        <div
          style={{ borderColor: theme.palette.accents_8 }}
          className="items-center w-5/6 border-t-4"
        ></div>
      </div>
      <animated.div style={contentAppear}>
        <Content songs={songs} setPage={setPage} page={page} />
      </animated.div>
    </div>
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
