import React from "react";
import StyledLink from "./StyledLink";
import Image from "next/image";
import Rose from "./Navbar/Rose";
import { Github } from "@geist-ui/icons";
import { Link } from "@geist-ui/core";
interface NavBarProps {
  scrollTo?: (index: number) => void;
  switchThemes: () => void;
}
function Navbar({ scrollTo, switchThemes }: NavBarProps) {
  return (
    <nav
      className="flex items-center py-6"
      style={
        {
          // @ts-ignore
        }
      }
    >
      <Rose switchThemes={switchThemes} />
    </nav>
  );
}

export default Navbar;
