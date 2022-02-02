import { Collapse, Text } from "@geist-ui/core";

function Languages() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-10/12">
        <Collapse.Group className="space-y-12">
          <Collapse title="Typescript" shadow subtitle="Experience: 1 year">
            <Text>
              I haven't been using TypeScript for that long of a time, but I
              have fallen in love with it. I have used it for a variety of
              projects, like the Black Panther Narratives project, and this
              website! I would describe my skill level as intermediate. I'm
              comfortable with it and I'm confident I can do a tech interview,
              but I'm by no means an expert (yet).
            </Text>
          </Collapse>
          <Collapse title="Javascript" shadow subtitle="Experience: 2-3 years">
            <Text>
              I have been using Javascript for a long time, and I'm very
              comfortable with it. I first started using it as a sophomore in
              High School to look up the campaign finances of members of
              Congress. I really got into web development and the language near
              the end of my Freshman year in College. Like Typescript, I'm
              comfortable with it but I won't call myself an expert until later
              in my career.
            </Text>
          </Collapse>
          <Collapse title="Python" shadow subtitle="Experience: 1 year">
            <Text>
              Python was the first real language I used, but more recently I've
              been focused on web development. Regardless, I've used Python for
              scripting and scraping data and I could pick it back up quicker
              then other high level programming languages like Java.
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </section>
  );
}

export default Languages;
