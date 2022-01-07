import { ParallaxLayer } from '@react-spring/parallax';
import Image from "next/image";

interface Props {}

function Hero(props: Props) {
    const {} = props

    return (
      <ParallaxLayer offset={0} speed={0.1} factor={1}>
        <section className="flex flex-col sm:flex-row items-center justify-center space-x-24 my-36 mx-12">
          <h1 className="text-5xl sm:text-7xl text-slate-800 w-5/6 my-12 sm:my-0">
            <span className="font-bold">Hey! </span>
            My name is <span className="font-bold">Alex </span>
            and I like making things.
          </h1>
          <Image 
          quality={100}
          priority={true}
          src="/AlexRose.png" alt="Alex Rose" width={700} height={800} />
        </section>
      </ParallaxLayer>
    );
}

export default Hero
