import { ParallaxLayer } from "@react-spring/parallax";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface LanguageProps {
  name: string;
  icon: string;
  color: string;
}

function Language({ name, icon, color }: LanguageProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
    title={name}
    >
      <Icon
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        icon={icon}
        className="h-24 w-24 sm:w-32 sm:h-32 md:h-48 md:w-48 lg:w-64 lg:h-64 text-slate-500 transition-all duration-500 hover:text-slate-700"
        style={{
          //@ts-ignore
          color: hovered ? color : null,
        }}
      />
    </div>
  );
}

function Languages() {
  return (
    <ParallaxLayer offset={5} speed={0.1} factor={1}>
      <section className="flex flex-col items-center text-center my-96 sm:my-24 mx-4 justify-center space-y-12">
        <h1 className="flex text-5xl sm:text-7xl text-slate-800">
          Languages I use
        </h1>
        <div className="flex h-16 w-4/6 border-t-4 border-slate-500"></div>
        <div className="flex flex-row space-x-2 sm:space-x-12">
          <Language name="TypeScript" icon="cib:typescript" color="#007acc" />
          <Language name="JavaScript" icon="cib:javascript" color="#f1e05a" />
          <Language name="Python" icon="cib:python" color="#3572A5" />
        </div>
      </section>
    </ParallaxLayer>
  );
}

export default Languages;
