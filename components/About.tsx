import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { useState } from "react";
import { useSpring, config, animated } from "react-spring";
import { Text } from "@geist-ui/core";
function About() {
  return (
    // <ParallaxLayer offset={0}  factor={1}>
    <section className="flex flex-col items-center text-center mx-4 justify-center">
      <article className="text-lg w-10/12 ">
        <Text p>
          I went to Loyola University Chicago and studied Computer Science. I
          graduated early in December last year with a B.S with a Minor in
          History. I was also the Vice President of Loyola’s computer science
          club for a while.
        </Text>
        <Text p>
          Now, I'm an Associate Software Engineer at{" "}
          <a href="https://cccis.com">CCCIS</a> doing frontend development.
        </Text>
        <Text p>
          My greatest passion is innovation within the digital humanities. It’s
          a way to use programming for good by educating people about new
          subjects. To this end I did a fellowship making a project about the
          History of Computing as a Junior, and I’m currently working on an
          digitial exhibit about the Black Panthers for the Chicago History
          Museum, which should be unveiled later in 2022 or 2023 (contact me if
          you want more info).
        </Text>
        <Text p>
          Otherwise, I think learning by doing is the best way to learn, and it
          helps me feel productive. Thus, I have a few side projects you can
          check out.
        </Text>
        <Text p>Otherwise, I like running and house music.</Text>
      </article>
      <Image
        priority
        quality={100}
        objectFit="contain"
        src="/AlexRose.jpeg"
        alt="Alex Rose"
        width={400}
        height={400}
      />
    </section>
    // </ParallaxLayer>
  );
}

export default About;
