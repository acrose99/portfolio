import { ParallaxLayer } from "@react-spring/parallax";

interface Props {}

function About(props: Props) {
  const {} = props;

  return (
    <ParallaxLayer offset={1} speed={0.1} factor={1}>
      <section className="flex flex-col items-center text-center sm:my-24 my-36 mx-4 justify-center space-y-12">
        <h1 className="flex text-5xl sm:text-7xl text-slate-800">Who am I?</h1>
        <div className="flex h-16 w-4/6 border-t-4 border-slate-500"></div>
        <article className="flex flex-col prose prose-lg text-slate-800">
          <p>
            I’m a Senior at Loyola University Chicago studying Computer Science.
            I graduated early in December last year with a B.S with a Minor in
            History. I was also the Vice President of Loyola’s computer science
            club for a while.
          </p>
          <p>
            Now, I'm an Associate Software Engineer at{" "}
            <a href="https://cccis.com">CCCIS</a> doing ✨ <i>frontend</i> ✨
            devolopment.
          </p>
          <p>
            My greatest passion is innovation within the digital humanities.
            It’s a way to use programming for good by educating people about new
            subjects. To this end I did a fellowship making a project about the
            History of Computing as a Junior, and I’m currently working on an
            digitial exhibit about the Black Panthers for the Chicago History
            Museum, which should be unveiled later in 2022 or 2023 (contact me
            if you want more info).
          </p>
          <p>Otherwise, I like making nice websites and helping others.</p>
        </article>
      </section>
    </ParallaxLayer>
  );
}

export default About;
