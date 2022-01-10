import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { useState } from "react";
import { useSpring, config, animated } from "react-spring";
import useSound from "use-sound";

function Hero() {
  const [playing, setPlaying] = useState(false);
  const [shouldRotate, setShouldRotate] = useState(false);
  let rotate = useSpring({
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: shouldRotate ? "rotateX(360deg)" : "rotate(0deg)",
    },
    loop: true,
    config: {
      duration: shouldRotate ? 5000 : 1000,
      ...config.gentle,
    },
  });
  const [play, { pause }] = useSound("/audio/sexyback.webm", {
    volume: 0.3,
  });
  return (
    <ParallaxLayer offset={0}  factor={1}>
      <section className="flex flex-col sm:flex-row items-center justify-center space-x-24 my-36 mx-12">
        <h1 className="text-5xl sm:text-7xl w-5/6 my-12 sm:my-0">
          <span className="font-bold">Hey! </span>
          My name is <span className="font-bold">Alex </span>
          and I like making things.
        </h1>
        <animated.div
          className="cursor-pointer"
          style={rotate}
          onClick={() => {
            setShouldRotate(!shouldRotate);
            if (!playing) {
              play();
              setPlaying(true);
            } else {
              pause();
              setPlaying(false);
            }
          }}
        >
          <Image
            quality={100}
            priority={true}
            src="/AlexRose.png"
            alt="Alex Rose"
            width={700}
            height={800}
          />
        </animated.div>
      </section>
    </ParallaxLayer>
  );
}

export default Hero;
