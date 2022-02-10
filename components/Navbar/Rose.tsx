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
        className="mx-12 cursor-pointer hover:scale-110 hover:rotate-[20deg] transition-all duration-1000"
        style={{
            filter: theme.type === "dark" ? "grayscale(100%)" : "grayscale(0%)",
        }}
        // onClick={() => scrollTo(0)}
        onClick={() => switchThemes()}
      >
        <Image src="/logo.svg" alt="Homepage" width={50} height={50} />
      </div>
    );
}

export default Rose
