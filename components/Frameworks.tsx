import { ParallaxLayer } from "@react-spring/parallax";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface LanguageProps {
  name: string;
  icon: string;
  color: string;
}

function Framework({ name, icon, color }: LanguageProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div title={name}>
      <Icon
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        icon={icon}
        className="h-24 w-24 sm:w-32 sm:h-32 md:h-48 md:w-48 text-slate-500 transition-all duration-500 hover:text-slate-700"
        style={{
          //@ts-ignore
          color: hovered ? color : null,
        }}
      />
    </div>
  );
}

function Frameworks() {
  return (
    <ParallaxLayer offset={5} speed={0.1} factor={1}>
      <section className="flex flex-col items-center text-center sm:my-24 my-36 mx-4 justify-center space-y-12">
        <h1 className="flex text-5xl sm:text-7xl text-slate-800">Frameworks I use</h1>
        <div className="flex h-16 w-4/6 border-t-4 border-slate-500"></div>
        <div className="flex flex-col space-y-12 mx-24">
          <div className="flex flex-row space-x-12">
            <Framework name="React" icon="cib:react" color="#61dafb" />
            <Framework name="Next.JS" icon="cib:next-js" color="black" />
            <Framework name="Svelte" icon="cib:svelte" color="#FF3E00" />
          </div>
          <div className="flex flex-row space-x-12">
            <Framework
              name="Expresss"
              icon="simple-icons:express"
              color="black"
            />
            <Framework
              name="Tailwind"
              icon="bx:bxl-tailwind-css"
              color="#44A8B3"
            />
            <Framework name="Figma" icon="bx:bxl-figma" color="red" />
          </div>
        </div>
      </section>
    </ParallaxLayer>
  );
}

export default Frameworks;
