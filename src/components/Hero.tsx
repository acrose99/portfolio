import React from "react";

import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <main className="flex h-screen max-h-screen flex-col items-center justify-center md:justify-start overflow-hidden bg-gradient-to-br py-12 font-serif sm:mt-3 sm:gap-12 sm:px-0 md:px-0 md:pt-24">
      <Image
        className="z-0 opacity-70 background-image"
        quality={100}
        src="/images/appia.png"
        alt="Meriana.org Logo"
        objectFit="cover"
        priority
        fill
      />
      <div className="overflow-auto pb-6 z-10 animate-enter-up mx-3 font-semibold flex flex-col gap-3 lg:w-5/12  md:gap-6  lg:text-left xl:ml-0 bg-white bg-opacity-60 delay-200 p-2 md:p-6 backdrop-blur-[3px] rounded-lg shadow-lg">
        <h1 className=" font-serif text-3xl font-extrabold tracking-tight text-[#447271] md:text-4xl xl:text-5xl">
          Hi! I'm Alex Rose.
        </h1>
        <p className="text-base text-[#465959] md:text-lg">
          I’m extremely passionate about using technology for good: I'm creating
          a non profit to do this which you can see here:{" "}
          <Link
            href="https://meriana.org"
            className="underline hover:text-[#447271]"
          >
            Meriana.org
          </Link>
          . <br />
          <br />
          If you are interested in digital humanities I would love to talk at{" "}
          <Link
            className="underline hover:text-[#447271]"
            href="mailto:acrosemail@gmail.com"
          >
            {" "}
            acrosemail@gmail.com{" "}
          </Link>
        </p>
        <h3 className="text-lg text-[#465959] md:text-2xl">
          In my free time I made or helped make:
        </h3>
        <ul className="list-inside list-disc text-base text-[#465959] md:text-lg">
          <li>
            <Link
              className="underline hover:text-[#447271]"
              href="https://kaupunk.me/"
              target="_blank"
            >
              Kaupunk: A Community Driven Sustainable Tourism Platform
            </Link>
          </li>
          <li>
            <Link
              className="underline hover:text-[#447271]"
              href="https://digitalhumanities.app/"
              target="_blank"
            >
              Digital Humanities Showcase
            </Link>
          </li>
          <li>
            <Link
              className="underline hover:text-[#447271]"
              href="https://history-of-computing.vercel.app/Timeline/all"
              target="_blank"
            >
              History of Computing Timeline
            </Link>
          </li>
          <li>
            <Link
              className="underline hover:text-[#447271]"
              href="https://digital-humanities-concept-acrose99.vercel.app/"
              target="_blank"
            >
              Black Panther Party Digital Exhibit
            </Link>
          </li>
          <li>
            <Link
              className="underline hover:text-[#447271]"
              href="https://marketplace.visualstudio.com/items?itemName=aerokaido.three-js-snippets"
              target="_blank"
            >
              ThreeJS Snippets (36,000+ installs)
            </Link>
          </li>
          <li>More to come...</li>
        </ul>
        <Link
          className="text-lg text-[#465959] md:text-2xl underline hover:text-[#447271]"
          href="https://www.cccis.com/"
        >
          I work here{" "}
        </Link>

        <Link
          href="https://www.metmuseum.org/art/collection/search/404323"
          className="text-sm text-[#465959]  font-thin italic font-serif flex items-center hover:underline"
        >
          Artwork by Giovanni Battista Piranesi
        </Link>
      </div>
    </main>
  );
}

export default Hero;
