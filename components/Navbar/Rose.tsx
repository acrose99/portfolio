import Image from "next/image";
interface RoseProps {
    switchThemes: () => void;
}
import useSound from "use-sound";
import { useTheme } from "@geist-ui/core";

function Rose({
    switchThemes
}: RoseProps) {
    const theme = useTheme();
    return (
      <div
        className="absolute top-16 mx-2 sm:mx-12 cursor-pointer hover:scale-110 hover:rotate-45 transition-all duration-[2000ms]"
        style={{
            filter: theme.type === "dark" ? "grayscale(100%)" : "hue-rotate(90deg)",
        }}
        // onClick={() => scrollTo(0)}
        onClick={() => switchThemes()}
      >
        <Image src="/logo.svg" alt="Homepage" width={40} height={40} />
      </div>
    );
}

export default Rose
