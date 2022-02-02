import { Divider, Text, Link } from "@geist-ui/core";
import { Compass } from "@geist-ui/icons";

function Footer() {
  return (
    <footer className="py-6">
      <Divider />
      <div className="flex flex-col items-center sm:flex-row justify-evenly pt-6">
        <Text p className="">
          Made with React, Next.JS, Vercel, and Love.
        </Text>
        <Text p className="flex">
          <Compass className="mx-4" /> Chicago
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
