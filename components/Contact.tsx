import { Text, Link } from "@geist-ui/core";
function Contact() {
  return (
    // <ParallaxLayer offset={7} speed={0.1} factor={1}>
    <section className="flex flex-col items-center mx-4 space-y-12">
      <article className="w-10/12 text-lg">
        <Text p>
          I am always open to new opportunities. Contact me if you think I may
          be a good fit for your team.
          <br />
          <br />
          Additionally, if you are interested in the digital humanities, I would{" "}
          <i> really </i>love to work with you on a project. Please reach out!
        </Text>
      </article>
      <article className="sm:w-10/12 text-lg">
        <ul>
          <li>
            <Link
              icon
              block
              color
              href="mailto:acrosemail#gmail.com"
              // className="text-slate-800 hover:text-blue-500 transition-colors"
            >
              Shoot me an email.
            </Link>
          </li>
          <li>
            <Link
              className="whitespace-nowrap"
              icon
              block
              color
              href="https://github.com/acrose99"
              // className="text-slate-800 hover:text-blue-500 transition-colors"
            >
              Alternatively, check out my GitHub.
            </Link>
          </li>
        </ul>
      </article>
    </section>
    // </ParallaxLayer>
  );
}

export default Contact;
