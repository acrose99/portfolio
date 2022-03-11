import Image from "next/image";
import { Text } from "@geist-ui/core";
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";
type slide = { title: string; definition: string; src: string; index: number };
interface slideProps {
  slide: slide;
}

function Slide({ slide }: slideProps) {
  return (
    <animated.div className="flex flex-col items-center md:flex-row md:justify-evenly mx-4 space-y-2 md:space-x-12">
      <div className="flex md:items-end aspect-[6/5] lg:aspect-[7/5]" style={{}}>
        <Image
          alt={slide.title}
          src={slide.src}
          objectFit="cover"
          height={350}
          width={600}
          quality={100}
          priority={true}
        />
      </div>
      <div className="flex-col md:items-start">
        <Text className="text-2xl md:text-5xl font-black">{slide.title}</Text>
        <Text className="text-xl md:text-4xl font-bold italic ">
          Definition:
        </Text>
        <Text className="text-lg md:text-2xl font-light">
          {slide.definition}
        </Text>
      </div>
    </animated.div>
  );
}

export default Slide;
