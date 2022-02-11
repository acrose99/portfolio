import { Text } from "@geist-ui/core";
import Image from "next/image";
import Link from "next/link";
function Geocities() {
  return (
    <div className="text-center mx-24 flex justify-center flex-col">
      <div
        className="w-screen h-[30rem] fixed left-0 hue-rotate-180"
        style={{
          backgroundRepeat: "repeat",
          backgroundImage: `url("/Gold_twinkling_stars_Black_Background.gif")`,
        }}
      />
      <Link href="/" passHref>
        <Image
          className="cursor-pointer"
          src="/text.gif"
          alt="Alex's Site (geocities)"
          width={1000}
          height={200}
        ></Image>
      </Link>
      <Text h2 className="my-12">
        My name is <span className="text-red-300">Alex Rose!!</span> I went to
        Loyola and studiend something called Computer SCience. Now I have a
        job??.
      </Text>
      <div className="flex flex-row flex-wrap">
        <Image
          src="/yahool.gif"
          alt="Yahooligans"
          width={350}
          height={200}
        ></Image>
        <div className="mx-12">
          <Image
            src="/computer_surfing_md_wht.gif"
            alt="computer surfing"
            width={350}
            height={200}
          ></Image>
        </div>
        <div className="mx-12">
          <Image
            src="/ComputerPenguin.gif"
            alt="penquin typing"
            width={300}
            height={200}
          ></Image>
        </div>
      </div>
      <Image
        src="/Under_Construction_Bar.gif"
        alt="under construction"
        width={300}
        height={200}
      ></Image>
    </div>
  );
}

export default Geocities;
