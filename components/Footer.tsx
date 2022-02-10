import { Divider, Text, Link } from "@geist-ui/core";
import { Compass } from "@geist-ui/icons";
import { useState } from "react";
import {animated, useSpring} from 'react-spring'
function Footer() {
  const [compassHovering, setCompassHovering] = useState(false);
  const compassSpring = useSpring({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: compassHovering ? 'rotate(360deg)' : 'rotate(0deg)',
    },
    config: {
      duration: 1000,
    },
    loop: true,
  });
  return (
    <footer className="py-6">
      <Divider />
      <div className="flex flex-col items-center sm:flex-row justify-evenly pt-6">
        <Text p className="">
          Made with React, Next.JS, Vercel, and Love.
        </Text>
        <Text
          onMouseEnter={() => setCompassHovering(true)}
          onMouseLeave={() => setCompassHovering(false)}
          className="flex cursor-pointer"
        >
          <animated.div style={compassSpring} className="flex">
            <Compass className="mx-4 rotate-45" />
          </animated.div>
          Chicago
        </Text>
        <Text p className="">
          <Link block color href="https://github.com/acrose99/portfolio">
            Source Code
          </Link>
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
