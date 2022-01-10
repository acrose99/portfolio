import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

function Contact() {
  return (
    <ParallaxLayer offset={7} speed={0.1} factor={1}>
      <section className="flex flex-col items-center sm:my-24 my-36 mx-4 space-y-12">
        <h1 className="flex text-5xl sm:text-7xl text-slate-800">
          Contact Me!
        </h1>
        <div className="flex h-16 w-4/6 border-t-4 border-slate-500"></div>
        <article className="flex flex-col prose prose-2xl text-slate-800 w-full justify-start pl-4">
            <p>
                I am always open to new opportunities. Contact me if you think I may be a good fit for your team. 
                <br />
                <br />
                Additionally, if you are interested in the digital humanities, I would <i> really </i>love to work with you on a project. Please reach out! 
            </p>
          <li>
            <a
              href="mailto:acrosemail#gmail.com"
              className="text-slate-800 hover:text-blue-500"
            >
              Shoot me an email.
            </a>
          </li>
          <li>
            <a
              href="https://github.com/acrose99"
              className="text-slate-800 hover:text-blue-500"
            >
              Alternatively, check out my GitHub.
            </a>
          </li>
          <p>
              I don't have a LinkedIn, sorry!
          </p>
        </article>
      </section>
    </ParallaxLayer>
  );
}

export default Contact;
