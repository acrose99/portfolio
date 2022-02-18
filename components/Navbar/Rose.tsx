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
        className="mx-12 z-50 cursor-pointer hover:scale-110 hover:rotate-45 transition-all duration-[2000ms]"
        style={{
            filter: theme.type === "dark" ? "grayscale(100%)" : "hue-rotate(90deg)",
        }}
        // onClick={() => scrollTo(0)}
        onClick={() => switchThemes()}
      >
        <Image src="/logo.svg" alt="Homepage" width={50} height={50} />
      </div>
    );
}

export default Rose
