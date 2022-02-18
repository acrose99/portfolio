import Image from "next/image";
import { Text } from "@geist-ui/react";
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";
type slide = { title: string; definition: string; src: string; index: number };
interface slideProps {
  slide: slide;
}

function Slide({ slide }: slideProps) {
  let slideSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });
  return (
    <animated.div
      style={slideSpring}
      className="flex flex-col items-center md:flex-row md:justify-evenly mx-12 space-y-2 md:space-x-12"
    >
      <div className="flex md:items-end" style={{}}>
        <Image
          alt={slide.title}
          src={slide.src}
          objectFit="cover"
          height={350}
          width={600}
          quality={100}
          priority={true}
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
        />
      </div>
      <div className="flex-col md:items-start">
        <Text className="text-4xl md:text-6xl font-black whitespace-nowrap">
          {slide.title}
        </Text>
        <Text className="text-3xl md:text-4xl font-bold italic ">
          Definition:
        </Text>
        <Text className="text-xl md:text-2xl font-light">
          {slide.definition}
        </Text>
      </div>
    </animated.div>
  );
}

export default Slide;
