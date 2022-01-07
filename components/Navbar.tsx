import React from "react";
import StyledLink from "./StyledLink";
import Image from "next/image";
interface NavBarProps {
  scrollTo: (index: number) => void;
}
function Navbar({ scrollTo }: NavBarProps) {
  return (
    <nav
      className="absolute z-50 space-x-2 sm:space-x-6 md:space-x-12 lg:space-x-24 flex justify-start items-center bg-white transition ease-in-out duration-[2000] border-slate-500 border-b-2 "
      style={{
        height: "5rem",
        width: "100%",
        // @ts-ignore
      }}
    >
      <div className="ml-2 sm:ml-12 cursor-pointer hover:hue-rotate-180 hover:scale-110 transition-all duration-1000"
        onClick={() => scrollTo(0)}
      >
        <Image src="/logo.svg" alt="Homepage" width={50} height={50} />
      </div>
      {/* @ts-ignore */}
      <p
        onClick={() => scrollTo(1)}
        className="text-base sm:text-xl hover:text-indigo-500 cursor-pointer"
      >
        About
      </p>
      <p
        onClick={() => scrollTo(2)}
        className="text-base sm:text-xl hover:text-indigo-500 cursor-pointer"
      >
        Projects
      </p>
      <p
        onClick={() => scrollTo(4)}
        className="text-base sm:text-xl hover:text-indigo-500 cursor-pointer"
      >
        Languages
      </p>
      <p
        onClick={() => scrollTo(5)}
        className="text-base sm:text-xl hover:text-indigo-500 cursor-pointer"
      >
        Frameworks
      </p>
      <p
        onClick={() => scrollTo(6.3)}
        className="text-base sm:text-xl hover:text-indigo-500 cursor-pointer"
      >
        Contact
      </p>
    </nav>
  );
}

export default Navbar;
