import { Collapse, Text } from "@geist-ui/core";

interface LanguageProps {
  name: string;
  icon: string;
  color: string;
}

function Frameworks() {
  return (
    <section className="flex flex-col items-center pb-12">
      <div className="w-10/12">
        <Collapse.Group className="space-y-12">
          <Collapse title="React" shadow subtitle="Experience: 3 years">
            <Text>
              Unlike a lot of other people, I actually learned React before I
              really got into Javascript and HTML/CSS to learn how to make
              websites. I&apos;m not sure if this was the correct choice or not,
              but I do know I really love React and it&apos;s a fantastic
              framework!
              <br />
              <br />
              I&apos;ve used it for most of my projects, and I would say
              I&apos;m somewhere in between an intermediate and advanced
              developer. I&apos;m very comfortable with most of the core
              concepts of React, but theres still some things I need to learn
              like Suspense, Redux, and Performance Optimization. This is a side
              effect of React&apos;s maturity in comparison to other frameworks
              more then anything.
              <i> There is a lot to learn.</i>
            </Text>
          </Collapse>
          <Collapse title="Figma" shadow subtitle="Experience: 3 years">
            <Text>
              I was a early adopter of Figma and I&apos;ve been using it for a
              while now before they introduced features like Variants and Auto
              Layout. Figma is a great tool for prototyping and I&apos;m very
              happy with the way it works. I use it for almost any site I make.
            </Text>
          </Collapse>
          <Collapse title="Next.js" shadow subtitle="Experience: 2 years">
            <Text>
              Next.js is a framework that I&apos;ve been using for a while now.
              I think I understand most of its features now because my main two
              projects at the moment are using it.
            </Text>
          </Collapse>
          <Collapse title="Vue" shadow subtitle="Experience: 1 year">
            <Text>
              Vue3 and the Quasar framework are what I use on a daily basis at
              my job. I&apos;sm still getting used to them at the moment.
            </Text>
          </Collapse>
          <Collapse title="Svelte" shadow subtitle="Experience: 1 year">
            <Text>
              I was introduced to Svelte through my friend{" "}
              <a
                href="https://www.henryfellerhoff.com/"
                target="_blank"
                rel="noreferrer"
              >
                Henry Fellerhoff
              </a>{" "}
              and I&apos;ve been using it intermediately ever since. I&apos;m
              not an expert or anything but I can make a decent looking site
              with enough time to shake off some rust.
            </Text>
          </Collapse>
          <Collapse title="Three.js" shadow subtitle="Experience: 1 year">
            <Text>
              Other then React, Three.JS is my favorite framework at the moment.
              I&apos;ve done a couple side projects about it which you can see
              on my Github but I will be learning/working with it more
              frequently soon.
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </section>
  );
}

export default Frameworks;
