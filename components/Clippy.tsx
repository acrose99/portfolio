import useSound from "use-sound";
import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
interface Props {
    scrollTo: (index: number) => void;
}
function Clippy({
    scrollTo
}: Props) {
const [play] = useSound('/audio/windows.mp3');
  return (
    <ParallaxLayer offset={8.5} speed={0.5} factor={1}>
      <div
        className="flex justify-center cursor-pointer"
        onClick={() => {
            play();
            scrollTo(0);
        }}
      >
        <Image src="/clippy.png" alt="Clippy" width={500} height={500} />
      </div>
    </ParallaxLayer>
  );
}

export default Clippy;
